import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import Image from './image'

import { withController} from 'react-scroll-parallax';



const ParallaxBannerLagoon = (props) => {

    const handleLoad = () => {
        // updates cached values after image dimensions have loaded
        props.parallaxController.update();
    };

    return(
        <ParallaxBanner
            layers={[
                {
                    children:  
                    <Image
                    onLoad={handleLoad}
                    imgName={props.imgName} 
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


export default withController(ParallaxBannerLagoon)