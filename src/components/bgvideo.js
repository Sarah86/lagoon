import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import Cover from "../images/thumb-video-home-1.jpg"

const FullWidthBackgroundVideo = styled(ReactPlayer)`
  position: absolute;
  }
  video {
    object-fit: cover;
  }
`

const Video = ({ url, width, height, backgroundColor }) => (
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
      backgroundColor={backgroundColor}/>
  </div>
) 

export default Video