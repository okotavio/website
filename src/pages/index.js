import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Grid from '@mui/material/Grid'
import { graphql } from 'gatsby'
import ReactGoogleSlides from "react-google-slides"
import BlogItems from "../components/blogItems"
import {
  Accordion
} from 'react-accessible-accordion';
import WorkAccordion from "../components/workaccordion"
import HomeSection from "../components/homesection"
import WorkSection from "../components/worksection"

const Home = ({ data }) => {

  const gutter = 5

  return (
    <Layout pageTitle="Home">
    <Container>
    <Grid container spacing={gutter}>
      
      <Grid item lg={2} />
      <Grid item lg={8}>
      <div className="hero">
      <h1>Currently designing traveling experiences at <a href="https://hopper.com/" target="_blank">Hopper</a>.</h1>
      <h1>Front-end development enthusiast, mentoring at <a href="https://adplist.org/mentors/otavio-vidal" target="_blank">ADPList</a> and soon-to-be talking about design on my <a href="https://www.youtube.com/channel/UCENKqmzfaop3NyY0eUZLl1w" target="_blank">YouTube channel</a>.</h1>
      <h1>Previously, I led a design systems team at <a href="https://quintoandar.com.br/" target="_blank">QuintoAndar</a>, designing the building blocks of the biggest proptech in Latin America.</h1>
      </div>
      </Grid>
      <Grid item lg={2} />

      </Grid>
      </Container>

      <BlogItems items={data} />

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>

    <HomeSection title="Work">

      <WorkSection title="Hopper" subtitle="Montreal, Canada">
      <Accordion allowZeroExpanded="true">
      <WorkAccordion title="Senior Product Designer" subtitle="Dec 2021 — present">
        I currently work in the App Experience team evolving and maintaining a SDUI-based design system for native iOS and Android applications.
      </WorkAccordion>
      </Accordion>
      </WorkSection>

      <WorkSection title="QuintoAndar" subtitle="São Paulo, Brazil">
      <Accordion allowZeroExpanded="true">
      <WorkAccordion title="Senior Product Designer, Design Systems" subtitle="Jan 2021 — Dec 2021">
      <p>I led a cross-platform, company-wide design system by approaching Product Designers and Engineers as design systems users.</p>
      <ul className="stepper">
      <li>Led continuous quantitative and qualitative measuring initiatives.</li>
      <li>Defined prioritization, quarterly roadmaps and metrics collaboratively with the team's Product Manager and Engineering Manager.</li>
      <li>Designed a semantic, platform-agnostic design tokens system to ensure cohesive, contextual and accessible colors usage.</li>
      <li>Led a design system redesign including defining prioritization with peers through research insights, designing a visual language direction collaborating with other designers, redesigning components from scratch and testing them with Product Designers and Engineers.</li>
      <li>Designed a modular, cross-functional documentation template for components that covered segmented content for Engineers, Product Designers and Accessibility based on in-depth interviews and usability tests.</li>
      <li>Led cross-company communication to engage product teams.</li>
      <li>Mentored entry-level Product Designers.</li>
      </ul>
      </WorkAccordion>
  
      <WorkAccordion title="Product Designer, Design Systems" subtitle="Dec 2019 — Jan 2021">
      <ul className="stepper">
      <li>Designed user interface components of varied atomicity.</li>
      <li>Established reusable, accessible patterns.</li>
      <li>Wrote technical design documentation.</li>
      <li>Designed and maintained components and tokens libraries in Figma.</li>
      <li>Conducted extensive research and usability tests with Product Designers and Engineers.</li>
      <li>Defined APIs with Engineers.</li>
      <li>Advocated for design systems consistency company-wide.</li>
      </ul>
      </WorkAccordion>
  
      <WorkAccordion title="Product Designer" subtitle="Oct 2018 — Dec 2019">
      <p>I designed features for web applications used by tenants, landlords and internal users through user research and user interface design, while following iterations after release.</p>
  
      <ul className="stepper">
      <li>Planned and conducted qualitative and quantitative user research through various methods, such as in-depth interviews and user surveys.</li>
      <li>Prototyped features for web applications with Sketch and Figma.</li>
      <li>Gathered user feedback from guerrilla and recruited usability tests.</li>
      <li>Provided specs and worked with software engineers to define implementation strategies.</li>
      </ul>
      </WorkAccordion>
      </Accordion>  
      </WorkSection>

      <WorkSection title="SA365" subtitle="São Paulo, Brazil">
      <Accordion allowZeroExpanded="true">

      <WorkAccordion title="Designer" subtitle="Jan 2018 — Oct 2018">
      <ul className="stepper">
      <li>Designed the user interface of digital products for physicians.</li>
      <li>Led branding projects for external clients as well as the agency’s rebranding.</li>
      <li>Created visual guidelines for the overall look of digital media campaigns.</li>
      <li>Supervised design interns focused on developing hard skills.</li>
      </ul>
      </WorkAccordion>
  
      <WorkAccordion title="Design Intern" subtitle="Nov 2016 — Jan 2018">
      <ul className="stepper">
      <li>Designed user interface for landing pages, corporate websites and newsletter campaigns.</li>
      <li>Designed branded content for Facebook, Instagram and Twitter.</li>
      <li>Worked with strategists, copywriters and data analysts for social media campaigns.</li>
      <li>Developed interactive, animated banners with Google Web Designer.</li>
      <li>Co-created a social media campaign that reached +24k people for a pet food brand.</li>
      </ul>
      </WorkAccordion>

      </Accordion>
      </WorkSection>

    </HomeSection>

    <HomeSection title="Speaking">
      <WorkSection title="The Developer's Conference">
      <Accordion allowZeroExpanded="true">
      <WorkAccordion title="A product to build products: an internal users approach on design systems" subtitle="2021">
        <p>Many people relate user-centered design to a product's end users and that's why many early stage design systems often focus their efforts on usability at the end of this process.</p>
          
        <p>But before they get to the interfaces used by end users, design systems are used by the people who build these products: product designers and software engineers. Cozy, QuintoAndar's design system, was used by more than 70 cross-functional teams, 90 product designers and over 350 engineers in 2021. Were they our users?</p>
        
        <p>In this talk, I spoke about how was it like to work with an internal-user-centric mentality throughout a design system's process and what this implies in the daily life of a cross-functional, dedicated design systems team.</p>
          <ReactGoogleSlides
          width="100%"
          slidesLink="https://docs.google.com/presentation/d/11JXp7hiHg-4MKxt9MxNTpnuXGvYfUArA24wThuhB98E/edit?usp=sharing"
          position={1}
          showControls
          loop />
        </WorkAccordion>
      </Accordion>
  
  
      </WorkSection>
    </HomeSection>

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
    edges {
    node {
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
        subtitle
        category
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      id
      slug
    }
  }
  }
}
`