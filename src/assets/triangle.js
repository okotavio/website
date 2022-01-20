import React from "react";

function Triangle(props) {

 return (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} width="8" height="11" fill="none" viewBox="0 0 8 11">
  <path fill={props.fill} d="M8 4.5L2 7.964V1.036L8 4.5z"/>
</svg>

 );
}

export default Triangle;