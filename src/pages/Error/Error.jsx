import React from 'react'
import styled from 'styled-components'

const ErrorStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    span {
        font-size: 80px;
        line-height: 5rem;
    }
    p {
        font-size: 24px;
    }
    button {
        margin-top: 2rem;
    }
`

const Error = () => {
    return (
        <ErrorStyled>
            <span>Error</span>
            <p>This page does not exist.</p>
            <a href="/"><button>Return to home</button></a>
        </ErrorStyled>
    )
}

export default Error
