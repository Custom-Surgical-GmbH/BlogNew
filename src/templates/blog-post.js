import * as React from "react"
import { Link, graphql, Share, ShareItem, ShareLabel, ShareLink, ShareSocial, LinkLabel, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"



const BlogPost = props => {

  const title = `Read ${props.data.markdownRemark.frontmatter.title} `;
  const tags = props.data.markdownRemark.frontmatter.tags;
  const url = props.location.href;

  }

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const url = typeof window !== 'undefined' ? window.location.href : '';

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
          <div className="flex_post"><div>
          <div className="blog_header"><Link className="header-link-home" to="/">
          &#8592;Blog
      </Link>
    <div>
    {post.frontmatter.tags.map((tag, i) => [
  <strong key={i}>
    {tag}
    {i < post.frontmatter.tags.length - 1 ? ', ' : ''}
  </strong>
])}</div></div>
     <h1 itemProp="headline">{post.frontmatter.title}</h1>
    
   <div className="sharing_icon">  <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" class="share-btn twitter"> 
    Twitter
</a>

<a href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>" class="share-btn linkedin">
    LinkedIn
</a>
<a href="https://www.facebook.com/sharer/sharer.php?u=<URL>" class="share-btn facebook">
    Facebook
</a></div></div>
<div className="photo_margin">
<GatsbyImage
          image={getImage(data.file)}
          key=" "
          imgStyle={{
            borderRadius: '5px',
          }}
          style={{
            borderRadius: '5px',
            boxShadow: ' 1px 1px 1px 2px rgba(0, 0, 0, 0.05)',
          }}
        />
</div></div>
        </header>
        <div className="article"><section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
         
        /></div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate



export const pageQuery = graphql`
 
  
     
    
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $image: String
    $views: String

  ) { 
    
    site {
      siteMetadata {
        title
      }
    }
   
    file(
      sourceInstanceName: { eq: "images" }
      name: { eq: $image }
    ) {
      childImageSharp {
        gatsbyImageData
      }
      name
    }
    views: markdownRemark(id: {eq: $views}) {
      frontmatter {
        views
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
      
        title
        date(formatString: "MM/DD/YYYY")
        description
        tags
        featuredImage 
      }
      html
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

  