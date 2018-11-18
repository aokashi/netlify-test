import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql } from "gatsby";

export default ({ data }) => (
    <div>
        <Header />
        <div>
            <p>Such wow. Vert React.</p>
            <ul>
            {data.allFile.edges.map(({node}, index) => (
                <li>{index}: {node.relativePath}</li>
            ))}
            </ul>
        </div>
        <Footer />
    </div>
)

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    name
                    relativePath
                    extension
                    size
                    prettySize
                }
            }
        }
    }
`
