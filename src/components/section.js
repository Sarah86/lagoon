import React from 'react'
import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    min-height: 100vh;
    padding-top: 150px;
    padding-bottom: ${props => props.noPaddingBottom ? 0 : '150px'};
`

const Section = props => {
    return(
        <StyledSection {...props} className="bg-white z-index-1 d-flex flex-column justify-content-center">
            {props.children}
        </StyledSection>
    )
}

export default Section