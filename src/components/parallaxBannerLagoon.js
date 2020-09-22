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
                            height: '100%'}} 
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