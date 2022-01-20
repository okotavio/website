import React, { useState } from "react"
import Container from "../components/container"
import AnimatedLogo from "../assets/animatedlogo"
import { Link } from "gatsby"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


const Header = ({  }) => {

  const gutter = 5

  return (
    <Container>
    <header>
    <Grid container spacing={gutter} alignItems="center">
    <Grid item lg={2} md={2}>
    <a className="skip-content" href="#main">
    Skip to content
    </a>
      <Box sx={{ display: { md:'block', sm:'none', xs:'none' } }}> 
      <div className="logo">  
        <Link to="/">
          <AnimatedLogo />
        </Link>
      </div>
      </Box> 
    </Grid>

    <Grid item lg={10} md={10} sm={0} xs={0}>
        <Box sx={{ display: { md:'block', sm:'none', xs:'none' } }}>
          <Link to="/">Otávio Vidal</Link>
        </Box>
    </Grid>
 
    <Grid item lg={0} md={0} sm={12} xs={12}>
      <Box sx={{ display: { xl:'none', lg:'none', md:'none', sm:'block', xs:'block' } }}>
      
      <div className="logo">
        <Link to="/">
          <AnimatedLogo />
        </Link>
        <Link to="/">Otávio Vidal</Link>
      </div>

      </Box>
    </Grid>

    </Grid>
    </header>
    </Container>
  )
}

export default Header