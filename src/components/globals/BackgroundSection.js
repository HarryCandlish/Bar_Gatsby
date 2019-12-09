import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({img, styleClass, title, children}) {
    return (
        
            <BackgroundImage className={styleClass} fluid={img}/>
       
    )
}

BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}