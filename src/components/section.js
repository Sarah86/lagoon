import React from 'react'
import styled from "styled-components"

const StyledSection = styled.section`
    position: relative;
    margin-top: 100px;
    padding-bottom: ${props => props.noPaddingBottom ? 0 : '100px'};
`

const Section = props => {
    return(
        <StyledSection {...props} className="bg-white z-index-1 d-flex flex-column justify-content-center">
            {props.children}
        </StyledSection>
    )
}

export default Section