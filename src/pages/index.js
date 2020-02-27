import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideoSection from "../sections/videoSection"
import AboutSection from "../sections/aboutSection"
import GallerySection from "../sections/gallerySection"
import ParceirosSection from "../sections/parceirosSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoSection/>
    <AboutSection/>
    <GallerySection/>
    <ParceirosSection/>
  </Layout>
)

export default IndexPage
