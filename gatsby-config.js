module.exports = {
  siteMetadata: {
    defaultTitle: 'Wagtail Space Minsk',
    defaultDescription: 'A sprint dedicated to Wagtail CMS that will take place in Minsk, Belarus on the 27-28th of October, 2018',
    registrationURL: "",
    siteUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://minsk.wagtail.space',
    socialMedia: {
      twitter: "@wagtailcms",
    }
  },
  plugins: [
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/media`,
        name: 'media',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://minsk.wagtail.space',
      },
    },
  ],
}
