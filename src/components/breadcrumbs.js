import React from "react"
import { Link } from "gatsby"

const MyCustomBreadcrumb = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map(crumb => {
        return (
          <div style={{ display: "inline", fontSize: "16px" }}>
            <Link
              to={crumb.pathname}
              className="crumbStyle"
            >
              {crumb.crumbLabel}
            </Link>
            {crumb.crumbSeparator || " > "}
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
