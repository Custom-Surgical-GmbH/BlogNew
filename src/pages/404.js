import * as React from "react"
import { graphql } from "gatsby"
import ooops from "/src/images/we-are-hiring.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Page not found - Custom Surgical" />
      <div style={{
        maxWidth: "100%",
        paddingRight: "20px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}><h1 style={{
        fontSize: "clamp(6.25rem,calc(6.25rem + ((1vw - 0.265625rem) * 9.3645)),15rem)",
        fontWeight: "700",
        textAlign: "center",
        lineHeight: "1.0",
        borderTopStyle: "solid",
        borderTopWidth: "20px",
        borderBottomWidth: "20px",
        borderBottomStyle: "solid",
        borderBottomColor: "#000000",
        borderTopColor: "#000000",
      }}>Ooops!</h1>
      <img style={{
              position: "absolute",
              top: "0px",
              mixBlendMode: "screen",
              bottom: "0px",
              height:"100%",
              width: "100%",
              objectFit: "contain"
            }} src={ooops} alt="Logo"></img>
          <h1>404 - PAGE NOT FOUND</h1>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p></div>
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

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
