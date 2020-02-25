import React from "react"
import Image from "../components/image"
import Video from "../components/bgvideo"
import FullWidth from "../components/fullWidth"
import styled from "styled-components"

const StyledSection = styled.div`
    height: calc(100vh - 90px);
    position: relative;
`

const VideoSection = () => (
   
   <StyledSection>
        <FullWidth>
            <Video url="https://www.youtube.com/watch?v=xYQEvhvDHUU" width="100vw" height="100%" backgroundColor=" rgba(0, 0, 0, 0.3)"/>
        </FullWidth>
    </StyledSection>
)

export default VideoSection