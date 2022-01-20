import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Thumb = ( props ) => {

  function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null
    })

    useEffect (() => {
      function handle(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        })
      }
      document.addEventListener("mousemove", handle);
      return() => document.removeEventListener("mousemove", handle)
    })

    return mousePosition
  }
    
  
  const {x, y} = useMouse();

  return (
    
    <Link to={props.url}>
    <div className="thumb">
        <GatsbyImage image={props.img} className="thumb-image" />
        <p className="date">{props.date}</p>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
    </Link>
  )
}

export default Thumb