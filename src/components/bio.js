/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Item from "../components/category"

import logo from '/src/images/logo.png'

const Bio = (post) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            featuredImage
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
       

      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/us.jpg"
        quality={100}
        alt="Profile picture"
      />
       
     <div className="text_flex"> <div style={{color: "white"}}>
    {data.allMarkdownRemark.nodes[0].frontmatter.tags.map((tag, i) => [
  <strong key={i}>
    {tag}
    {i < data.allMarkdownRemark.nodes[0].frontmatter.tags.length - 1 ? ', ' : ''}
  </strong>
])}</div>
     <div className="article_h2"><h2 style={{color: "white"}}> {data.allMarkdownRemark.nodes[0].frontmatter.title} Lorem Ipsum</h2></div>
     
        <p style={{color: "white"}}>{data.allMarkdownRemark.nodes[0].frontmatter.description}
        </p>
       
       <button className="article_button"><Link to={data.allMarkdownRemark.nodes[0].fields.slug} itemProp="url">READ</Link></button>
    </div></div>
  )

}

export default Bio


