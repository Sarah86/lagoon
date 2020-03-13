/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./assets/vendors/liquid-icon/liquid-icon.min.css"
import "./assets/vendors/font-awesome/css/font-awesome.min.css"
import "./assets/css/theme-vendors.min.css"
import "./assets/css/theme.min.css"
import "./assets/css/themes/travel.css"
import "./layout.css"
import "./theme.css"
import { Device } from "./mediaQueries"
import Footer from "./footer"


const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
		  	<main id="content" className="content" 
        style={Device.isDesktop && {marginTop: 'var(--header-size)'}}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
