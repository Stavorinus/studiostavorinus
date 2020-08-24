/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import Header from "./header"
import {Helmet} from "react-helmet";
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header/>

        <progress value="0" id="progressBar"></progress>


        <main>{children}</main>
      

        <div id="rotate-device"></div>
        <Helmet>
          <script src= {withPrefix('../js/jquery.min.js')}></script>
          <script src= {withPrefix('../js/plugins.js')}></script>
          <script src= {withPrefix('../js/scripts.js')}></script>
       </Helmet>
      </div>
  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
