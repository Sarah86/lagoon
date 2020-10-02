var plugins = [{
      plugin: require('/mnt/c/Users/sarah/OneDrive/Documentos/PROJETOS/__DONE/LAGOON/lagoon-website/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/mnt/c/Users/sarah/OneDrive/Documentos/PROJETOS/__DONE/LAGOON/lagoon-website/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/mnt/c/Users/sarah/OneDrive/Documentos/PROJETOS/__DONE/LAGOON/lagoon-website/node_modules/gatsby-plugin-cookiehub-banner/gatsby-ssr'),
      options: {"plugins":[],"cookieHubId":"eef763ba","cookieHubV2Api":false,"categories":[{"categoryName":"analytics","cookieName":"gatsby-plugin-google-analytics-gdpr_cookies-enabled"},{"categoryName":"marketing","cookieName":"marketing-enabled"}]},
    },{
      plugin: require('/mnt/c/Users/sarah/OneDrive/Documentos/PROJETOS/__DONE/LAGOON/lagoon-website/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Terraço Lagoon","short_name":"lagoon","start_url":"/","background_color":"#ffff","theme_color":"#40b5e8","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"85c102391d08885bdb0da3278b8a2532"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
