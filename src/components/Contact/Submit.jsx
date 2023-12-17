import React from 'react';

const Submit = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    return <button
        onClick={(e) => handleSubmit(e)}
        type='submit'
    >Send</button>;
};

export default Submit;