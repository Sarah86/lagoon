import React, { useState, useCallback } from "react"
import Fade from 'react-reveal/Fade';
import styled from "styled-components"

import SectionTitle from "../components/sectionTitle";
import Form from "../components/form";
import { device } from "../components/devices";
import Section from "../components/section";

const StyledDiv = styled.div`
    margin: 0 -2em 2em -2em;
    @media ${device.desktop}{
        margin: initial;
        padding: 0
    }
    
`

const StyledContainer = styled.div`
    @media ${device.desktop}{
        width: auto;
        margin: 0;
    }
`

const StyledFormContainer = styled.div`
     @media ${device.desktop}{
        padding: 0 4em;
    }
`

const ContatoSection = () => {

    return (
            <Section id="onde-estamos">
                <Fade duration={2000}>
                <div className="container">
                    <SectionTitle title="Contato" subtitle="Quality tours crafted by local experts."/>
                </div>
                <StyledContainer className="container">
                    <div className="row">
                        <StyledDiv className="lqd-column col-md-6 flex-column justify-content-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2838087112373!2d-43.22054148388227!3d-22.976588884976323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59f0392569d%3A0x816dbf880e8da697!2sComplexo%20Lagoon!5e0!3m2!1spt-BR!2sbr!4v1582766550481!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
                        </StyledDiv>
                        <StyledFormContainer className="lqd-column col-md-6 flex-column justify-content-center">
                            <Form />
                        </StyledFormContainer>
                    </div>
                </StyledContainer>
                </Fade>
            </Section>

    )

}

export default ContatoSection