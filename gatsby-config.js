module.exports = {
  siteMetadata: {
    title: 'Wagtail Space Minsk',
    description: 'A sprint dedicated to Wagtail CMS that will take place in Minsk, Belarus on October 27-28, 2018',
    siteUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://minsk.wagtail.space',
    socialMedia: {
      twitter: "@wagtailcms",
    }
  },
  plugins: [
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
