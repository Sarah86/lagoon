module.exports = {
  siteMetadata: {
    title: `Lagoon`,
    description: `Terraço Lagoon - Seu evento sob o Cristo Redentor e de frente para a Lagoa`,
    author: `Terraço Lagoon`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
          // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
          cookieHubId: "eef763ba",
          // Optional parameter (default false) - Use new v2 API.
          cookieHubV2Api: false,
          // Categories configured with CookieHub
          categories: [
          { 
              categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
              cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
          },
          { 
              categoryName: 'marketing',
              cookieName: 'marketing-enabled'
          }
          ]
      },
    },
     {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-179493506-1", 
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false, 
        // Optional parameter - Configuration for react-ga and google analytics 
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 10
            }
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `estrutura`,
        path: `${__dirname}/src/images/estrutura`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/components/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Terraço Lagoon`,
        short_name: `lagoon`,
        start_url: `/`,
        background_color: `#ffff`,
        theme_color: `#40b5e8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
