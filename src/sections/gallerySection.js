import React, { useState, useCallback } from "react"
import Gallery from 'react-photo-gallery'
import { useStaticQuery, graphql } from "gatsby"
import Carousel, { Modal, ModalGateway } from "react-images";
import Fade from 'react-reveal/Fade';

const GallerySection = () => {

    const data = useStaticQuery(graphql`
    {
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

    const photos = data.allFile.edges.map((file, index) => {
        const galleryImage = file.node.childImageSharp;
        return (
            {
                src: galleryImage.fluid.src,
                srcset: galleryImage.fluid.srcSet,
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

    function targetRowHeight(containerWidth) {
        let targetRowHeight = 100;
        if (containerWidth >= 500) targetRowHeight = 200;
        if (containerWidth >= 900) targetRowHeight = 250;
        if (containerWidth >= 1500) targetRowHeight = 350;
        return targetRowHeight;
      }

    return (
        <section className="vc_row pt-40 pb-40">
            <div className="container">
            <Fade delay={1000} duration={2000}>
                <h2 className="mt-0 mb-3">Galeria</h2>
            </Fade>
            <Fade delay={1000} duration={2000}>
                <Gallery
                    targetRowHeight={targetRowHeight}
                    photos={photos}
                    onClick={openLightbox}
                />
            </Fade>
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    )

}

export default GallerySection