import React from "react";
import styles from "./header.module.css";
import { StaticQuery, Link, graphql } from "gatsby";

// TODO: ClassName の複数指定はどうしたらいいのか？

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <header className={styles.header}>
                <h1 className={styles.text}>{data.site.siteMetadata.title}</h1>
                <p className={styles.description}>{data.site.siteMetadata.description}</p>
                <nav className={styles.menu}>
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to ="/page">Posts</Link></li>
                    </ul>
                </nav>
            </header>
        )}
    />
)
