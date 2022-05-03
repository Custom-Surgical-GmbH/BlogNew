const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const crypto = require("crypto");
const { google } = require("googleapis");

require("dotenv").config();

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // google auth logic
  const scopes = "https://www.googleapis.com/auth/analytics.readonly";
  const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY,
    scopes
  );
  await jwt.authorize();

  const analyticsReporting = google.analyticsreporting({
    version: "v4",
    auth: jwt,
  });

  // Analytics Reporting v4 query
  const result = await analyticsReporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: process.env.VIEWID,
          dateRanges: [
            {
              startDate: "30DaysAgo",
              endDate: "today",
            },
          ],
          metrics: [
            {
              expression: "ga:pageviews",
            },
          ],
          dimensions: [
            {
              name: "ga:pagePath",
            },
          ],
          orderBys: [
            {
              sortOrder: "DESCENDING",
              fieldName: "ga:pageviews",
            },
          ],
        },
      ],
    },
  });

  // Add analytics data to graphql
  const { rows } = result.data.reports[0].data;
  for (const { dimensions, metrics } of rows) {
    const path = dimensions[0];
    const totalCount = metrics[0].values[0];
    createNode({
      path,
      totalCount: Number(totalCount),
      id: path,
      internal: {
        type: `PageViews`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify({ path, totalCount }))
          .digest(`hex`),
        mediaType: `text/plain`,
        description: `Page views per path`,
      },
    });
  }
};



exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              featuredImage
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  console.log(posts)
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const image = post.frontmatter.featuredImage
      const views = post.frontmatter.views

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          image,
          views
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}