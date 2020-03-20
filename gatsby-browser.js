/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require("react");
const { ParallaxProvider } = require("react-scroll-parallax");


exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <ParallaxProvider {...props}>{element}</ParallaxProvider>
  }



