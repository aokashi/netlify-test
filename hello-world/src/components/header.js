import React from "react"

export default (props) => (
    <header>
        <h1>{props.headerText}</h1>
        <p>{props.children}</p>
    </header>
)
