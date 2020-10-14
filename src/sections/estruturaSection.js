import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import { device } from "../components/devices";
import Image from "../components/image";
import SectionTitle from "../components/sectionTitle";
import Section from "../components/section";

const StyledImage = styled(Image)`
  margin: 0 -10vw;
  @media ${device.tablet} {
    margin: auto;
  }
`;

const EstruturaSection = () => (
  <Section id="estrutura" noPaddingBottom>
    <div className="container">      
      <div className="row d-flex flex-wrap align-items-stretch">
        <Fade duration={2000}>
          <div className="lqd-column col-sm-5 mb-30 d-flex flex-column">
          <SectionTitle
              title="Especificações"
              subtitle="Dados técnicos, facilidades e serviço"
            />
            <ul style={{ marginLeft: "-1.5em" }}>
              <li>Área coberta: 1.600m2</li>
              <li>Área open air: 400m2</li>
              <li>Área total: 2.000m2</li>
              <li>02 Halls de Banheiros Climatizados</li>
              <li>36 cabines FEM</li>
              <li>12 cabines MAS</li>
              <li>16m de mictórios</li>
              <li>03 Bares Montados</li>
              <li>Armários Expositores com LED</li>
              <li>33m de Balcão</li>
              <li>Palco Cenografado com 8,00 x 6,00m x 1,00m</li>
              <li>Cenografia de Boca de Cena preparada para receber projeção mapeada</li>
              <li>06 Camarotes suspensos com guarda corpo com 3,00 x 3,00m </li>
              <li>Tenda Check In com balcão</li>
              <li>02 Camarins climatizados</li>
              <li>Sala de Produção climatizada </li>
              <li>Container Estoque </li>
              <li>Sala de Segurança/Cautela</li>
            </ul>
          </div>
          {/* /.lqd-column col-md-5 */}
        </Fade>
        <Fade delay={500} duration={2000}>
          <div className="lqd-column col-sm-6 col-sm-offset-1 text-center h-100">
            <StyledImage
              imgName="img-specs.jpg"
              style={{ height: "100%" }}
            />
          </div>
          {/* /.lqd-column col-md-6 col-md-offset-1 */}
        </Fade>
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </Section>
);

export default EstruturaSection;
