import React, { lazy } from "react";
import PropTypes from "prop-types";
import './Input.css';
const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group name">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
        />
    </div>
);
Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
Input.displayName = "YmInput";
export default Input;