module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My fancy blog",
  },
  plugins: [
           "gatsby-plugin-image",
           "gatsby-plugin-sharp",

           {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
          },
    ],
           
};
