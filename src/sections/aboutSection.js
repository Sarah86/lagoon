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
                    <SectionTitle title="Terraço Lagoon" subtitle="Seu evento sob o cristo redentor e de frente para a Lagoa."/>
                    <p> Bem vindo ao Terraço Lagoon. Agora o Rio de Janeiro tem uma moderna, completa e versátil opção de locação para a realização de eventos das mais diversas naturezas.</p>
                    <br />
                    <p>Tudo isso no coração da área nobre da cidade, cercado de suas belezas naturais, sob os braços do Cristo Redentor e de frente para um dos espelhos d’água mais icônicos da cidade: a Lagoa Rodrigo de Freitas.</p>
                    <p>Aqui entra um parágrafo falando da parte técnica, serviços inclusos, facilidades e etc.</p>
                    <p>Estamos à sua disposição para receber o seu evento. Entre em contato e faça agora mesmo a sua reserva.</p>
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