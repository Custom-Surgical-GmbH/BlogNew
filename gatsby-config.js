module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {


      

      resolve: `gatsby-plugin-addsocialshare-share`,
      options: {
        size: 48,
        //providers:{"facebook":"Facebook","linkedin":"Linkedin","pinterest":"Pinterest","twitter":"Twitter","cloudshare":"Cloud Share"},
        //corners:"5%",
        //bgcolor:"#000000",
        interfacetype: "floating", //inline,floating
        topoffset: "20%", //work only floating interface
        id: ".ass_interface",
        alignment_desktop: "left", //left,right,hide
        alignment_mobile: "bottom", //top,bottom,hide
      },



      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
},
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    // You can add multiple tracking ids and a pageview event will be fired for all of them.
    trackingIds: [
      "GA-TRACKING_ID", // Google Analytics / GA
      "AW-CONVERSION_ID", // Google Ads / Adwords / AW
      "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    ],
    // This object gets passed directly to the gtag config command
    // This config will be shared across all trackingIds
    gtagConfig: {
      optimize_id: "OPT_CONTAINER_ID",
      anonymize_ip: true,
      cookie_expires: 0,
    },
    // This object is used for configuration specific to this plugin
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Defaults to https://www.googletagmanager.com
      origin: "YOUR_SELF_HOSTED_ORIGIN",
    },
  },
},

  {
    resolve: `gatsby-plugin-google-analytics-reporter`,
    options: {
      email: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
      viewId: process.env.VIEWID,
      startDate: `30daysAgo`,
      endDate: `today`,
      pageSize: 10000
    }
  },
    {
      resolve: `gatsby-plugin-paginate`,
      options: {
        sources: [
          {
            path: `/page`,
            pageSize: 5,
            template: `${__dirname}/src/templates/page.js`,
            serialize: (results) => results.allMarkdownRemark.edges,
            query: `{
              allMarkdownRemark {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    timeToRead
                    frontmatter {
                      date
                      path
                      tags
                      title
                    }
                  }
                }
              }
            }`
          }
        ]
      }
    }
    


