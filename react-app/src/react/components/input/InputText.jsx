import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => {
    const { onSubmit, onValueChange } = props;
    return (
        <input type="text" onKeyPress={onSubmit} onChange={onValueChange}/>
    );
};

InputText.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
}

export default InputText;