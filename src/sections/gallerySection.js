import React, { useState, useCallback } from "react"
import Gallery from 'react-photo-gallery'
import { useStaticQuery, graphql } from "gatsby"
import Carousel, { Modal, ModalGateway } from "react-images"
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import SectionTitle from "../components/sectionTitle"
import Section from "../components/section"

const StyledDiv = styled.div`
    margin: 0 -2.5em;  
`

const CustomModalFooter = ({ currentIndex, views }) => {
	const activeView = currentIndex + 1
	const totalViews = views.length

	if (!activeView || !totalViews) return null
	return (
		<span>
			{activeView} de {totalViews}
		</span>
	)
}

const GallerySection = () => {

    const data = useStaticQuery(graphql`
    query galleryImages {
        allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                  childImageSharp {
                    fluid(quality: 90) {
                      src
                      srcWebp
                    }
                    original {
                      height
                      width
                    }
                  }
               } 
            }
        }
    }
  `);

  function targetRowHeight(containerWidth) {
    let targetRowHeight = 100;
    if (containerWidth >= 500) targetRowHeight = 200;
    if (containerWidth >= 900) targetRowHeight = 300;
    if (containerWidth >= 1500) targetRowHeight = 350;
    return targetRowHeight;
  }

    const photos = data.allFile.edges.map((file, index) => {
        const galleryImage = file.node.childImageSharp;
        return (
            {
                src: galleryImage.fluid.src,
                srcSet: galleryImage.fluid.srcSet,
                width: galleryImage.original.width,
                height: galleryImage.original.height,
                key: `${index}`,
            }
        )
        
    });

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Section id="galeria" noPaddingBottom>
            <div className="container w-100">
                <StyledDiv>
                    <Gallery
                        targetRowHeight={targetRowHeight}
                        photos={photos}
                        onClick={openLightbox}
                        margin={.5}
                    />
                </StyledDiv>
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            components={{ FooterCount: CustomModalFooter }}
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Section>
    )

}

export default GallerySection