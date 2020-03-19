import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'

import Image from "./image";

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
  },[])
  
  const LinkMenu = ({link, className, title}) => {
    return(
      <li className={className} onClick={handleActiveMenu}>
      <a onClick={() => scrollTo(`${link}`)} style={{cursor: 'default'}}>
        <span className="link-icon" />
        <span className="link-txt">
          <span className="link-ext" />
          <span className="txt">
            {title}
          </span>
        </span>
      </a>
    </li>
    )
  }

  return (
    <header className="main-header main-header-overlay bg-white" 
    style={{height:'var(--header-size)'}}>
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg" />{/* /.megamenu-hover-bg */}
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch px-4">
              <div className="col pr-5">
                <div className="navbar-header">
                  <a className="navbar-brand" style={{padding: '0 0'}} href="/" rel="home">
                    <span className="navbar-brand-inner">
                      <Image imgName="TERRAÇO-LAGOON-logo.png" style={{
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
                  <ul id="primary-nav" className="main-nav main-nav-hover-underline-1 nav align-items-lg-stretch justify-content-lg-center" data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }">
                    <LinkMenu link="#home" title="Home" className="current-menu-item"/>
                    <LinkMenu link="#sobre" title="Sobre" className=""/>
                    <LinkMenu link="#quem-confia" title="Quem confia" className=""/>
                    <LinkMenu link="#galeria" title="Galeria" className=""/>
                    <LinkMenu link="#onde-estamos" title="Onde estamos" className=""/>
                  </ul>{/* /#primary-nav  */}
                </div>{/* /#main-header-collapse */}
              </div>{/* /.col */}
              <div className="col text-right">
                <div className="header-module">
                  <ul className="social-icon branded-text social-icon-md">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
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
