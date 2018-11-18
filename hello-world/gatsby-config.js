module.exports = {
    siteMetadata: {
        title: 'Sample Site',
        description: 'GatsbyJS sample site.'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
