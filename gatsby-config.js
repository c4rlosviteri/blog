module.exports = {
  siteMetadata: {
    title: `Carlos Viteri's Blog`,
    author: {
      name: `Carlos Viteri`,
      title: `Senior Front End Engineer`,
      company: {
        name: `Verndale`,
        url: `https://verndale.com`,
      },
    },
    description: `HTML, CSS, JavaScript and Computer Science`,
    siteUrl: `https://carlosviteri.dev/`,
    social: {
      twitter: `c4rlosviteri`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        pagesPaths: [`${__dirname}/content/blog`],
        langKeyDefault: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
            {
              allMarkdownRemark(filter: {
                fields: {
                  langKey: {
                    eq: "en"
                  }
                }
              }) {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
