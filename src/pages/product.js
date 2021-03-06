import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import '../styles/ServicesPage/mainStyles.css';
import ProductBenefit from "../components/tailwindComps/ProductBenefit";
import FAQ from '../components/tailwindComps/FAQs'
import CTA from '../components/tailwindComps/CTA'
const ServicePage = () => (

  <Layout title="Product" text="See all our offerings and how they can help your business get more sales" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Product" />
    <ProductBenefit />
    <FAQ />
    <CTA />


  </Layout>
)
export default ServicePage