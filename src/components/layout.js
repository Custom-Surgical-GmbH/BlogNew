import * as React from "react"

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
      
    </div>
  )
}

export default Layout
