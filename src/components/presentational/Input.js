import React, { lazy } from "react";
import PropTypes from "prop-types";
import './Input.css';
const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control name"
            id={id}
            value={value}
            onChange={handleChange}
            onClick={() => {
                // let a = lazy(() => import(/* webpackChunkName: "Lodash" */'lodash'));
                // console.log(a)
                import(/* webpackChunkName: "print" */ 'lodash').then(module => {
                    console.log(module.join(['Another', 'module', 'loaded!']));
                });
            }}
            required
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