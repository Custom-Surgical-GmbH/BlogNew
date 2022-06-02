import * as React from "react"
import { graphql, Link } from "gatsby"
import ooops from "/src/images/we-are-hiring.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "/src/images/logo.png"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  let header
  header = <img style={{ width: "50px" }} src={logo} alt="Logo" />
  return (
    <Layout location={location} title={siteTitle}>
      
      
      <Seo title="Page not found - Custom Surgical" />
      <div style={{
        maxWidth: "100%",
        paddingRight: "20px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        marginTop: "5em",
        alignItems: "center"
      }}><h1 className="h1_error">Ooops!</h1>
     
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
