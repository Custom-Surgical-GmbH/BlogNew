import * as React from "react"
import { Link } from "gatsby"

import logo from '/src/images/logo.png';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
   
  } else {
    
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
       
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
