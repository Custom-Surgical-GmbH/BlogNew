import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Cat from "../components/category"
import Bio from "../components/bio"
import Top from "../components/top"
/*import Blocks from "../components/blocks"*/
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const BlogIndex =  ({data,  location }) => {
 

const [items, setItems] = useState([]);
const [visible, setVisible] = useState(3);
const showMoreItems = () => {
    setVisible((prevValue) =>prevValue + 3);
}






  console.log(data)
  
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
       
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
      <Seo title="All posts" />
      <Bio />
      <Cat /><hr className="line"></hr>
      <Top />
      
  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{xs: 2, md: 3}} >
        <Grid item  >
       <ol style={{ listStyle: `none` }} className="news_block">
        {posts.slice(0, visible).map(post => {
          const title = post.frontmatter.title || post.fields.slug 
          const featuredImgFluid = post.frontmatter.featuredImage

          return (
          <li key={post.fields.slug} className="list">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                <GatsbyImage
          image={getImage(post.frontmatter.image)}
          key=""
          imgStyle={{
            borderRadius: '5px',
          }}
          style={{
            borderRadius: '5px',
            boxShadow: ' 1px 1px 1px 2px rgba(0, 0, 0, 0.05)',
          }}
        />
        
        <small>{post.frontmatter.date}</small>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  
                  <div>  
          
     <div >
    {post.frontmatter.tags.map((tag, i) => [
  <strong key={i}>
    {tag}
    {i < post.frontmatter.tags.length - 1 ? ', ' : ''}
  </strong>
])}</div></div>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
        </Grid></Grid></Box>
      <button onClick={showMoreItems}>Load more</button>
      
    
        
  
 

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
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage

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

