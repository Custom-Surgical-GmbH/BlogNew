import React, { useState } from "react"
import {
  Link,
  graphql,
} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import sub from "/src/images/sub.png"



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
              
                <Link className="header-link-home" to="/" style={{color: "black"}}>
                  &#8592;Blog
                </Link>
                
              <h2 style={{marginBottom: "15%"}} itemProp="headline" >{post.frontmatter.title}</h2>
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
                      {i < post.frontmatter.tags.length - 1 ? ", " : ""}</div>,
                  ])}
              </div>

              <div style={{marginTop: "5%"}}>{post.frontmatter.date}</div>

              <div className="sharing_icon">
                {" "}
                Share
                <a
                  href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>"
                  
                  className="sharing" target="_blank">
                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2787 0 30 6.72129 30 15C30 23.2787 23.2787 30 15 30C6.72129 30 0 23.2787 0 15C0 6.72129 6.72129 0 15 0ZM12.3579 22.978C18.9956 22.978 22.625 17.4778 22.625 12.711C22.625 12.5539 22.625 12.3967 22.6175 12.247C23.3209 11.7382 23.9346 11.1021 24.4209 10.3763C23.7774 10.6606 23.0814 10.8552 22.3481 10.945C23.0964 10.496 23.6651 9.79254 23.9346 8.94697C23.2386 9.35854 22.4678 9.65783 21.6446 9.82248C20.9861 9.11906 20.0507 8.68506 19.0106 8.68506C17.02 8.68506 15.4037 10.3014 15.4037 12.292C15.4037 12.5763 15.4336 12.8532 15.5009 13.1151C12.5002 12.9654 9.84357 11.5287 8.06262 9.34354C7.75576 9.87486 7.57617 10.496 7.57617 11.1545C7.57617 12.4042 8.21227 13.5117 9.1851 14.1553C8.59389 14.1403 8.04012 13.9757 7.55373 13.7063V13.7512C7.55373 15.5023 8.79592 16.954 10.4497 17.2908C10.1504 17.373 9.82863 17.418 9.49939 17.418C9.26736 17.418 9.04289 17.3955 8.81842 17.3506C9.27486 18.7874 10.6069 19.8276 12.1859 19.8575C10.9511 20.8229 9.39463 21.3991 7.70338 21.3991C7.41152 21.3991 7.12717 21.3841 6.84281 21.3467C8.4218 22.3794 10.3225 22.978 12.3579 22.978Z" fill="black"/>
</svg>

                </a>
                <a
                  href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>"
                  
                  className="sharing" target="_blank">
                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2787 0 30 6.72129 30 15C30 23.2787 23.2787 30 15 30C6.72129 30 0 23.2787 0 15C0 6.72129 6.72129 0 15 0ZM10.3103 23.4299V11.7158H6.41596V23.4299H10.3103ZM24.3506 23.4299V16.7124C24.3506 13.1142 22.4295 11.4404 19.8676 11.4404C17.8019 11.4404 16.8766 12.5764 16.3585 13.3744V11.7158H12.4651C12.5167 12.8149 12.4651 23.4299 12.4651 23.4299H16.3584V16.8879C16.3584 16.5378 16.3836 16.1878 16.4868 15.9375C16.7678 15.2382 17.4089 14.5137 18.4846 14.5137C19.8928 14.5137 20.457 15.5883 20.457 17.1624V23.4299H24.3506ZM8.38945 6.06738C7.05703 6.06738 6.1865 6.94336 6.1865 8.0915C6.1865 9.21545 7.03055 10.1156 8.33789 10.1156H8.36303C9.72094 10.1156 10.5662 9.21545 10.5662 8.0915C10.541 6.94336 9.721 6.06738 8.38945 6.06738Z" fill="black"/>
</svg>

                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=<URL>"
                  
                  className="sharing" target="_blank">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9427 29.9999L14.9561 29.9999H14.9515L14.9427 29.9999ZM15.0485 29.9999H15.0439L15.0573 29.9999L15.0485 29.9999ZM14.8969 29.9996L14.9113 29.9997H14.903L14.8969 29.9996ZM15.097 29.9997H15.0887L15.1031 29.9996L15.097 29.9997ZM14.8527 29.9993L14.8624 29.9994L14.8546 29.9993H14.8527ZM15.1454 29.9993L15.1376 29.9994L15.1473 29.9993H15.1454ZM15.1938 29.9988L15.1904 29.9988L15.2034 29.9987L15.1938 29.9988ZM14.7966 29.9987L14.8096 29.9988L14.8062 29.9988L14.7966 29.9987ZM15.2421 29.9981L15.2342 29.9982L15.2503 29.9979L15.2421 29.9981ZM14.7497 29.9979L14.7658 29.9982L14.7579 29.9981L14.7497 29.9979ZM15.2904 29.9972L15.2797 29.9974L15.2946 29.9971L15.2904 29.9972ZM14.7054 29.9971L14.7203 29.9974L14.7096 29.9972L14.7054 29.9971ZM14.6505 29.996L14.6637 29.9963L14.6613 29.9963L14.6505 29.996ZM15.3387 29.9963L15.3363 29.9963L15.3495 29.996L15.3387 29.9963ZM14.6023 29.9948L14.6204 29.9953L14.6131 29.9951L14.6023 29.9948ZM15.3869 29.9951L15.3796 29.9953L15.3977 29.9948L15.3869 29.9951ZM15.4351 29.9938L15.4233 29.9941L15.4419 29.9936L15.4351 29.9938ZM14.5581 29.9936L14.5767 29.9941L14.5649 29.9938L14.5581 29.9936ZM14.516 29.9923L14.5291 29.9927L14.5167 29.9923L14.5054 29.992L14.516 29.9923ZM15.4833 29.9923L15.4709 29.9927L15.484 29.9923L15.4946 29.992L15.4833 29.9923ZM15.5314 29.9907L15.5248 29.991L15.545 29.9903L15.5314 29.9907ZM14.455 29.9903L14.4752 29.991L14.4686 29.9907L14.455 29.9903ZM14.4111 29.9886L14.4323 29.9894L14.4205 29.989L14.4111 29.9886ZM15.5795 29.989L15.5677 29.9894L15.5889 29.9886L15.5795 29.989ZM14.368 29.9869L14.3888 29.9878L14.3725 29.9871L14.368 29.9869ZM15.6275 29.9871L15.6112 29.9878L15.632 29.9869L15.6275 29.9871ZM14.3077 29.9842L14.3299 29.9852L14.3245 29.9851L14.3077 29.9842ZM15.6755 29.9851L15.6701 29.9852L15.6923 29.9842L15.6755 29.9851ZM14.2644 29.9822L14.2874 29.9833L14.2765 29.9828L14.2644 29.9822ZM15.7235 29.9828L15.7126 29.9833L15.7356 29.9822L15.7235 29.9828ZM14.2217 29.9801L14.245 29.9812L14.2286 29.9805L14.2217 29.9801ZM15.7714 29.9805L15.755 29.9812L15.7783 29.9801L15.7714 29.9805ZM15.8193 29.978L15.7981 29.9791L15.8169 29.9781L15.8391 29.9769L15.8193 29.978ZM14.1831 29.9781L14.2019 29.9791L14.1807 29.978L14.1609 29.9769L14.1831 29.9781ZM15.8671 29.9753L15.8578 29.9758L15.8815 29.9745L15.8671 29.9753ZM14.1185 29.9745L14.1422 29.9758L14.1329 29.9753L14.1185 29.9745ZM14.0762 29.9719L14.0999 29.9733L14.0851 29.9725L14.0762 29.9719ZM15.9149 29.9725L15.9001 29.9733L15.9238 29.9719L15.9149 29.9725ZM14.0358 29.9694L14.0572 29.9708L14.0372 29.9695L14.0172 29.9682L14.0358 29.9694ZM15.9628 29.9695L15.9428 29.9708L15.9642 29.9694L15.9828 29.9682L15.9628 29.9695ZM16.0104 29.9664L16.0033 29.9669L16.026 29.9654L16.0104 29.9664ZM13.974 29.9654L13.9967 29.9669L13.9896 29.9664L13.974 29.9654ZM13.9318 29.9624L13.954 29.964L13.9419 29.9632L13.9318 29.9624ZM16.0581 29.9632L16.046 29.964L16.0682 29.9624L16.0581 29.9632ZM13.8896 29.9595L13.9101 29.9609L13.8942 29.9598L13.8896 29.9595ZM16.1058 29.9598L16.0899 29.9609L16.1104 29.9595L16.1058 29.9598ZM13.833 29.9552L13.8509 29.9565L13.8466 29.9562L13.833 29.9552ZM16.1534 29.9562L16.1491 29.9565L16.167 29.9552L16.1534 29.9562ZM16.2009 29.9525L16.1924 29.9532L16.2106 29.9517L16.2009 29.9525ZM13.7894 29.9517L13.8076 29.9532L13.7991 29.9525L13.7894 29.9517ZM13.7469 29.9483L13.7624 29.9496L13.7515 29.9487L13.7469 29.9483ZM16.2485 29.9487L16.2376 29.9496L16.2531 29.9483L16.2485 29.9487ZM13.7002 29.9443L13.7048 29.9447L13.704 29.9447L13.7002 29.9443ZM16.296 29.9447L16.2952 29.9447L16.2998 29.9443L16.296 29.9447ZM16.3434 29.9405L16.3392 29.9409L16.3498 29.9399L16.3434 29.9405ZM13.6502 29.9399L13.6608 29.9409L13.6566 29.9405L13.6502 29.9399ZM13.6062 29.936L13.6141 29.9367L13.6092 29.9362L13.6062 29.936ZM16.3908 29.9362L16.3859 29.9367L16.3938 29.936L16.3908 29.9362ZM12.6562 29.8176C5.48912 28.6911 0 22.4815 0 15C0 6.72129 6.72129 0 15 0C23.2787 0 30 6.72129 30 15C30 22.4815 24.5109 28.6911 17.3438 29.8176V19.3359H20.8389L21.5039 15H17.3438V12.1863C17.3438 11 17.9249 9.84375 19.7882 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.322 5.85938C14.8956 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8176Z" fill="black"/>
</svg>

                </a>
                <a  className="sharing" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2787 0 30 6.72129 30 15C30 23.2787 23.2787 30 15 30C6.72129 30 0 23.2787 0 15C0 6.72129 6.72129 0 15 0ZM15 5.625C12.4539 5.625 12.1346 5.63578 11.1347 5.68143C10.1368 5.72695 9.45533 5.88545 8.85896 6.11719C8.2425 6.35678 7.71967 6.67734 7.19848 7.19854C6.67728 7.71973 6.35672 8.24256 6.11713 8.85902C5.88539 9.45533 5.72695 10.1368 5.68137 11.1347C5.63578 12.1346 5.625 12.4539 5.625 15C5.625 17.5461 5.63578 17.8654 5.68137 18.8653C5.72695 19.8632 5.88539 20.5447 6.11713 21.141C6.35672 21.7574 6.67728 22.2803 7.19848 22.8015C7.71967 23.3227 8.2425 23.6433 8.85896 23.8829C9.45533 24.1146 10.1368 24.273 11.1347 24.3186C12.1346 24.3642 12.4539 24.375 15 24.375C17.5461 24.375 17.8654 24.3642 18.8653 24.3186C19.8632 24.273 20.5447 24.1146 21.141 23.8829C21.7574 23.6433 22.2803 23.3227 22.8015 22.8015C23.3227 22.2803 23.6433 21.7574 23.8829 21.141C24.1146 20.5447 24.273 19.8632 24.3186 18.8653C24.3642 17.8654 24.375 17.5461 24.375 15C24.375 12.4539 24.3642 12.1346 24.3186 11.1347C24.273 10.1368 24.1146 9.45533 23.8829 8.85902C23.6433 8.24256 23.3227 7.71973 22.8015 7.19854C22.2803 6.67734 21.7574 6.35678 21.141 6.11719C20.5447 5.88545 19.8632 5.72695 18.8653 5.68143C17.8654 5.63578 17.5461 5.625 15 5.625ZM15 7.3142C17.5032 7.3142 17.7997 7.32375 18.7883 7.36887C19.7024 7.41059 20.1987 7.56328 20.5291 7.69166C20.9667 7.8617 21.279 8.0649 21.607 8.39297C21.9352 8.72098 22.1383 9.03334 22.3083 9.47092C22.4367 9.80127 22.5895 10.2976 22.6311 11.2117C22.6763 12.2003 22.6858 12.4968 22.6858 15C22.6858 17.5032 22.6763 17.7997 22.6311 18.7883C22.5895 19.7024 22.4367 20.1987 22.3083 20.5291C22.1383 20.9667 21.9352 21.279 21.607 21.607C21.279 21.9352 20.9667 22.1383 20.5291 22.3083C20.1987 22.4367 19.7024 22.5895 18.7883 22.6311C17.7999 22.6763 17.5034 22.6858 15 22.6858C12.4966 22.6858 12.2002 22.6763 11.2117 22.6311C10.2976 22.5895 9.80127 22.4367 9.47092 22.3083C9.03328 22.1383 8.72098 21.9352 8.39291 21.607C8.06484 21.279 7.8617 20.9667 7.69166 20.5291C7.56328 20.1987 7.41053 19.7024 7.36881 18.7883C7.32369 17.7997 7.3142 17.5032 7.3142 15C7.3142 12.4968 7.32369 12.2003 7.36881 11.2117C7.41053 10.2976 7.56328 9.80127 7.69166 9.47092C7.8617 9.03334 8.06484 8.72098 8.39291 8.39297C8.72098 8.0649 9.03328 7.8617 9.47092 7.69166C9.80127 7.56328 10.2976 7.41059 11.2117 7.36887C12.2003 7.32375 12.4968 7.3142 15 7.3142ZM15 10.1858C12.3412 10.1858 10.1858 12.3412 10.1858 15C10.1858 17.6588 12.3412 19.8142 15 19.8142C17.6588 19.8142 19.8142 17.6588 19.8142 15C19.8142 12.3412 17.6588 10.1858 15 10.1858ZM15 18.125C13.2741 18.125 11.875 16.7259 11.875 15C11.875 13.2741 13.2741 11.875 15 11.875C16.7259 11.875 18.125 13.2741 18.125 15C18.125 16.7259 16.7259 18.125 15 18.125ZM21.1294 9.99562C21.1294 10.617 20.6257 11.1206 20.0044 11.1206C19.3831 11.1206 18.8794 10.617 18.8794 9.99562C18.8794 9.3743 19.3831 8.87062 20.0044 8.87062C20.6257 8.87062 21.1294 9.3743 21.1294 9.99562Z" fill="black"/>
</svg>
</a>
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
      <nav className="blog-post-nav" style={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "8%"
      }}>
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
            fontSize: "20px"
          }}
        >
          <li >
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="prev">
               &#10094;   {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li >
            {next && (
              <Link to={next.fields.slug} rel="next" className="prev">
                {next.frontmatter.title}   &#10095;
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <hr style={{
         marginTop: "3%",
        background: "#CCCCCC",
        width: "70%",
        marginBottom: "5%"}}></hr>
        <div className="sharing_icon_bottom">
                {" "}
                Share
                <a
                  href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>"
                  
                className="sharing" target="_blank">
                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2787 0 30 6.72129 30 15C30 23.2787 23.2787 30 15 30C6.72129 30 0 23.2787 0 15C0 6.72129 6.72129 0 15 0ZM12.3579 22.978C18.9956 22.978 22.625 17.4778 22.625 12.711C22.625 12.5539 22.625 12.3967 22.6175 12.247C23.3209 11.7382 23.9346 11.1021 24.4209 10.3763C23.7774 10.6606 23.0814 10.8552 22.3481 10.945C23.0964 10.496 23.6651 9.79254 23.9346 8.94697C23.2386 9.35854 22.4678 9.65783 21.6446 9.82248C20.9861 9.11906 20.0507 8.68506 19.0106 8.68506C17.02 8.68506 15.4037 10.3014 15.4037 12.292C15.4037 12.5763 15.4336 12.8532 15.5009 13.1151C12.5002 12.9654 9.84357 11.5287 8.06262 9.34354C7.75576 9.87486 7.57617 10.496 7.57617 11.1545C7.57617 12.4042 8.21227 13.5117 9.1851 14.1553C8.59389 14.1403 8.04012 13.9757 7.55373 13.7063V13.7512C7.55373 15.5023 8.79592 16.954 10.4497 17.2908C10.1504 17.373 9.82863 17.418 9.49939 17.418C9.26736 17.418 9.04289 17.3955 8.81842 17.3506C9.27486 18.7874 10.6069 19.8276 12.1859 19.8575C10.9511 20.8229 9.39463 21.3991 7.70338 21.3991C7.41152 21.3991 7.12717 21.3841 6.84281 21.3467C8.4218 22.3794 10.3225 22.978 12.3579 22.978Z" fill="black"/>
</svg>

                </a>
                <a
                  href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>"
                  
                  className="sharing" target="_blank">
                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2787 0 30 6.72129 30 15C30 23.2787 23.2787 30 15 30C6.72129 30 0 23.2787 0 15C0 6.72129 6.72129 0 15 0ZM10.3103 23.4299V11.7158H6.41596V23.4299H10.3103ZM24.3506 23.4299V16.7124C24.3506 13.1142 22.4295 11.4404 19.8676 11.4404C17.8019 11.4404 16.8766 12.5764 16.3585 13.3744V11.7158H12.4651C12.5167 12.8149 12.4651 23.4299 12.4651 23.4299H16.3584V16.8879C16.3584 16.5378 16.3836 16.1878 16.4868 15.9375C16.7678 15.2382 17.4089 14.5137 18.4846 14.5137C19.8928 14.5137 20.457 15.5883 20.457 17.1624V23.4299H24.3506ZM8.38945 6.06738C7.05703 6.06738 6.1865 6.94336 6.1865 8.0915C6.1865 9.21545 7.03055 10.1156 8.33789 10.1156H8.36303C9.72094 10.1156 10.5662 9.21545 10.5662 8.0915C10.541 6.94336 9.721 6.06738 8.38945 6.06738Z" fill="black"/>
</svg>

                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=<URL>"
                  
                  className="sharing" target="_blank">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9427 29.9999L14.9561 29.9999H14.9515L14.9427 29.9999ZM15.0485 29.9999H15.0439L15.0573 29.9999L15.0485 29.9999ZM14.8969 29.9996L14.9113 29.9997H14.903L14.8969 29.9996ZM15.097 29.9997H15.0887L15.1031 29.9996L15.097 29.9997ZM14.8527 29.9993L14.8624 29.9994L14.8546 29.9993H14.8527ZM15.1454 29.9993L15.1376 29.9994L15.1473 29.9993H15.1454ZM15.1938 29.9988L15.1904 29.9988L15.2034 29.9987L15.1938 29.9988ZM14.7966 29.9987L14.8096 29.9988L14.8062 29.9988L14.7966 29.9987ZM15.2421 29.9981L15.2342 29.9982L15.2503 29.9979L15.2421 29.9981ZM14.7497 29.9979L14.7658 29.9982L14.7579 29.9981L14.7497 29.9979ZM15.2904 29.9972L15.2797 29.9974L15.2946 29.9971L15.2904 29.9972ZM14.7054 29.9971L14.7203 29.9974L14.7096 29.9972L14.7054 29.9971ZM14.6505 29.996L14.6637 29.9963L14.6613 29.9963L14.6505 29.996ZM15.3387 29.9963L15.3363 29.9963L15.3495 29.996L15.3387 29.9963ZM14.6023 29.9948L14.6204 29.9953L14.6131 29.9951L14.6023 29.9948ZM15.3869 29.9951L15.3796 29.9953L15.3977 29.9948L15.3869 29.9951ZM15.4351 29.9938L15.4233 29.9941L15.4419 29.9936L15.4351 29.9938ZM14.5581 29.9936L14.5767 29.9941L14.5649 29.9938L14.5581 29.9936ZM14.516 29.9923L14.5291 29.9927L14.5167 29.9923L14.5054 29.992L14.516 29.9923ZM15.4833 29.9923L15.4709 29.9927L15.484 29.9923L15.4946 29.992L15.4833 29.9923ZM15.5314 29.9907L15.5248 29.991L15.545 29.9903L15.5314 29.9907ZM14.455 29.9903L14.4752 29.991L14.4686 29.9907L14.455 29.9903ZM14.4111 29.9886L14.4323 29.9894L14.4205 29.989L14.4111 29.9886ZM15.5795 29.989L15.5677 29.9894L15.5889 29.9886L15.5795 29.989ZM14.368 29.9869L14.3888 29.9878L14.3725 29.9871L14.368 29.9869ZM15.6275 29.9871L15.6112 29.9878L15.632 29.9869L15.6275 29.9871ZM14.3077 29.9842L14.3299 29.9852L14.3245 29.9851L14.3077 29.9842ZM15.6755 29.9851L15.6701 29.9852L15.6923 29.9842L15.6755 29.9851ZM14.2644 29.9822L14.2874 29.9833L14.2765 29.9828L14.2644 29.9822ZM15.7235 29.9828L15.7126 29.9833L15.7356 29.9822L15.7235 29.9828ZM14.2217 29.9801L14.245 29.9812L14.2286 29.9805L14.2217 29.9801ZM15.7714 29.9805L15.755 29.9812L15.7783 29.9801L15.7714 29.9805ZM15.8193 29.978L15.7981 29.9791L15.8169 29.9781L15.8391 29.9769L15.8193 29.978ZM14.1831 29.9781L14.2019 29.9791L14.1807 29.978L14.1609 29.9769L14.1831 29.9781ZM15.8671 29.9753L15.8578 29.9758L15.8815 29.9745L15.8671 29.9753ZM14.1185 29.9745L14.1422 29.9758L14.1329 29.9753L14.1185 29.9745ZM14.0762 29.9719L14.0999 29.9733L14.0851 29.9725L14.0762 29.9719ZM15.9149 29.9725L15.9001 29.9733L15.9238 29.9719L15.9149 29.9725ZM14.0358 29.9694L14.0572 29.9708L14.0372 29.9695L14.0172 29.9682L14.0358 29.9694ZM15.9628 29.9695L15.9428 29.9708L15.9642 29.9694L15.9828 29.9682L15.9628 29.9695ZM16.0104 29.9664L16.0033 29.9669L16.026 29.9654L16.0104 29.9664ZM13.974 29.9654L13.9967 29.9669L13.9896 29.9664L13.974 29.9654ZM13.9318 29.9624L13.954 29.964L13.9419 29.9632L13.9318 29.9624ZM16.0581 29.9632L16.046 29.964L16.0682 29.9624L16.0581 29.9632ZM13.8896 29.9595L13.9101 29.9609L13.8942 29.9598L13.8896 29.9595ZM16.1058 29.9598L16.0899 29.9609L16.1104 29.9595L16.1058 29.9598ZM13.833 29.9552L13.8509 29.9565L13.8466 29.9562L13.833 29.9552ZM16.1534 29.9562L16.1491 29.9565L16.167 29.9552L16.1534 29.9562ZM16.2009 29.9525L16.1924 29.9532L16.2106 29.9517L16.2009 29.9525ZM13.7894 29.9517L13.8076 29.9532L13.7991 29.9525L13.7894 29.9517ZM13.7469 29.9483L13.7624 29.9496L13.7515 29.9487L13.7469 29.9483ZM16.2485 29.9487L16.2376 29.9496L16.2531 29.9483L16.2485 29.9487ZM13.7002 29.9443L13.7048 29.9447L13.704 29.9447L13.7002 29.9443ZM16.296 29.9447L16.2952 29.9447L16.2998 29.9443L16.296 29.9447ZM16.3434 29.9405L16.3392 29.9409L16.3498 29.9399L16.3434 29.9405ZM13.6502 29.9399L13.6608 29.9409L13.6566 29.9405L13.6502 29.9399ZM13.6062 29.936L13.6141 29.9367L13.6092 29.9362L13.6062 29.936ZM16.3908 29.9362L16.3859 29.9367L16.3938 29.936L16.3908 29.9362ZM12.6562 29.8176C5.48912 28.6911 0 22.4815 0 15C0 6.72129 6.72129 0 15 0C23.2787 0 30 6.72129 30 15C30 22.4815 24.5109 28.6911 17.3438 29.8176V19.3359H20.8389L21.5039 15H17.3438V12.1863C17.3438 11 17.9249 9.84375 19.7882 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.322 5.85938C14.8956 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8176Z" fill="black"/>
</svg>

                </a>
                
              </div>
             
        <div className="banner">
        <img src={sub} className = "sub" style={{marginTop: "0"}}></img>
        <div className="banner_text"><div className="sub_text">SUBSCRIBE TO OUR NEWSLETTER</div>
        <div className="sub_small">Discover how to get the best-recording settings, news, and exclusive discounts!</div>
        <div className="sub_form">
        <input type="text" placeholder="Your Email" name="email" required style={{
          background: "#F9F9F9",
          borderRadius: "5px",
          padding: "10px 30px",
          border: "1px",
          marginTop: "8%",
          marginRight: "3%"
        }}></input>
        <input type="submit" value="Subscribe" style={{
          background: "#FFA100",    
          boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          padding: "10px 30px",
          fontWeight: "500",
          fontSize: "14px",
          border: "1px",
          color: "white",
        }}></input>
        </div>
        </div>
        </div>



        <div className="viewed" style={{
          marginTop: "5%",
          width: "80%",
        }}>
        <div>Recent Articles</div>
        <hr style={{ margin: 0 }}></hr>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item>
            <ol className="news_block" style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              listStyle: "none"
            }}>
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
                            height: "210px"
                          }}
                        /></Link>
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
                          <Link to={post.fields.slug} itemProp="url" className="link_arc">
                            {title}
                          </Link>
                        </h2>

                        <div></div>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.description || post.excerpt,
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
      <Link to="/"><button className = "loadmore" style={{
        marginBottom: "7%"
      }}>
        Find more
      </button></Link></div>
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
      timeToRead
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
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
