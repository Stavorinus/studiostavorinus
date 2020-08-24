import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import logo from "../images/logo.png"
const Header = ({ siteTitle }) => (
 /* <header className="hidden"> */
  <header className="hidden"> 
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        
        <ul id="menu">            
            <li className="about-open">menu</li>
            <li className="about-close hidden">close</li>            
        </ul>            
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
