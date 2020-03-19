import React from "react"
import { Link } from "gatsby"
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ParceirosSection from "../sections/parceirosSection"
import MapSection from "../sections/mapSection"
import ContatoSection from "../sections/contatoSection"
import ParallaxImage from "../components/parallaxInterSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoSection/>
    <AboutSection/>
    <ParallaxProvider>
      <ParallaxImage imgName="Lagoon-04.JPG"/>
      <ParceirosSection/>
      <ParallaxImage imgName="Lagoon-08.JPG"/>
      <GallerySection/>
      <ParallaxImage imgName="Lagoon-06.JPG"/>
      <ContatoSection/>
    </ParallaxProvider>
  </Layout>
)

export default IndexPage
