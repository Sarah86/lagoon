import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 0 -2em;
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
            <Fade cascade delay={1000} duration={2000}>
                <div key={`parceiro-${i}`} className="lqd-column col-md-2 col-sm-3 col-xs-4 text-center d-flex flex-wrap align-items-center justify-content-center">
                    <figure className="p-5 w-100">
                        <GatsbyImage fluid={logoParceiro} alt="Parceiros" fadeIn durationFadeIn={1000} style={{filter: 'grayscale(1) opacity(.8'}} />
                    </figure>
                </div>
            </Fade>
        )
    
    })

    return (
        <section className="vc_row pt-50 pb-50" id="quem-confia">
        <div className="container">
        <Fade delay={1000} duration={2000}>
            <h2 className="mt-0 mb-3">Quem Confia</h2>
            <h3 className="mt-0 mb-40 font-size-14 text-uppercase ltr-sp-05 text-secondary">Quality tours crafted by local experts.</h3>
                    <div className="lqd-h-sep w-10 mb-40">
                        <span className="lqd-h-sep-inner" />{/* /.lqd-h-sep-inner */}
                    </div>{/* /.lqd-h-sep */}
        </Fade>
        </div>
        <div className="container w-100">
            <StyledDiv className="d-flex flex-wrap align-items-stretch">
                <LogosParceiros/>
            </StyledDiv>
        </div>
        </section>

    )
}

export default ParceirosSection;