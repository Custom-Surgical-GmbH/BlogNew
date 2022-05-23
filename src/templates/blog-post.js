import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import SubscriptionBanner from "../components/banner"

import ShareButtons from "../components/share"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { StaticImage } from "gatsby-plugin-image"
import logo from "/src/images/logo.png"

const BlogPost = props => {
  const title = `Read ${props.data.markdownRemark.frontmatter.title} `
  const tags = props.data.markdownRemark.frontmatter.tags
  const url = props.location.href
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { previous, next } = data
  const url = typeof window !== "undefined" ? window.location.href : ""

  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(6)

  console.log(data)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="flex_post">
            <div className="blog_left">
              <Link
                className="header-link-home"
                to="/"
                style={{ color: "black" }}
              >
                &#8592;Blog
              </Link>

              <h2 style={{ marginBottom: "15%" }} itemProp="headline">
                {post.frontmatter.title}
              </h2>
              <div>
                {post.frontmatter.tags.map((tag, i) => [
                  <div
                    key={i}
                    className={
                      tag === "News"
                        ? "tags-news"
                        : tag === "Medicine"
                        ? "tags-medicine"
                        : tag === "Technology"
                        ? "tags-technology"
                        : tag === "Education"
                        ? "tags-education"
                        : "tags-news"
                    }
                  >
                    {tag}
                    {i < post.frontmatter.tags.length - 1 ? ", " : ""}
                  </div>,
                ])}
              </div>

              <div style={{ marginTop: "5%" }}>{post.frontmatter.date}</div>
              <div
                style={{
                  marginTop: "5%",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {post.frontmatter.author}
              </div>

              <div className="sharing_icon">
                {" "}
                Share
                <ShareButtons
                  url={url}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                />
              </div>
            </div>
            <div className="photo_margin">
              <GatsbyImage
                image={getImage(post.frontmatter.image)}
                key=" "
                imgStyle={{
                  borderRadius: "5px",
                }}
                style={{
                  maxHeight: "550px",
                  borderRadius: "5px",
                  boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>
          </div>
        </header>
        <div className="article">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </article>
      <nav
        className="blog-post-nav"
        style={{
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "8%",
        }}
      >
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginBottom: "3%",
            marginRight: "3%",
            marginLeft: "3%",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          <li style={{
            width: "45%"
          }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="prev">
                &#10094; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li style={{
            width: "45%"
          }}>
            {next && (
              <Link to={next.fields.slug} rel="next" className="prev">
                {next.frontmatter.title} &#10095;
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <hr
        style={{
          marginTop: "3%",
          background: "#CCCCCC",
          width: "70%",
          marginBottom: "5%",
        }}
      ></hr>
      <div className="sharing_bottom">
        {" "}
        Share
        <ShareButtons
          url={url}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
      </div>

      

      <SubscriptionBanner
        path={post.frontmatter.title}
        tag={post.frontmatter.tags}
      />

      <div
        className="viewed"
        style={{
          marginTop: "5%",
          width: "80%",
        }}
      >
        <div>Recent Articles</div>
        <hr style={{ margin: 0 }}></hr>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
         
            
              {posts.slice(0, visible).map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <Grid item xs={10} md={4} sm={6} key={post.fields.slug} style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>
                 
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <Link to={post.fields.slug} itemProp="url">
                          {" "}
                          <GatsbyImage
                            image={getImage(post.frontmatter.image)}
                            key=""
                            imgStyle={{
                              borderRadius: "5px",
                            }}
                            style={{
                              borderRadius: "5px",
                              boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                              height: "210px",
                            }}
                          />
                        </Link>
                        <div className="text_flex_pages">
                          <div className="timer">
                            <StaticImage
                              layout="fixed"
                              formats={["auto", "webp", "avif"]}
                              src="../images/timer.png"
                              quality={100}
                              alt="Profile picture"
                            />
                            <div className="timeread">
                              &#160;{post.timeToRead} mins
                            </div>
                          </div>
                        </div>

                        <h2 className="h2_arc">
                          <Link
                            to={post.fields.slug}
                            itemProp="url"
                            className="link_arc"
                          >
                            {title}
                          </Link>
                        </h2>

                        <div></div>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                 </Grid>
                )
              })}
            
          
        </Grid>
      </Box>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button
            className="loadmore"
            style={{
              marginBottom: "7%",
            }}
          >
            Find more
          </button>
        </Link>
      </div>
      <footer>
        <div className="footer_li">
          <ul>
            <div className="ul">About us</div>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/press/"
                target="_blank"
              >
                Press
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/careers/"
                target="_blank"
              >
                Careers
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/referral-program/"
                target="_blank"
              >
                Referral Program
              </a>
            </li>
          </ul>
          <ul>
            <div className="ul">Support</div>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/faqs/"
                target="_blank"
              >
                FAQs
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/manuals/"
                target="_blank"
              >
                Manuals
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/contact/"
                target="_blank"
              >
                Contact us
              </a>
            </li>
          </ul>
          <ul>
            <div className="ul">Legal</div>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/terms-conditions/"
                target="_blank"
              >
                Terms
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/privacy-policy/"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/warranty/"
                target="_blank"
              >
                Warranty
              </a>
            </li>
            <li className="li">
              <a
                className="link_li"
                href="https://customsurgical.co/shipping/"
                target="_blank"
              >
                Shipping
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom_footer">
          <hr></hr>
          <div>Custom Surgical</div>
        </div>
      </footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        tags
        views
        author
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
      timeToRead
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          author
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        timeToRead
      }
    }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
