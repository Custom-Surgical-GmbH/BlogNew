/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from "@mui/material/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Bio = post => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        nodes {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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
  `)


  console.log(data)
  // Set these values by editing "siteMetadata" in gatsby-config.js
  /* const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social*/

  return (
    <div className="bio">
       <Link
                to={data.allMarkdownRemark.nodes[0].fields.slug}
                itemProp="url"
                style={{width: "100%"}}
              ><GatsbyImage
        image={getImage(data.allMarkdownRemark.nodes[0].frontmatter.image)}
        key=""
        imgStyle={{
          borderRadius: "5px",
        }}
        style={{
          borderRadius: "5px",
          boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
          width: "100%"
        }}
      /></Link>

      <div className="bio_text_flex"> 
        {" "}
        <div>
          {data.allMarkdownRemark.nodes[0].frontmatter.tags.map((tag, i) => [
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
              {i < data.allMarkdownRemark.nodes[0].frontmatter.tags.length - 1
                ? ", "
                : ""}
            </div>,
          ])}
        </div>
        <div className="article_h2">
        <Link
                to={data.allMarkdownRemark.nodes[0].fields.slug}
                itemProp="url"
              ><h2 style={{ color: "white" }}>
            {" "}
            {data.allMarkdownRemark.nodes[0].frontmatter.title}
          </h2></Link>
        </div>
        <p style={{ color: "white" }}>
          {data.allMarkdownRemark.nodes[0].frontmatter.description}
        </p>
        <Button variant="contained" style={{ background: "#FFA100" }} className = "read">
          <Link
            to={data.allMarkdownRemark.nodes[0].fields.slug}
            style={{ color: "white" }}
            itemProp="url"
          >
            Read Article &#10140;
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Bio
