import React from "react"
import { Parallax, useController } from 'react-scroll-parallax'
import Image from "./image";

const ParallaxImage = ({imgName}) => {
    
    const { parallaxController } = useController();
    
    const handleLoad = () => {
        parallaxController.update();
    }

    return(
    <Parallax 
        y={[-50, 50]} 
        tagOuter="div" 
        styleInner={{height: '100vh'}} 
        styleOuter={{height: '100vh'}}>
        <Image 
            imgName={imgName} 
            style={{backgroundColor: 'var(--color-secondary)', height: '100vh'}} 
            imgStyle={{mixBlendMode: 'overlay', filter: 'brightness(.8) grayscale(1)'}} 
            title="Espaço Lagoon" 
            alt="Espaço Lagoon"
            onLoad={handleLoad}/>
    </Parallax>
)};

export default ParallaxImage; 