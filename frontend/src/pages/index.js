import React from "react"
import "../assets/main.css"

import HomePage from "./home"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Header />
    <HomePage />
    <Footer />
  </React.Fragment>
)

export default IndexPage
