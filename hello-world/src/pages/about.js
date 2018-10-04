import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import { graphql } from "gatsby";

export default ({ data }) => (
    <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby">Test</Header>
        <p>Such wow. Vert React.</p>
        <Container>
            <h2>About CSS modules</h2>
            <p>CSS Modules are cool</p>
        </Container>
        <ul>
        {data.allFile.edges.map(({node}, index) => (
            <li>{index}: {node.relativePath}</li>
        ))}
        </ul>
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
