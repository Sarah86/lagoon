import React from "react"
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ParceirosSection from "../sections/parceirosSection"
import ContatoSection from "../sections/contatoSection"
import ParallaxBannerLagoon from "../components/parallaxBannerLagoon"

const IndexPage = () => (
    <Layout>
      <SEO title="Espaço Lagoon" />
      <VideoSection/>
      <AboutSection/>
      <ParallaxBannerLagoon imgName="1.png"/>
      <GallerySection/>
      <ParallaxBannerLagoon imgName="17.jpg"/>
      <ContatoSection/>
      <ParallaxBannerLagoon imgName="16.jpg"/>
    </Layout>
)

export default IndexPage
