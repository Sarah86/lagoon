import React from "react"
import { Parallax } from 'react-scroll-parallax'
import ParallaxImage from "./parallaxImage";

const ParallaxEffect = (props) => {
    
    return(
    <Parallax 
        y={[-50, 50]} 
        tagOuter="div" 
        styleInner={{height: '100vh'}} 
        styleOuter={{height: '100vh'}}>
        <ParallaxImage {...props}/>
    </Parallax>
)};

export default ParallaxEffect