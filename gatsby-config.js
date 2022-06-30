require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
pathPrefix: `/blog`,
assetPrefix: `https://blog.customsurgical.co/blog`,
  siteMetadata: { 
    
    title: `Custom Surgical`,
    author: {
      name: ` `,
      summary: ` `,
    },
    description: ` Latest company updates, documentations, MedTech news and trends, and much more. Check out our blog and subscribe to our email in order to be ...    `,
    siteUrl: `https://blog.customsurgical.co/blog`,
    social: {
      twitter: ` `,
    },
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /images/ // See below to configure properly
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-breadcrumb`,
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
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320,
            },
          }, {
           resolve: `gatsby-remark-responsive-iframe`,
            
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
       
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`, // Changed google-analytics.js from this plugin on line on line 39 - added this: 'send_page_view': false - to fix page_view repeating
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
          cookieName: "gatsby-gdpr-cookies",
          anonymize: true, // https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies#anonymize
          allowAdFeatures: false,
        },
        facebookPixel: {
          pixelId: process.env.FACEBOOK_PIXEL_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-cookies", // default
        },
        hotjar: {
          hjid: process.env.HOTJAR_ID,
          hjsv: "6",
          cookieName: "gatsby-gdpr-cookies", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://customsurgical.us1.list-manage.com/subscribe/post?u=d92910af4ec0988bccf99fa6a&amp;id=fde7015bd7", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
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
                  description: node.frontmatter.description,
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
        name: `Custom Surgical`,
        short_name: `Custom Surgical`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-social9-socialshare`,
      options: {
        content: `xxxxxxxxxx`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-paginate`,
    //   options: {
    //     sources: [
    //       {
    //         path: `/page`,
    //         pageSize: 5,
    //         template: `${__dirname}/src/templates/page.js`,
    //         serialize: results => results.allMarkdownRemark.edges,
    //         query: `{
    //             allMarkdownRemark {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   html
    //                   id
    //                   timeToRead
    //                   frontmatter {
    //                     date
    //                     path
    //                     tags
    //                     title
    //                   }
    //                 }
    //               }
    //             }
    //           }`,
    //       },
    //     ],
    //   },
    // },



   
  ],
}
