module.exports = {
    siteMetadata: {
        title: 'Sample Site'
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
