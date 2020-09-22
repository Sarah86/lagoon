module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics-gdpr/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","enableDevelopment":true,"anonymizeIP":true,"autoStartWithCookiesEnabled":false,"reactGaOptions":{"debug":true,"gaOptions":{"sampleRate":10}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#ffff","theme_color":"#40b5e8","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
