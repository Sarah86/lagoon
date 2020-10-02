import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ContatoSection from "../sections/contatoSection"
import ParallaxBannerLagoon from "../components/parallaxBannerLagoon"
import EstruturaSection from "../sections/estruturaSection"
import EstruturaGallerySection from "../sections/estruturaGallerySection"

const IndexPage = () => (
    <Layout>
      <SEO title="Terraço Lagoon" />
      <VideoSection/>
      <AboutSection/>
      <GallerySection/>
      <EstruturaSection/>
      <EstruturaGallerySection/>
      <ParallaxBannerLagoon imgName="17.jpg"/>
      <ContatoSection/>
      <ParallaxBannerLagoon imgName="16.jpg"/>
    </Layout>
)

export default IndexPage
