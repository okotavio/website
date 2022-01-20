import React from "react"
import AnimatedLogo from "../assets/animatedlogo"
import Layout from "../components/layout"
import Container from "../components/container"
import Grid from '@mui/material/Grid'
import Accordion from "../components/accordion"
import Thumb from "../components/thumb"
import { graphql } from 'gatsby'
import ScrollContainer from 'react-indiana-drag-scroll'
import ReactGoogleSlides from "react-google-slides"
import BlogItems from "../components/blogItems"

const FourOhFour = ({ data }) => {

  const gutter = 5

  return (
    <div>
    <AnimatedLogo />
    </div>
  )

}

export default FourOhFour