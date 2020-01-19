import React from "react"

import Layout from "../components/layout"
import Reservation from "../components/home/Form"
import SEO from "../components/seo"


const Reservation = () => (
  <Layout>
        <SEO title="Home" keyworsds={[`gatsby`, `application`, `react`]}/>
        <Reservation/>
  </Layout>
)


export default Reservation
