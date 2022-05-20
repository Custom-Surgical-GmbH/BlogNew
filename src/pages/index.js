import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Top from "../components/top"
import Bio from "../components/bio"
import Cat from "../components/category"
import Banner from "../components/banner"
import {Box, Grid, Alert} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import logo from "/src/images/logo.png"






const BlogIndex = ({ data, location }) => {
  console.log(data)

  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(6)
  
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3)
  }


  



  
  
  console.log(data)
  let header
  header = <img style={{ width: "50px" }} src={logo} alt="Logo" />
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="MedTech Blog" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="header_logo">
        <Link className="header-link-home" to="/">
          <header className="global-header">{header}</header>{" "}
        </Link>
      </div>
      <Seo title="MedTech Blog" />
      <Bio />
      <div className="viewed"><div>Most viewed</div>
      <hr className="line"></hr></div>
      <Top />
      <Cat />
      <div className="viewed"><div>Recent Articles</div>
      <hr style={{margin: 0}}></hr></div>
     

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item>
            <ol style={{ listStyle: `none` }} className="news_block">
              {posts.slice(0, visible).map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li key={post.fields.slug} className="list">
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                      <Link to={post.fields.slug} itemProp="url" > <GatsbyImage
                          image={getImage(post.frontmatter.image)}
                          key=""
                          imgStyle={{
                            borderRadius: "5px",
                          }}
                          style={{
                            borderRadius: "5px",
                            boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                            height: "270px"
                          }}
                        /></Link>
                        <div className="photo_text_flex">
           
                        <div
                            className="tags_photo"
                            style={{ color: "black" }}
                          >
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
                                {i < post.frontmatter.tags.length - 1
                                  ? ", "
                                  : ""}
                              </div>,
                            ])}
                          </div>{" "}
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
                          <Link to={post.fields.slug} itemProp="url" className="link_arc">
                            {title}
                          </Link>
                        </h2>

                        <div>
                          
                        </div>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
          </Grid>
        </Grid>
      </Box>
      <div style={{textAlign: "center"}}>
      <button onClick={showMoreItems} className = "loadmore">
        Load more
      </button></div>
      <Banner/>
        <footer>
        <div className="footer_li">
        <ul><div className="ul">About us</div>
          <li className="li"><a className="link_li" href="https://customsurgical.co/press/" target="_blank">Press</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/careers/" target="_blank">Careers</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/referral-program/" target="_blank">Referral Program</a></li>
        </ul>
        <ul><div className="ul">Support</div>
          <li className="li"><a className="link_li" href="https://customsurgical.co/faqs/" target="_blank">FAQs</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/manuals/" target="_blank">Manuals</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/contact/" target="_blank">Contact us</a></li>
        </ul>
        <ul><div className="ul">Legal</div>
          <li className="li"><a className="link_li" href="https://customsurgical.co/terms-conditions/" target="_blank">Terms</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/privacy-policy/" target="_blank">Privacy Policy</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/warranty/" target="_blank">Warranty</a></li>
          <li className="li"><a className="link_li" href="https://customsurgical.co/shipping/" target="_blank">Shipping</a></li>
        </ul></div>
        <div className="bottom_footer"><hr></hr>
        <div>Custom Surgical</div></div>
      </footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          views
          tags
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
