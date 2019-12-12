import React, { Component } from 'react'
import Title from "../globals/Title"
import Img from "gatsby-image"

export default class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:props.items.edges,
            beers:props.items.edges
        }
    }
    render() {
        if(this.state.items.length > 0){
        }
        return (
            <div>
              content from beer component  
            </div>
        )
    }
}
