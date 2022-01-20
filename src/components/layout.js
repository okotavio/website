import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import "../styles.scss"

export default function Layout({ children, pageTitle, image, description }) {

  return (
    <>
    <Helmet>
      <title>{pageTitle} ✺ Otávio Vidal</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={pageTitle}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" itemProp="image" content={image !== undefined ? image : `og.png`}/>
      <meta property="og:type" content="website"/>
    </Helmet>
        <Header />
          {children}
        <Footer />
    </>
  )
  
}