import React from "react";

function Links(props) {
    return <div>
    <h3>Links</h3>
    <a href={props.github} alt={props.github}>{props.github}</a>
    <a href={props.linkedin} alt={props.linkedin}>{props.linkedin}</a>
    </div>
}


export default Links