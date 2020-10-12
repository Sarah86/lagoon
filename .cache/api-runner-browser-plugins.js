module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-cookiehub/gatsby-browser.js'),
      options: {"plugins":[],"cookihubId":"eef763ba","trackingId":"UA-179493506-1","head":false,"anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Terraço Lagoon","short_name":"lagoon","start_url":"/","background_color":"#ffff","theme_color":"#40b5e8","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"85c102391d08885bdb0da3278b8a2532"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
