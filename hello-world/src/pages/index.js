import React from "react";
import { Link, graphql } from "gatsby";

export default ({ data }) => (
    <div style={{ color: `purple` }}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to ="/about/">About</Link>
        <p>What a world.</p>
        <img src="https://contents.aokashi.net/refs/chashitsu_icon.png" alt="" />
    </div>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
