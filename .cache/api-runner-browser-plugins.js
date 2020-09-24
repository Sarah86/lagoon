module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics-gdpr/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","enableDevelopment":true,"anonymizeIP":true,"autoStartWithCookiesEnabled":false,"reactGaOptions":{"debug":true,"gaOptions":{"sampleRate":10}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Terraço Lagoon","short_name":"lagoon","start_url":"/","background_color":"#ffff","theme_color":"#40b5e8","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"5bb0042bfe0396ea11a7953f33577541"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
