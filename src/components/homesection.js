import React from "react"

function HomeSection(props) {

  return (
    <section className="work">
    <p className="section-title">{props.title}</p>
    <div className="work-section">
        {props.children}
    </div>
    </section>
  );
}

export default HomeSection