import React, { useContext } from "react"
import { Parallax } from 'react-scroll-parallax';

import Image from "./image";


const ParallaxImage = ({imgName}) => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image 
         imgName={imgName} 
            style={{
                backgroundColor: 'var(--color-secondary)', 
                height: '100vh'}} 
            imgStyle={{
                mixBlendMode: 'overlay', 
                filter: 'brightness(.8) grayscale(1)'}} 
            title="Espaço Lagoon" 
            alt="Espaço Lagoon" />
    </Parallax>
);

export default ParallaxImage;