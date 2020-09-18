import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import Image from './image'

const ParallaxBannerLagoon = ({imgName}) => {

    return(
        <ParallaxBanner
            layers={[
                {
                    children:  
                    <Image
                    imgName={imgName} 
                        style={{
                            backgroundColor: 'var(--color-secondary)', 
                            height: '100%'}} 
                        imgStyle={{
                            mixBlendMode: 'overlay', 
                            filter: 'brightness(.8) grayscale(1)'}} 
                        title="Espaço Lagoon" 
                        alt="Espaço Lagoon" />,
                    amount: 0.3,
                }
            ]}
            style={{
                height: '100vh',
            }}>
        </ParallaxBanner>
    )
}


export default ParallaxBannerLagoon