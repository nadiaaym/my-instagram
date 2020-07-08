import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.x}>{props.text}</button>
    )
};

Button.propTypes = {
    text: PropTypes.string,
    x: PropTypes.func
};

Button.defaultProps = {
    text: 'nadiush hayafa',
};

export default Button;
