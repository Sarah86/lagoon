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
            <div className="row d-flex flex-wrap align-items-stretch">
            <Fade duration={2000}>
                <div className="lqd-column col-sm-5 mb-30">
                    <SectionTitle title="Terraço Lagoon" subtitle="Seu evento sob o cristo redentor e de frente para a Lagoa."/>
                    <p>
                        Localizado em um dos mais belos cartões-postais da Cidade Maravilhosa, dentro do Complexo Lagoon no Estádio de Remo da Lagoa, o TERRAÇO LAGOON apresenta o que existe de mais moderno em espaço para eventos. Projetado com uma grande tenda em arco importada da Alemanha, montada no Bloco II elevado às margens da Lagoa Rodrigo de Freitas, o espaço múltiplo foi projetado para receber os mais variados tipos de eventos. Desde corporativos, passando por sociais, até festas abertas ao público.<br />
                        <br />
                        Ocupando área de mais de 2.300m2 com vista panorâmica para o espelho d'água da Lagoa, o TERRAÇO LAGOON que tem ainda a paisagem do Cristo Redentor como cenário, conta com espaço indoor e outdoor com belo paisagismo e decoração. Sua localização é central na zona sul da cidade, estando situado no bairro do Leblon, início da via Lagoa-Barra. <br />
                    </p>
                
                </div>{/* /.lqd-column col-md-5 */}
            </Fade>
            <Fade delay={1000} duration={2000}>
                <div className="lqd-column col-sm-6 col-sm-offset-1 text-center h-100">
                    <StyledImage imgName="terraco-img-01.jpg" style={{height: '100%'}}/>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </Fade>
            </div>{/* /.row */}
            <div className="row d-flex flex-wrap flex-column-reverse align-items-stretch flex-inverted-only-on-mobile">
            <Fade delay={1000} duration={2000}>
                <div className="lqd-column col-sm-6 text-center h-100">
                    <StyledImage imgName="terraco-img-02.jpg" style={{height: '100%', marginRight: '-2em'}}/>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </Fade>
            <Fade duration={2000}>
                <div className="lqd-column col-sm-5 col-sm-offset-1 text-right">
                    <p className="mt-30 mb-30" style={{marginLeft: '30px'}}>
                        "O mais estruturado espaço de eventos da zona sul!" Assim pode-se defini-lo. Sua estrutura conta com 2 halls de banheiros "climatizados" com um total de 36 cabines femininas, 12 masculinas, 16m de mictórios, além de lavatórios com espelhos decorados e adaptados aos novos padrões de higiene, que contam com dispensas de álcool gel, sabonete líquido e toalhas descartáveis; seu palco possui moderna cenografia com elementos para projeção mapeada e área técnica; possui 6 camarotes suspensos; 3 bares totalmente montados, totalizando 33m balcões, armários expositores com iluminação em LED e estações de aço inox para preparo de drinks; sala de produção climatizada; sala de cautela e segurança; container estoque; container cozinha de apoio e 2 camarins climatizados compõem essa estrutura singular. <br />
                        <br />
                        Venha realizar o seu evento em um dos mais belos cartões postais do Rio de Janeiro!
                    </p>
                </div>{/* /.lqd-column col-md-5 */}
            </Fade>
            </div>{/* /.row */}
            <div className="row d-flex flex-wrap align-items-stretch">
            <Fade duration={2000}>
                <div className="lqd-column col-sm-5">
               <h3 className="btn-txt btn btn-naked font-weight-bold text-uppercase mt-30">Dados técnicos, facilidades e serviço</h3><ul style={{marginLeft: '-1.5em'}}><li>Área coberta: 2.015m</li><li>Área open air: 310m2</li><li>Área total: 2.325m2</li><br/><li>02 Halls de Banheiros Climatizados</li><li>36 cabines FEM</li><li>12 cabines MAS</li><li>16m de mictórios</li><br/><li>03 Bares Montados</li><li>Armários Expositores com LED</li><li>33m de Balcão</li><br/><li>Palco Cenografado com 8,00 x 6,00m x 1,00m</li><li>Cenografia preparada para receber projeção mapeada</li><br/><li>06 Camarotes suspensos com guarda corpo com 3,00 x 3,00m </li><li>Tenda Check In com balcão</li><li>02 Camarins climatizados</li><li>Sala de Produção climatizada </li><li>Container Estoque </li><li>Sala de Segurança/Cautela</li></ul>
                </div>{/* /.lqd-column col-md-5 */}
            </Fade>
            <Fade delay={1000} duration={2000}>
                <div className="lqd-column col-sm-6 col-sm-offset-1 text-center h-100">
                    <StyledImage imgName="terraco-img-03.jpg" style={{height: '100%'}}/>
                </div>{/* /.lqd-column col-md-6 col-md-offset-1 */}
            </Fade>
            </div>{/* /.row */}
        </div>{/* /.container */}
    </Section>


)

export default AboutSection