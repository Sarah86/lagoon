import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ParceirosSection from "../sections/parceirosSection"
import ContatoSection from "../sections/contatoSection"
import ParallaxApp from "../components/parallaxInterSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoSection/>
    <AboutSection/>
      <ParallaxApp imgName="Lagoon-04.JPG"/>
      <ParceirosSection/>
      <ParallaxApp imgName="Lagoon-08.JPG"/>
      <GallerySection/>
      <ParallaxApp imgName="Lagoon-06.JPG"/>
      <ContatoSection/>
  </Layout>
)

export default IndexPage
