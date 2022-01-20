import React from "react"

function WorkSection(props) {
    return (
        <>
        <div className="work-title">
        <h1>{props.title}</h1>
        <p className="city">{props.subtitle}</p>
        </div>
        <div className="accordions">
            {props.children}
        </div>
        </>
    )
}

export default WorkSection