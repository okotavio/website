import React, { Component, useState, createRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ScrollContainer from 'react-indiana-drag-scroll'
import Thumb from "../components/thumb"
import Container from "../components/container"
import Grid from '@mui/material/Grid'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill();

const getCategories = items => {
    let categoryItems = items.map(item => {
      return item.node.frontmatter.category
    })
    let uniqueCategories = new Set(categoryItems)
    let categories = Array.from(uniqueCategories)
    categories = ["All", ...categories]
    return categories
  }

class BlogItems extends Component {
    state = {
        items: this.props.items.allMdx.edges,
        blogPostItems: this.props.items.allMdx.edges,
        categories: getCategories(this.props.items.allMdx.edges),
        selectedItem: getCategories(this.props.items.allMdx.edges) && getCategories(this.props.items.allMdx.edges)[0],

      }
      handleItems = category => {
        if (category === "All") {
          this.setState({
            blogPostItems: [...this.state.items],
            selectedItem: category,
          })
        } else {
          this.setState({
            blogPostItems: [
              ...this.state.items.filter(edge => {
                return edge.node.frontmatter.category === category
              }),
            ],
            selectedItem: category,
          })
        }
      }

      constructor(props) {
        super(props);
        this.scrollDiv = createRef();
      }

      
  render() {

    const gutter = 5

    return (
      <div className="feed" ref={this.scrollDiv}>
      <div className="blurry-sticky" id="main">
      <Container>
      <Grid container spacing={gutter}>
      <Grid item lg={2} md={0} />
      <Grid item lg={8} md={12} sm={12} xs={12}>
      <ScrollContainer className="feed-filters" horizontal>
      <div className="feed-items">
        {this.state.categories.map((category, index) => {
            return (
                <div onClick={() => {
                  this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
                }}>
                <button
                type="button"
                key={index}
                onClick={() => this.handleItems(category)}
                className={
                  this.state.selectedItem === category ? 'feed-button-active' : 'feed-button'
                }
              >
                {category}
              </button>
              </div>
            )
        })}
      </div>
      </ScrollContainer>
      </Grid>
      </Grid>
      </Container>
      </div>
      <Container>
      <Grid container spacing={gutter}>
      <Grid item lg={2} md={0} />
      <Grid item lg={8} md={12} sm={12} xs={12}>
        <ul className="feed-thumb">
        {this.state.blogPostItems.map(edge => {
          return (
            <li key={edge.node.id}>
            
            <Thumb url={`/stories/${edge.node.slug}`} img={edge.node.frontmatter.image.childImageSharp.gatsbyImageData} date={edge.node.frontmatter.date} title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.subtitle} key={edge.node.id}/>
              
            </li>
          )
        })}
      </ul>
      </Grid>
      </Grid>
      </Container>
      </div>
    )
  }
}

export default BlogItems