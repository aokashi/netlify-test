import React from "react"
import { graphql } from "gatsby"

export default({ data }) => {
    const post = data.markdownRemark
    return (
        <section>
            <header>
                <h1>{post.frontmatter.title}</h1>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
