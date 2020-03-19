import React, { Component } from 'react'
import Img from "gatsby-image"

import beerStyles from '../../modules/beers.module.scss'

export default class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:props.items.edges,
            beers:props.items.edges
        }
    }
    render() {
        if (this.state.items.length > 0){
        return (
          <div>
          <section className={beerStyles.beers}>
          <div className={beerStyles.container}>
            <div className={beerStyles.titleHeading}>
                <h3 name="beer">ALL OUR BEERS ARE HANDCRAFTED IN HOUSE</h3>
                <h1 name="">BEERS ON TAP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            </div>
            </div>
            <div className={beerStyles.grid}>
                    {this.state.beers.map(({node}) => {
                        if (node.pouring === true){
                        return(
                            <div className={`${beerStyles.gridItem} ${beerStyles.craftBeer}`} key={node.id}>
                
                                  <Img className={`${beerStyles.image} ${beerStyles.campass}`} fixed={node.tag.fixed}/>
                                  <h6>{node.title}</h6>
                                  <p>{node.description}</p>
                            </div>
                          );
        }})}
                  </div>
       </section>
  </div>
      )}  
    }
}
