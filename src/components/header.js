import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'

import Sections from "./sections.json"


import Image from "./image";
import SocialList from "./social";

const Header = ({ siteTitle }) => {

  const [menuActive, setMenuActive] = useState(false);

  const handleActiveMenu = () => {
    setMenuActive(!menuActive);
  }

  useEffect(() => {
    const html = document.querySelector('html');
    menuActive 
    ? html.classList.add("mobile-nav-activated", "overflow-hidden")
    : html.classList.remove("mobile-nav-activated", "overflow-hidden");

     const body = document.querySelector('body');
    // body.setAttribute("data-mobile-nav-style", "modern");
    body.setAttribute('data-mobile-nav-trigger-alignment', 'right');
    body.setAttribute('data-mobile-nav-shceme', 'gray');
    body.setAttribute('data-mobile-header-scheme', 'gray');
    body.setAttribute('data-mobile-nav-breakpoint', '1199');
  })
  

  const LinkMenu = Sections.map((section, i) => (
    <li onClick={handleActiveMenu} key={i}>
      <a
          href={`#${section.id}`}
          onClick={(event) => {
          event.preventDefault();
          scrollTo(`#${section.id}`)
          }} 
          style={{ cursor: 'default' }}>
        <span className="link-icon" />
        <span className="link-txt">
          <span className="link-ext" />
          <span className="txt">
            {section.name}
          </span>
        </span>
      </a>
    </li>
  ))

  return (
    <header className="main-header main-header-overlay bg-white" 
    style={{height:'var(--header-size)', position: 'sticky'}}>
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg" />{/* /.megamenu-hover-bg */}
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch px-4">
              <div className="col pr-5">
                <div className="navbar-header">
                  <a className="navbar-brand" style={{padding: '0 0'}} href="/" rel="home">
                    <span className="navbar-brand-inner">
                      <Image imgName="TL-COLOR-POSITIVA.png" style={{
                                                                  width: '85px', 
                                                                  height: 'auto',
                                                                  mixBlendMode: 'darken',
                                                                  margin: '.5em 0'}}/>
                    </span>
                  </a>
                  <button type="button" onClick={handleActiveMenu} className={`navbar-toggle ${menuActive ? false : "collapsed"} nav-trigger style-mobile`} data-toggle="collapse" aria-expanded={`${menuActive}`}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                      <span className="bar" />
                      <span className="bar" />
                      <span className="bar" />
                    </span>
                  </button>
                </div>{/* /.navbar-header */}
              </div>{/* /.col */}
              <div className="col pr-5">
                <div className={`collapse navbar-collapse ${menuActive && 'in'} `}>
                  <ul id="primary-nav" className="main-nav main-nav-hover-underline-1 nav align-items-lg-stretch justify-content-lg-center">
                    {LinkMenu}
                  </ul>{/* /#primary-nav  */}
                </div>{/* /#main-header-collapse */}
              </div>{/* /.col */}
              <div className="col text-right">
                <div className="header-module">
                 <SocialList className="social-icon branded-text social-icon-md"/>
                </div>{/* /.header-module */}
              </div>{/* /.col */}
            </div>{/* /.mainbar-row */}
          </div>{/* /.mainbar */}
        </div>{/* /.mainbar-container */}
      </div>{/* /.mainbar-wrap */}
    </header>/* /.main-header */

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
