import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import Grid from '@mui/material/Grid';

const Footer = ({  }) => {

  const gutter = 5

  return (
    <Container>
    <footer>
    <Grid container spacing={gutter}>
    <Grid item lg={10}>
        <ul>
          <li><a href="https://www.figma.com/@okotavio" target="_blank" rel="noreferrer">Figma</a></li>
          <li><a href="https://www.linkedin.com/in/otaviovidal/" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a href="https://drive.google.com/file/d/1_nsprB3PGrtYcXfJrhbidR1VktYhjVvz/view" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
        <p>Built using Figma and React in São Paulo, Brazil</p>
        <p>Last published on January 1, 2022</p>
    </Grid>
    <Grid item lg={2}>
    <Grid container justifyContent="flex-end">
        <a href="mailto:otavioluisvidal@gmail.com" target="_blank" rel="noreferrer" className="button">
          Say hello →
        </a>
    </Grid>
    </Grid>
    </Grid>
    </footer>
    </Container>
  )
}

export default Footer