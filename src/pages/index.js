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
import BathSection from "../sections/bathSection"
import HightlightSection from "../sections/highlightSection"
import BarGallerySection from "../sections/barGallerySection"
import ExternaGallerySetion from "../sections/eternaGallerySection"

const IndexPage = () => (
    <Layout>
      <SEO title="Terraço Lagoon" />
      <VideoSection/>
      <AboutSection/>
      <GallerySection/>
      <EstruturaSection/>
      <EstruturaGallerySection/>
      <BarGallerySection/>
      <ExternaGallerySetion/>
      <BathSection/>
      <HightlightSection/>
      <ParallaxBannerLagoon imgName="parallax-01.jpg"/>
      <ContatoSection/>
      <ParallaxBannerLagoon imgName="parallax-02.jpg"/>
    </Layout>
)

export default IndexPage
