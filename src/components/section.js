import React from 'react'
import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    margin-top: ${props => props.noMarginTopOnMobile ? '0' : '100px'};
    margin-right: 10px;
    margin-left: 10px;
    padding-bottom: ${props => props.noPaddingBottom ? 0 : '100px'};
    @media (min-width: 768px) {
        margin-top: 100px;
    }
`

const Section = props => {
    return(
        <StyledSection {...props} className="bg-white z-index-1 d-flex flex-column justify-content-center">
            {props.children}
        </StyledSection>
    )
}

export default Section