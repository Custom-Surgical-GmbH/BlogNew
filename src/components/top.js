import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "@mui/material/Button"
import Timer from "/src/images/timer.svg"
import Grid from "@mui/material/Grid"
import Icon from "@mui/material/Icon"
import Item from "../components/category"
import logo from "/src/images/logo.png"

const Top = ({ data1 }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      allMarkdownRemark(sort: { fields: [frontmatter___views], order: DESC }) {
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
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            tags
          }
        }
      }
    }
  `)

  console.log(data)
  // Set these values by editing "siteMetadata" in gatsby-config.js
  /* const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social*/

  return (
    <div className="top">
      <div className="flex_blocks">
        <div>
          <GatsbyImage
            image={getImage(data.allMarkdownRemark.nodes[0].frontmatter.image)}
            key=""
            imgStyle={{
              borderRadius: "5px",
            }}
            style={{
              borderRadius: "5px",
              boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          />

          <div className="photo_text_flex">
            <div className="timer">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/timer.png"
                quality={100}
                alt="Profile picture"
              />
              <div>&#160;{data.allMarkdownRemark.nodes[0].timeToRead} mins</div>
            </div>
            <div className="tags_photo" style={{ color: "black" }}>
              {data.allMarkdownRemark.nodes[0].frontmatter.tags.map(
                (tag, i) => [
                  <strong key={i}>
                    {tag}
                    {i <
                    data.allMarkdownRemark.nodes[0].frontmatter.tags.length - 1
                      ? ", "
                      : ""}
                  </strong>,
                ]
              )}
            </div>{" "}
          </div>
          <div className="text_flex">
            <div className="article_h2">
              {" "}
              <Link
                to={data.allMarkdownRemark.nodes[0].fields.slug}
                itemProp="url"
              >
                <h2 className="h2_without">
                  {data.allMarkdownRemark.nodes[0].frontmatter.title}
                </h2>
              </Link>
            </div>

            <p>{data.allMarkdownRemark.nodes[0].frontmatter.description}</p>
          </div>
        </div>
      </div>

      <div className="flex_blocks">
        <div>
          <GatsbyImage
            image={getImage(data.allMarkdownRemark.nodes[1].frontmatter.image)}
            key=""
            imgStyle={{
              borderRadius: "5px",
            }}
            style={{
              borderRadius: "5px",
              boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          />
          <div className="photo_text_flex">
            <div className="timer">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/timer.png"
                quality={100}
                alt="Profile picture"
              />
              <div>&#160;{data.allMarkdownRemark.nodes[1].timeToRead} mins</div>
            </div>
            <div className="tags_photo" style={{ color: "black" }}>
              {data.allMarkdownRemark.nodes[1].frontmatter.tags.map(
                (tag, i) => [
                  <strong key={i}>
                    {tag}
                    {i <
                    data.allMarkdownRemark.nodes[1].frontmatter.tags.length - 1
                      ? ", "
                      : ""}
                  </strong>,
                ]
              )}
            </div>{" "}
          </div>
          <div className="text_flex">
            <div className="article_h2">
              {" "}
              <Link
                to={data.allMarkdownRemark.nodes[1].fields.slug}
                itemProp="url"
              >
                <h2 className="h2_without">
                  {data.allMarkdownRemark.nodes[1].frontmatter.title}
                </h2>
              </Link>
            </div>

            <p>{data.allMarkdownRemark.nodes[1].frontmatter.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
