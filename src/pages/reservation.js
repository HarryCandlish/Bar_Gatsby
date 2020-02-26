import React from "react"

import Layout from "../components/layout"
import Form from "../components/home/Form"
import SEO from "../components/seo"


const Reservation = () => (
  <Layout>
        <SEO title="Home" keyworsds={[`gatsby`, `application`, `react`]}/>
        <Form/>
  </Layout>
)


export default Reservation
