import { useStaticQuery, graphql } from "gatsby"

export const Parceiros = () => {
    
    const {parceiros} = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "parceiros"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 100, traceSVG: {color: "#40b5e8"}) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  `)
  return parceiros.edges.node.childImageSharp.fluid}