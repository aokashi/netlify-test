import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql } from "gatsby";

export default({ data }) => {
    return (
        <div>
            <Header />
            <div>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>{node.frontmatter.title}{" "}</h3>
                        <span>{node.frontmatter.date}</span>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY年 M月 DD日")
                    }
                    excerpt
                }
            }
        }
    }
`
