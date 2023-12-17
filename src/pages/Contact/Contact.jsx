import React from 'react'
import ContactForm from '../../components/Contact/Contact'
import { Container } from './ContactStyles'
import { Subheader } from '../../styles/GlobalStyles'

const Contact = () => {
    return (
        <>
            <Subheader>
                <h1>Contact</h1>
            </Subheader>
            <Container>
                <div></div>
                <ContactForm />
            </Container>

        </>
    )
}

export default Contact
