import React from "react"
import {Link, graphql} from 'gatsby'



// import Layout from "../components/layout"
// import BackgroundSection from '../components/globals/BackgroundSection'
import SEO from "../components/seo"
import Info from "../components/home/Info"
import Beer from "../components/home/Beer"
import Food from "../components/home/Food"
import Events from "../components/home/Events"
import Footer from "../components/globals/Footer"


// import {FaShoppingCart} from 'react-icons/fa'

const IndexPage = ({data}) => (
 <div>
    <Info/>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <Beer items={data.beer}/>
    <Food />
    <Events/>
    <Footer/>
  </div>

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
          fixed(width:200,height:200){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
