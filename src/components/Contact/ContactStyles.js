import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputStyled = styled.input`
    border: 1px solid;
    border-color: ${({ error }) => (error ? "red" : "black")};
    border-radius: 5px;
    padding: 10px;
    outline: none;
    height: 1rem;
    width: 18rem;
`;

export const ErrorStyled = styled.span`
    font-size: 14px;
    color: red;
    margin-top: -1rem;
`;

export const TextArea = styled.textarea`
    border: 1px solid;
    border-color: ${({ error }) => (error ? "red" : "black")};
    border-radius: 5px;
    padding: 10px;
    width: 18rem;
    height: 2rem;
    resize: vertical;
    font-family: "Mulish";
`;