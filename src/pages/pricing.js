import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import '../styles/ServicesPage/mainStyles.css';
import Pricing from '../components/tailwindComps/Pricing'

const ServicePage = () => (

  <Layout title="Pricing" text="Affordable packages with upfront costs and no monthly costs" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Pricing" />
    <Pricing />

  </Layout>
)
export default ServicePage