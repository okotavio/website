import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "../components/container"
import Grid from '@mui/material/Grid'

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

  const gutter = 5

  return (
    
    <Link to={props.url}>
    <div className="thumb">
        <GatsbyImage image={props.img} className="thumb-image" />
        <div className="thumb-content">
        <Grid container>
        <Grid item lg={5}>
        <h1>{props.title}</h1>
        </Grid>
        <Grid item lg={6}/>
        <Grid item lg={4}>
        <p>{props.subtitle}</p>
        </Grid>
        </Grid>
      </div>
    </div>
    </Link>
  )
}

export default Thumb