require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Lenguaje binario`,
    description: `Blog sobre desarrollo y tecnologia, por Christian Hernandez`,
    author: `@ChristianEdsv`,
    menuLinks:[
      {
        name:'inicio',
        link:'/'
      },
      {
        name:'blog',
        link:'/blog'
      }
    ]
  },
  plugins: [
    `gatsby-source-fontawesome`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
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
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
        ? `https://blog-lenguaje-binario.herokuapp.com`
        : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`,`categorias`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `PT Serif`,
            variants: [`400`,`400i`, `700`, `700i`],
          },
          {
            family: `PT Sans`,
            variants: [`400`,`400i`, `700`, `700i`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
