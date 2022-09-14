import React from "react"
import { AppBar, Toolbar, Typography, Button } from "@mui/material/"

import { Link } from "gatsby"
import LogoSvg from "/src/images/logo_h_color_white.svg"

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {CustomSurgicalLogo}
        <ul className="nav_menu">
          <li>
            <a className="nav_link" href="https://customsurgical.co/">
              Home
            </a>
          </li>
          <li>
            <a className="nav_link" href="https://customsurgical.co/about/">
              About
            </a>
          </li>
          <li>
            <a className="nav_link" href="https://customsurgical.co/app/">
              App
            </a>
          </li>
          <li>
            <a
              className="nav_link"
              href="https://customsurgical.co/distributors/"
            >
              Distributors
            </a>
          </li>
          <li>
            <a className="nav_link" href="/">
              Blog
            </a>
          </li>
        </ul>
        <button className="shop">
          <a href="https://store.customsurgical.co/" style={{ color: "white" }}>
            Shop now
          </a>
        </button>
      </Toolbar>
    )
  }

  const CustomSurgicalLogo = (
    <Link to="https://customsurgical.co/">
      <Typography
        variant="h6"
        component="h1"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* <LogoSvg /> */}
        <img
          src={LogoSvg}
          style={{ width: "150px", height: "auto" }}
          alt="logo"
        ></img>
      </Typography>
    </Link>
  )

  return <AppBar sx={styles.headerAppBar}>{displayDesktop()}</AppBar>
}

const styles = {
  headerAppBar: {
    background: "#202026",
    paddingRight: "0px",
    paddingLeft: "0px",
  },
}
