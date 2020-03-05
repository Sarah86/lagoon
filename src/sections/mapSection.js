import React, { useState, useCallback } from "react"
import Gallery from 'react-photo-gallery'
import { useStaticQuery, graphql } from "gatsby"
import Carousel, { Modal, ModalGateway } from "react-images";
import Fade from 'react-reveal/Fade';

const MapSection = () => {


    return (
        <Fade delay={1000} duration={2000}>
            <section className="vc_row pt-40 pb-40">
                <div className="container">
                    <h2 className="mt-0 mb-3">Onde estamos</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2838087112373!2d-43.22054148388227!3d-22.976588884976323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59f0392569d%3A0x816dbf880e8da697!2sComplexo%20Lagoon!5e0!3m2!1spt-BR!2sbr!4v1582766550481!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen=""></iframe>
                </div>
            </section>
        </Fade>
    )

}

export default MapSection