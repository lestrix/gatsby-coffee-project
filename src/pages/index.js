import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our Mondwolke Online Shop!.</p>
    <p>Go grab some nice Tees now!.</p>
    <p>
      <FaGulp />
    </p>
  </Layout>
)

export default IndexPage
