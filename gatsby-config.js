require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
;(module.exports = {
  siteMetadata: {
    title: `Custom Surgical`,
    author: {
      name: ` `,
      summary: ` `,
    },
    description: ` `,
    siteUrl: `https://customsurgical.co/blog/`,
    social: {
      twitter: ` `,
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
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /images/ // See below to configure properly
    //     }
    //   }
    // },  
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
  ],
}),
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
      pageSize: 10000,
    },
  },
  // { resolve: 'gatsby-plugin-mailchimp',
  //     options: {
  //         endpoint: 'https://customsurgical.us1.list-manage.com/subscribe/post?u=d92910af4ec0988bccf99fa6a&amp;id=fde7015bd7', // string; add your MC list endpoint here; see instructions below
  //         timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
  // }},

  {
    resolve: `gatsby-plugin-social9-socialshare`,
    options: {
      content: `xxxxxxxxxx`,
    },
  },
  {
    resolve: `gatsby-plugin-paginate`,
    options: {
      sources: [
        {
          path: `/page`,
          pageSize: 5,
          template: `${__dirname}/src/templates/page.js`,
          serialize: results => results.allMarkdownRemark.edges,
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
            }`,
        },
      ],
    },
  }
