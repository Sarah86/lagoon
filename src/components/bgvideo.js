import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import Cover from "../images/thumb-video-home-1.webp"

const FullWidthBackgroundVideo = styled(ReactPlayer)`
  position: absolute;
  }
  video {
    object-fit: cover;
  }
`

const Video = ({ url, width, height, backgroundcolor }) => (
  <div style={{ marginTop: '-1em' }}>
    <FullWidthBackgroundVideo
      url={url} 
      config={{
        youtube: {
          playerVars: { 
            modestbranding: 1
          }
        }
       }}
      loop 
      light={Cover}
      playing 
      width={width} 
      height={height} 
      />
  </div>
) 

export default Video