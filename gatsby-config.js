require("dotenv").config({
  path: `.env`,
});
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Charis Presets",
    author: "Charis Cheung",
    description:
      "Welcome to my preset store. I created 4 unique presets that give the look my pictures create.",
    siteUrl: "https://charispresets.com/",
    keywords: ["Presets", "Photography", "Editorial", "Creative"],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins\:300,400,400i,700`, // you can also specify font weights and styles
          "Vollkorn",
        ],
        display: "swap",
      },
    },
  ],
};
