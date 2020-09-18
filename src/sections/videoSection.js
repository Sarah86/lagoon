import React from "react"
import Video from "../components/bgvideo"
import FullWidth from "../components/fullWidth"
import styled from "styled-components"
import { device } from "../components/devices.js"

const StyledSection = styled.div`
    height: calc(100vh - 40px);
    position: relative;
    @media ${device.largeDesktop}{
        margin-top: 75px;
    }
`

const VideoSection = () => (

    <StyledSection id="home" className="bg-white z-index-1">
        <FullWidth style={{height: '100%'}}>
            <Video 
                url="https://youtu.be/S4cVfwV4Wqw" 
                width="100vw" 
                height="100%"
                backgroundColor=" rgba(0, 0, 0, 0.3)" />
        </FullWidth>
    </StyledSection>
)

export default VideoSection