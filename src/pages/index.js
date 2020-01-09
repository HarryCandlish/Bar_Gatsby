import React from "react"
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"
import BackgroundSection from '../components/globals/BackgroundSection'
import SEO from "../components/seo"
import Info from "../components/home/Info"
import Beer from "../components/home/Beer"
import Menu from "../components/home/Menu"

// import {FaShoppingCart} from 'react-icons/fa'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <BackgroundSection img={data.img.childImageSharp.fluid}/>
    <Info/>
    {/* <FaShoppingCart/> */}
    <Beer items={data.beer}/>
    <Menu />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"heyday.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  beer:allContentfulBeer{
    edges{
      node{
        id
        title
        type
        price
        pouring
        description
      	tag {
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
