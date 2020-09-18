import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import Cover from "../images/Video-Cover-tinyfied.jpg"

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
            showinfo: 0,
            modestbranding: 1
          }
        }
       }}
      muted 
      loop 
      light={Cover}
      //playing 
      width={width} 
      height={height} 
      backgroundColor={backgroundColor}/>
  </div>
) 

export default Video