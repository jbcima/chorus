/**
 * @type {import('gatsby').GatsbyConfig}
 */
const adapter = require("gatsby-adapter-netlify")

module.exports = {
  adapter: adapter(),
  siteMetadata: {
    title: `chorus`,
    siteUrl: `https://www.or-us.ch`
  },
  plugins: ["gatsby-plugin-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-decap-cms", {    
    resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-E80RWTXRFM`
      },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/icon.jpeg"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};