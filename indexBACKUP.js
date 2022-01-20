import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Grid from '@mui/material/Grid'
import Accordion from "../components/accordion"
import Thumb from "../components/thumb"
import { graphql } from 'gatsby'
import ReactGoogleSlides from "react-google-slides"
import BlogItems from "../components/blogItems"

const Home = ({ data }) => {

  const gutter = 5

  return (
    <Layout>
    <Container>
    <Grid container spacing={gutter}>
      
      <Grid item lg={2} />
      <Grid item lg={8}>
      <div className="hero">
      <h1>Currently designing traveling experiences at <a href="https://hopper.com/" target="_blank">Hopper</a>. ☺</h1>
      <h1>Figma advocate, front-end development enthusiast and occasionally teaching design on my <a href="https://youtube.com/" target="_blank">YouTube channel</a>.</h1>
      <h1>Previously, I led a design systems team at <a href="https://quintoandar.com.br/" target="_blank">QuintoAndar</a>, designing the building blocks of the biggest proptech startup in Latin America.</h1>
      </div>
      </Grid>
      <Grid item lg={2} />

      </Grid>
      </Container>

      <div className="feed">
      <div className="blurry-sticky">
      <Container>
      <Grid container spacing={gutter}>
      <Grid item lg={2} />
      <Grid item lg={8} sm={12} xs={12}>
      <ScrollContainer className="feed-filters" horizontal>
      <ul>
      <a href="#"><li className="feed-active">All</li></a>
      <a href="#"><li>Projects</li></a>
      <a href="#"><li>Writing</li></a>
      <a href="#"><li>Design Systems</li></a>
      <a href="#"><li>Figma</li></a>
      <a href="#"><li>Immigration</li></a>
      <a href="#"><li>Football</li></a>
      <a href="#"><li>Football</li></a>
      <a href="#"><li>Football</li></a>
      <a href="#"><li>Football</li></a>
      <a href="#"><li>Football</li></a>
      <a href="#"><li>Football</li></a>
      </ul>
      </ScrollContainer>
      </Grid>
      </Grid>
      </Container>
      </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>
    <div className="feed-thumb">
    {
      data.allMdx.nodes.map((node) => (
        
        <Thumb url={`/stories/${node.slug}`} img="https://quentinbarba.fr/content/index/opera-de-vichy.jpg" title={node.frontmatter.title} subtitle={node.frontmatter.subtitle} key={node.id}/>
        
      ))
    }
    </div>
    </Grid>
    </Grid>
    </Container>
    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>
    
    <section className="work less-margin">
    <p className="section-title">Work</p>
    
    <div className="work-section">
    <div className="work-title">
    <h1>Hopper</h1>
    <p className="city">Montreal, Canada</p>
    </div>
    <div className="work-accordions">
    <Accordion title="Senior Product Designer" subtitle="Dec 2021 — present">teste</Accordion>
    </div>
    </div>

    <div className="work-section">
    <div className="work-title">
    <h1>QuintoAndar</h1>
    <p className="city">São Paulo, Brazil</p>
    </div>
    <div className="work-accordions">
    <Accordion title="Senior Product Designer, Design Systems" subtitle="Feb 2021 — Dec 2021">teste</Accordion>
    <Accordion title="Product Designer, Design Systems" subtitle="Dec 2019 — Feb 2021">teste</Accordion>
    <Accordion title="Product Designer" subtitle="Oct 2018 — Dec 2019">teste</Accordion>
    </div>
    </div>

    <div className="work-section">
    <div className="work-title">
    <h1>SA365</h1>
    <p className="city">São Paulo, Brazil</p>
    </div>
    <div className="work-accordions">
    <Accordion title="Designer" subtitle="Jan 2018 — Oct 2018">teste</Accordion>
    <Accordion title="Design Intern" subtitle="Nov 2016 — Jan 2018">teste</Accordion>
    </div>
    </div>

    </section>

    <section className="work">
    <p className="section-title">Speaking</p>
    
    <div className="work-section">
    <div className="work-title">
    <h1>The Developer's Conference</h1>
    </div>
    <div className="work-accordions">
    <Accordion title="A product to build products: an internal users approach on design systems" subtitle="2021">
      <p>Many people relate user-centered design to a product's end users. Therefore, design systems often focus their efforts on usability at the end of this process.</p>
      
      <p>But before they get to the interfaces used by end users, design systems are used by the people who build these products: product designers and software engineers. Cozy, QuintoAndar's design system, was used by more than 70 cross-functional teams, 90 product designers and over 350 engineers. Are they our users?</p>
      
      <p>In this talk, I spoke about how was it like to work with an internal-user-centric mentality throughout a design system's process and what this implies in the daily life of a cross-functional, dedicated design systems team.</p>
      <ReactGoogleSlides
      width="100%"
      slidesLink="https://docs.google.com/presentation/d/11JXp7hiHg-4MKxt9MxNTpnuXGvYfUArA24wThuhB98E/edit?usp=sharing"
      position={1}
      showControls
      loop
    />
    </Accordion>
    </div>
    </div>

    <div className="work-section">
    <div className="work-title">
    <h1>QuintoAndar</h1>
    </div>
    <div className="work-accordions">
    <Accordion title="The design process on a design systems team" subtitle="2020">teste</Accordion>
    <Accordion title="Designing content beyond gender" subtitle="2019">teste</Accordion>
    </div>
    </div>

    </section>

    </Grid>
    </Grid>
    </Container>
    </Layout>
  )

}

export default Home

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        subtitle
      }
      id
      slug
    }
  }
}
`