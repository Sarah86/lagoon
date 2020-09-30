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
    file(name: {eq: "video-lagoon-thumbnail-01"}) {
      childImageSharp {
        fluid(quality: 90, jpegProgressive: true, maxWidth: 1400) {
          srcWebp
          src
        }
      }
    }
  }
`)

const PlayButton = () => (
  <>
  <img style={{maxWidth:'150px'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMwLjA1MSAzMC4wNTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTE5Ljk4MiwxNC40MzhsLTYuMjQtNC41MzZjLTAuMjI5LTAuMTY2LTAuNTMzLTAuMTkxLTAuNzg0LTAuMDYyYy0wLjI1MywwLjEyOC0wLjQxMSwwLjM4OC0wLjQxMSwwLjY2OXY5LjA2OSAgIGMwLDAuMjg0LDAuMTU4LDAuNTQzLDAuNDExLDAuNjcxYzAuMTA3LDAuMDU0LDAuMjI0LDAuMDgxLDAuMzQyLDAuMDgxYzAuMTU0LDAsMC4zMS0wLjA0OSwwLjQ0Mi0wLjE0Nmw2LjI0LTQuNTMyICAgYzAuMTk3LTAuMTQ1LDAuMzEyLTAuMzY5LDAuMzEyLTAuNjA3QzIwLjI5NSwxNC44MDMsMjAuMTc3LDE0LjU4LDE5Ljk4MiwxNC40Mzh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8cGF0aCBkPSJNMTUuMDI2LDAuMDAyQzYuNzI2LDAuMDAyLDAsNi43MjgsMCwxNS4wMjhjMCw4LjI5Nyw2LjcyNiwxNS4wMjEsMTUuMDI2LDE1LjAyMWM4LjI5OCwwLDE1LjAyNS02LjcyNSwxNS4wMjUtMTUuMDIxICAgQzMwLjA1Miw2LjcyOCwyMy4zMjQsMC4wMDIsMTUuMDI2LDAuMDAyeiBNMTUuMDI2LDI3LjU0MmMtNi45MTIsMC0xMi41MTYtNS42MDEtMTIuNTE2LTEyLjUxNGMwLTYuOTEsNS42MDQtMTIuNTE4LDEyLjUxNi0xMi41MTggICBjNi45MTEsMCwxMi41MTQsNS42MDcsMTIuNTE0LDEyLjUxOEMyNy41NDEsMjEuOTQxLDIxLjkzNywyNy41NDIsMTUuMDI2LDI3LjU0MnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
  </>
)  

  return(
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
      light={data.file.childImageSharp.fluid.src}
      playing 
      width={width} 
      height={height}
      playIcon={<PlayButton/>}
      />
  </div>
) 
}




export default Video