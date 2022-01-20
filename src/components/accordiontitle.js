import React from "react";

function AccordionTitle(props) {

  return (

    <div className="accordion-title">
        <p>{props.title}</p>
        <hr />
        <p>{props.subtitle}</p>
    </div>

  );
}

export default AccordionTitle