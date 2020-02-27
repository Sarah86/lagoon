import React from 'react'
import GatsbyImage from 'gatsby-image';
import { useStaticQuery } from 'gatsby';

const ParceirosSection = () => {

    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "parceiros"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
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
            <div key={`parceiro-${i}`} className="lqd-column col-md-2 col-sm-6 text-center border-athens-gray d-flex flex-wrap align-items-center justify-content-center">
                <figure className="pt-50 pb-50 w-80">
                    <GatsbyImage fluid={logoParceiro} alt="Client" />
                </figure>
             </div>
        )
    
    })

    return (
        <section className="vc_row pt-110 pb-55">
        <div className="container">
        <h2 className="mt-0 mb-3">Nossos parceiros</h2>
            <div className="d-flex flex-wrap align-items-stretch">
             <LogosParceiros/>
            </div>
        </div>
        </section>

    )
}

export default ParceirosSection;