import * as React from "react"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import Header from "./header"
import { Box } from "@mui/material"
import Humburger from "../components/humburger"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const styles = {
  buttonStyle: {
    background: "#FFA100",
    border: "0",
    borderRadius: "4px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "6px 16px",
    margin: "15px",
    fontWeight: "500",
  },
  declineButtonStyle: {
    background: "#rgb(222, 223, 224)",
    border: "0",
    borderRadius: "4px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "6px 16px",
    margin: "15px",
    fontWeight: "500",
  },
}

const Layout = ({ location, title, children, crumbLabel }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
  } else {
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
     <Box display={{xs:'none', sm: 'block'}}>
       <Header/></Box>
       <Box display={{xs:'block', sm: 'none'}}><Humburger/></Box> 
      <main>{children} </main>
      <CookieConsent
        // debug={true}
        contentStyle={{ margin: 30 }}
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-cookies"
        // buttonClasses="MuiButton-containedPrimary "
        buttonStyle={styles.buttonStyle}
        declineButtonStyle={styles.declineButtonStyle}
        onAccept={() => {
          Cookies.set("gatsby-gdpr-cookies", "true")
          // Cookies.set('gatsby-gdpr-google-analytics', 'true');
          // Cookies.set('gatsby-gdpr-facebook-pixel', 'true');
          // Cookies.set('gatsby-gdpr-hotjar', 'true');
          initializeAndTrack(location)
        }}
      >
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking “Accept",
        you consent to the use of cookies.
        <a
          href="https://customsurgical.co/privacy-policy/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#FFA100" }}
        >
          {" "}
          Learn More{" "}
        </a>
      </CookieConsent>
    </div>
  )
}

export default Layout
