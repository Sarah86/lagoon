import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const FullWidthBackgroundVideo = styled(ReactPlayer)`
  position: absolute;
  z-index: -1;
  :after {
    content: '';
    background-color: rgba(0, 0, 0, 0.8);
    background-color: ${props => props.backgroundColor};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  video {
    object-fit: cover;
  }
`

const Video = ({ url, width, height, backgroundColor }) => (
  <div style={{ marginTop: '-1em' }}>
    <FullWidthBackgroundVideo
      url={url} 
      muted 
      loop 
      light
      // playing 
      width={width} 
      height={height} 
      backgroundColor={backgroundColor}/>
  </div>
) 

export default Video