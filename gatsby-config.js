const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://thefoxclub-dev.netlify.com/`, // this must be from env
  },
  plugins: [
  `gatsby-plugin-advanced-sitemap`,
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-KF6WJVX",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      //dataLayerName: "YOUR_DATA_LAYER_NAME",
    },
  },
  {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fzlso4ysqe01`,
        accessToken: `prSvlghnn-7Y8kxC9Yww351kSz3NLL_wapZWi9a-yoA`,
        host: `preview.contentful.com`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: "gatsby-plugin-netlify-cache",
    options: {
      cachePublic: true
      }
    },
    `gatsby-plugin-sass`,
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-htaccess`
    // `gatsby-plugin-offline`,
  ],
}
