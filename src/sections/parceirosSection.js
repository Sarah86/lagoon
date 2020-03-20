import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import {device} from "../components/devices.js"
import SectionTitle from '../components/sectionTitle'
import Section from "../components/section"


const StyledDiv = styled.div`
    margin: 0 -2em;
`

const StyledFigure = styled.div`
    width: 100%;
    padding: 1em;
    .gatsby-image-wrapper {
        max-height: 3em;
    }
    @media ${device.desktop}{
        padding: 2.5em
    }
`


const ParceirosSection = () => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "parceiros"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 100, traceSVG: {color: "#40b5e8"}) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
  `)

    const LogosParceiros = () => data.allFile.edges.map((file, i) => {
    const logoParceiro = file.node.childImageSharp.fluid;
  
        return (
            <Fade cascade duration={2000}>
                <div key={`parceiro-${i}`} className="lqd-column col-md-2 col-sm-3 col-xs-4 text-center d-flex flex-wrap align-items-center justify-content-center">
                    <StyledFigure>
                        <GatsbyImage fluid={logoParceiro} alt="Parceiros" fadeIn durationFadeIn={1000} style={{filter: 'grayscale(1) opacity(.8'}} imgStyle={{objectFit: 'contain'}}/>
                    </StyledFigure>
                </div>
            </Fade>
        )
    
    })

    return (
        <Section id="quem-confia">
        <div className="container">
        <Fade duration={2000}>
            <SectionTitle title="Clientes e Parceiros" subtitle="Confira as marcas que realizam seus eventos no Terraço Lagoon"/>
        </Fade>
        </div>
        <div className="container w-100">
            <StyledDiv className="d-flex flex-wrap align-items-stretch">
                <LogosParceiros/>
            </StyledDiv>
        </div>
        </Section>

    )
}

export default ParceirosSection;