import React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql } from "gatsby"

export default({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <Header />
            <div>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <Footer />
        </div>
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
