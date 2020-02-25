import React, { useState, useCallback } from "react"
import Gallery from 'react-photo-gallery'
import { useStaticQuery, graphql } from "gatsby"
import Carousel, { Modal, ModalGateway } from "react-images";

const GallerySection = () => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                    childImageSharp {
                        original {
                            width
                            height
                            src
                        }
                    }
                }
            }
        }
    }
  `);

    const photos = data.allFile.edges.map((file, index) => {
        const galleryImage = file.node.childImageSharp.original;
        return (
            {
                src: galleryImage.src,
                width: galleryImage.width,
                height: galleryImage.height,
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
        <section className="vc_row pt-40 pb-40">
            <h2 className="mt-0 mb-3">Galeria</h2>
            <Gallery
                photos={photos}
                onClick={openLightbox}
            />
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
        </section>
    )

}

export default GallerySection