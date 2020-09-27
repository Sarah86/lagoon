import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const FullWidthBackgroundVideo = styled(ReactPlayer)`
  position: absolute;
  }
  video {
    object-fit: cover;
  }
`

const Video = ({ url, width, height }) => {
  
  const data = useStaticQuery(graphql`
  query parallaxBackgrounds{
    file(name: {eq: "video-lagoon"}) {
      childImageSharp {
        fluid(quality: 90, jpegProgressive: true, maxWidth: 1400) {
          srcWebp
          src
        }
      }
    }
  }
`)

  return(
  <div style={{ marginTop: '-1em' }}>
    <FullWidthBackgroundVideo
      url={url}   gat
      config={{
        youtube: {
          playerVars: { 
            modestbranding: 1
          }
        }
       }}
      loop 
      light={data.file.childImageSharp.fluid.src}
      playing 
      width={width} 
      height={height} 
      />
  </div>
) 
}




export default Video