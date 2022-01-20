import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Grid from '@mui/material/Grid'
import Accordion from "../components/accordion"
import Thumb from "../components/thumb"

const Post = ({  }) => {

  const gutter = 5

  return (
    <Layout>
    <div className="post-header">
    <img src="https://quentinbarba.fr/content/index/opera-de-vichy.jpg" />
    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>

    <div className="breadcrumbs">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Design Systems</a></li>
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
    <Grid item lg={8}>

    <div className="title">
    <h1>How Stack Overflow is Designing Channels</h1>
    <p>An early look into our design process as we create new, private spaces on SO.</p>
    </div>

    </Grid>
    </Grid>
    </Container>
    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>
    
    <div className="tags">
    <ul>
      <li className="tag">design systems</li>
      <li className="tag">design tokens</li>
      <li className="tag">redesign</li>
    </ul>
    </div>

    <article>
    <p>One of the great things about building something that has never been attempted before, like Birdwatch, is that we genuinely do not know what shape the final product will take, or what features are necessary for it to be successful. Our approach has been one of constant curiosity and learning, and introducing Aliases was one example where we significantly changed the product based on the community's and expert's feedback.</p>

    <p>Initially, we hypothesized that crowdsourced notes would be more credible if they were linked to the author's Twitter account. After a year of observing, talking to our pilot contributors, and consulting experts, we learned that a significant portion of people felt uneasy about contributing under their names. This concern was stronger among women and black contributors.</p>

    <p>In addition to that, in the same year that Birdwatch launched, Chris Bail launched a book in which he finds that online pseudonymity can help prevent polarization, by allowing people to cross partisan lines and share "middle ground" or even opposing views that they wouldn't feel comfortable sharing under their identities due to peer pressure.</p>

    <p>One of the great things about building something that has never been attempted before, like Birdwatch, is that we genuinely do not know what shape the final product will take, or what features are necessary for it to be successful. Our approach has been one of constant curiosity and learning, and introducing Aliases was one example where we significantly changed the product based on the community's and expert's feedback.</p>

    <p>Initially, we hypothesized that crowdsourced notes would be more credible if they were linked to the author's Twitter account. After a year of observing, talking to our pilot contributors, and consulting experts, we learned that a significant portion of people felt uneasy about contributing under their names. This concern was stronger among women and black contributors.</p>

    <p>In addition to that, in the same year that Birdwatch launched, Chris Bail launched a book in which he finds that online pseudonymity can help prevent polarization, by allowing people to cross partisan lines and share "middle ground" or even opposing views that they wouldn't feel comfortable sharing under their identities due to peer pressure.</p>
    </article>

    </Grid>
    </Grid>
    </Container>

    </div>

    <Container>
    <Grid container spacing={gutter}>
    <Grid item lg={2} />
    <Grid item lg={8}>

    <section className="related">
    <p className="section-title">Related</p>
    </section>

    </Grid>
    </Grid>
    </Container>

    </Layout>
  )

}

export default Post