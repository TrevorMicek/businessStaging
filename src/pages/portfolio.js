import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import Portfolio from '../components/tailwindComps/PortfolioPage'
import Gradient from '../components/commonComps/Gradient'
const IndexPage = () => {

  return (
  <Layout title="Portfolio" tex="Check out our work" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Portfolio" />

    <Portfolio />


  </Layout>
  )
}
export default IndexPage
