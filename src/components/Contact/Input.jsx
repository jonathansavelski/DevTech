import React from "react";
import {
    InputStyled,
    ErrorStyled,
    TextArea
} from "./ContactStyles";

export const Input = ({ name, label, type, isError, ...field }) => {
    return (
        <>
            <InputStyled
                error={isError}
                name={name}
                type={type}
                id={label}
                {...field}
            />

            {isError && <ErrorStyled>{isError}</ErrorStyled>}
        </>
    );
};

export const TextAreaInput = ({ name, label, isError, ...field }) => {
    return (
        <>
            <TextArea
                error={isError}
                name={name}
                id={label}
                {...field}
            />
            {isError && <ErrorStyled>{isError}</ErrorStyled>}
        </>
    );
};

export default Input;