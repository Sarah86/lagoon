import React from "react"
import { withController } from 'react-scroll-parallax';

import Image from "./image";

const ParallaxImage = ({ imgName }) => {

    const handleLoad = () => {
        // updates cached values after image dimensions have loaded
        parallaxController.update();
    };

    return(
        <Image 
            imgName={imgName} 
            style={{
                backgroundColor: 'var(--color-secondary)', 
                height: '100vh'}} 
            imgStyle={{
                mixBlendMode: 'overlay', 
                filter: 'brightness(.8) grayscale(1)'}} 
            title="Espaço Lagoon" 
            alt="Espaço Lagoon"
            onLoad={handleLoad}/>
    )
    
}

export default withController(ParallaxImage)