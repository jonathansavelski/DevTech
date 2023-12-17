import React from 'react'
import { Container, Form } from './ContactStyles'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Input, TextAreaInput } from './Input';
import Submit from './Submit'

const validationSchema = Yup.object({
    name: Yup.string().trim().required("This field is required"),
    lastname: Yup.string().trim().required("This field is required"),
    email: Yup.string().email("Email invalid").required("This field is required"),
    message: Yup.string().max(255, "The message can not contain more than 255 characters.").required("This field is required")
})

const ContactForm = () => {

    const { getFieldProps, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm();
        }
    });

    return (
        <Container>
            <Form>
                <Input
                    name='name'
                    type='text'
                    id='name'
                    placeholder='Name'
                    isError={touched.name && errors.name} {...getFieldProps('name')}
                />
                <Input
                    type='text'
                    id='lastname'
                    placeholder='Lastname'
                    isError={touched.lastname && errors.lastname} {...getFieldProps('lastname')}
                />
                <Input
                    type="email"
                    id='email'
                    placeholder='Email'
                    isError={touched.email && errors.email} {...getFieldProps('email')} />
                <TextAreaInput
                    rows="10"
                    cols="50"
                    id='subject'
                    placeholder='Message'
                    isError={touched.message && errors.message} {...getFieldProps('message')} />
                <Submit type="submit" onSubmit={handleSubmit}>Send</Submit>
            </Form>
        </Container>
    )
}

export default ContactForm
