import React from "react";
import Links from "./Links";

function About(props) {
  const isBio = props.bio
  if (isBio) {
    return <div id="about">
    <h2>About Me</h2>
    <p>{ isBio }</p>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    {<Links github={props.links.github} linkedin={props.links.linkedin}/>}
  </div> 
}
  return <div id="about">
  <h2>About Me</h2>
  <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  {<Links github={props.links.github} linkedin={props.links.linkedin}/>}
</div> 
}

export default About;
