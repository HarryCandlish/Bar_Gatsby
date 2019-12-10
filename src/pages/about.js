import React from "react"
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"
import BackgroundSection from '../components/globals/BackgroundSection'
import SEO from "../components/seo"
import Info from "../components/home/Info"

// import {FaShoppingCart} from 'react-icons/fa'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keyworsds={[`gatsby`, `application`, `react`]}/>
    <BackgroundSection img={data.img.childImageSharp.fluid} styleClass="about-background"/>
    <Info/>
    {/* <FaShoppingCart/> */}
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"thebar.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default AboutPage
