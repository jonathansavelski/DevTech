import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Input = styled.input`
    border-radius: 5px;
    height: 2rem;
    width: 20rem;
`

const Textarea = styled.textarea`
    border-radius: 5px;
    width: 20rem;
`

const Contact = () => {
    return (
        <Container>
            <Form>
                <Input type="text" id='name' placeholder='Name' />
                <Input type="text" id='lastname' placeholder='Lastname' />
                <Input type="email" id='email' placeholder='Email' />
                <Textarea rows="10" cols="50" id='subject' placeholder='Message' />
                <button type="submit">Send</button>
            </Form>
        </Container>
    )
}

export default Contact
