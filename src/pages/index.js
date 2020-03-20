import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ParceirosSection from "../sections/parceirosSection"
import ContatoSection from "../sections/contatoSection"
import ParallaxImage from "../components/parallaxEffect"
import ParallaxCache from "../components/parallaxCache"
import ParallaxEffect from "../components/parallaxEffect"

const IndexPage = () => (
    <Layout>
      <SEO title="Espaço Lagoon" />
      <VideoSection/>
      <AboutSection/>
        <ParallaxEffect imgName="Lagoon-04.JPG"/>
        <ParceirosSection/>
        <ParallaxEffect imgName="Lagoon-08.JPG"/>
        <GallerySection/>
        <ParallaxEffect imgName="Lagoon-06.JPG"/>
        <ContatoSection/>
    </Layout>
)

export default IndexPage
