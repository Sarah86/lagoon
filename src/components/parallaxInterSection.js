import React, { useEffect } from "react"
import { Parallax, useController, withController, ParallaxContext } from 'react-scroll-parallax'
import Image from "./image";

const ParallaxImage = ({imgName}) => {
    const context = React.useContext(ParallaxContext)
        
    useEffect(() => {
        if (context) {
            const { parallaxController } = useController();

            window.requestAnimationFrame(() => {
                parallaxController.update()
            })
        } 
    },[context])

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
            />
    </Parallax>
)};

export default withController(ParallaxImage); 