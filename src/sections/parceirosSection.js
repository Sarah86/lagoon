import React from 'react'
import GatsbyImage from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';


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
                <div key={`parceiro-${i}`} className="lqd-column col-md-2 col-sm-6 col-xs-4 text-center border-athens-gray d-flex flex-wrap align-items-center justify-content-center">
                    <figure className="pt-50 pb-50 w-80">
                        <GatsbyImage fluid={logoParceiro} alt="Client" fadeIn durationFadeIn={1000} />
                    </figure>
                </div>
            </Fade>
        )
    
    })

    return (
        <section className="vc_row pt-110 pb-55">
        <div className="container">
        <Fade delay={1000} duration={2000}>
            <h2 className="mt-0 mb-3">Quem Confia</h2>
        </Fade>
            <div className="d-flex flex-wrap align-items-stretch">
            <LogosParceiros/>
            </div>
        </div>
        </section>

    )
}

export default ParceirosSection;