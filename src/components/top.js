import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

  const tagsstyled = {
    color: "#FFA100",
  padding: "5px",
  padding: "5px 35px",
  width: "max-content",
  background: "#FFA10033",
  borderRadius: "5px",
  textAlign: "center",
  fontSize: "16px",
  textTransform: "uppercase"
  };
  console.log(data)
  // Set these values by editing "siteMetadata" in gatsby-config.js
  /* const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social*/

  return (
    <div className="top">
      <div className="flex_blocks">
        <div>
        <Link
                to={data.allMarkdownRemark.nodes[0].fields.slug}
                itemProp="url"
              > <GatsbyImage
            image={getImage(data.allMarkdownRemark.nodes[0].frontmatter.image)}
            key=""
            alt={data.allMarkdownRemark.nodes[0].frontmatter.title}
            imgStyle={{
              borderRadius: "5px",
            }}
            style={{
              borderRadius: "5px",
              boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
              height: "300px"
            }}
          /></Link>

          <div className="photo_text_flex">
           
            <div className="tags_photo" style={{ color: "black" }}>
              {data.allMarkdownRemark.nodes[0].frontmatter.tags.map(
                (tag, i) => [
                  <div key={i} className={
                    tag === "News"
                    ? "tags-news"
                    : tag === "Ophthalmology"
                    ? "tags-ophthalmology"
                    : tag === "Technology"
                    ? "tags-technology"
                    
                    : "tags-news"
                  }>
                    {tag}
                    {i <
                    data.allMarkdownRemark.nodes[0].frontmatter.tags.length - 1
                      ? ", "
                      : ""}
                  </div>,
                ]
              )}
            </div>{" "} <div className="timer">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/timer.png"
                quality={100}
                alt="timer image"
              />
              <div className = "timeread">&#160;{data.allMarkdownRemark.nodes[0].timeToRead} mins</div>
            </div>
          </div>
          <div className="text_flex">
            <div className="article_h2" id="h2">
              {" "}
              <Link
                to={data.allMarkdownRemark.nodes[0].fields.slug}
                itemProp="url"
              >
                <h1 className="h2_without">
                  {data.allMarkdownRemark.nodes[0].frontmatter.title}
                </h1>
              </Link>
            </div>

            <p>{data.allMarkdownRemark.nodes[0].frontmatter.description}</p>
          </div>
        </div>
      </div>

      <div className="flex_blocks">
        <div>
        <Link
                to={data.allMarkdownRemark.nodes[1].fields.slug}
                itemProp="url"
              > <GatsbyImage
            image={getImage(data.allMarkdownRemark.nodes[1].frontmatter.image)}
            key=""
            alt={data.allMarkdownRemark.nodes[1].frontmatter.title}
            imgStyle={{
              borderRadius: "5px",
              boxShadow: "1px 1px 1px 2px rgba(0, 0, 0, 0.05)"
            }}
            style={{
              borderRadius: "5px",
              boxShadow: " 1px 1px 1px 2px rgba(0, 0, 0, 0.05)",
              height: "300px"
            }}
          /></Link>
          <div className="photo_text_flex">
           
            <div className="tags_photo" style={{ color: "black" }}>
              {data.allMarkdownRemark.nodes[1].frontmatter.tags.map(
                (tag, i) => [
                  <div key={i} className={
                    tag === "News"
                                ? "tags-news"
                                : tag === "Ophthalmology"
                                ? "tags-ophthalmology"
                                : tag === "Technology"
                                ? "tags-technology"
                                
                                : "tags-news"
                  }>
                    {tag}
                    {i <
                    data.allMarkdownRemark.nodes[1].frontmatter.tags.length - 1
                      ? ", "
                      : ""}
                  </div>,
                ]
              )}
            </div>{" "} <div className="timer">
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/timer.png"
                quality={100}
                alt="timer image"
              />
              
            <div className = "timeread">&#160;{data.allMarkdownRemark.nodes[1].timeToRead} mins</div></div>
          </div>
          <div className="text_flex">
            <div className="article_h2" id="h2">
              {" "}
              <Link
                to={data.allMarkdownRemark.nodes[1].fields.slug}
                itemProp="url"
              >
                <h1 className="h2_without">
                  {data.allMarkdownRemark.nodes[1].frontmatter.title}
                </h1>
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
