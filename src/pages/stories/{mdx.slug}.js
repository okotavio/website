import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Container from "../../components/container"
import Grid from '@mui/material/Grid'
import Accordion from "../../components/accordion"
import Thumb from "../../components/thumb"
import AnimatedLogo from "../../assets/animatedlogo"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {

  const gutter = 5

  let featuredImage = data.mdx.frontmatter.image.childImageSharp.gatsbyImageData

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <div className="post-header">
    <GatsbyImage image={featuredImage} className="featured-image" />
    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8} md={10} sm={12} xs={12}>

    <div className="above-title">

      <ul className="breadcrumbs">
        <li><Link to="/">Home</Link></li>
        <li>{data.mdx.frontmatter.category}</li>
      </ul>

    </div>
    
    </Grid>
    </Grid>
    </Container>

    <div className="post">
    <div className="blurry-sticky">

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8} md={10} sm={12} xs={12}>

    <div className="title" id="main">
    <h1>{data.mdx.frontmatter.title}</h1>
    <p>{data.mdx.frontmatter.subtitle}</p>
    </div>


    </Grid>
    </Grid>
    </Container>
    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8} md={10} sm={12} xs={12}>
    
    <div className="below-title">

    <p className="date">Written on {data.mdx.frontmatter.date}</p>

    </div>

    <article>
    <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </article>

    </Grid>
    </Grid>
    </Container>
    </div>
    </Layout>
  )

}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        subtitle
        category
        date(formatString: "MMMM D, YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              height: 496
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`

export default BlogPost