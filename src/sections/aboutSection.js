import React from "react"
import Fade from 'react-reveal/Fade'
import styled from "styled-components"

import { device } from "../components/devices"
import Image from "../components/image"
import SectionTitle from "../components/sectionTitle"
import Section from "../components/section"


const StyledImage = styled(Image)`
    margin: 0 -10vw;
    @media ${device.tablet}{
    margin: auto;
    }
`

const AboutSection = () => (
    <Section id="sobre">
        <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
            <Fade duration={2000}>
                <div className="lqd-column col-sm-5 mb-30">
                    <SectionTitle title="Terraço Lagoon" subtitle="Quality tours crafted by local experts."/>
                    <p> We have a selection of over 50 tour programs that range from introductory multi-country itineraries to more regional in-depth options.</p>
                    <br />
                    <p>You’re about to go on the most amazing journey! Welcome to one of Europe’s leading coach tour operators, Ave Tour.</p>
                    <br />
                    <h3 className="btn-txt btn btn-naked font-weight-bold text-uppercase">
                            Ficha técnica
                    </h3>
                    <ul>
                                <li>420m2</li>
                                <li>Estacionamento conveniado</li>
                                <li>Area de fumantes</li>
                                <li>Item 1</li>
                                <li>Item 1</li>
                            </ul>
                </div>{/* /.lqd-column col-md-5 */}
            </Fade>
            <Fade delay={1000} duration={2000}>
                <div className="lqd-column col-sm-6 col-sm-offset-1 text-center mb-30">
                    <StyledImage imgName="mapa.jpg"/>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </Fade>
            </div>{/* /.row */}
        </div>{/* /.container */}
    </Section>


)

export default AboutSection