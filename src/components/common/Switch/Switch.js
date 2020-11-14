import React from 'react';
import './SwitchStyle.css';
import PropTypes from 'prop-types';

const Switch = (props) => {
    return (
        <label className="switch">
            <input type="checkbox" defaultChecked={props.defaultChecked} onChange={props.onChange} />
            <span className="slider round"></span>
        </label>
    )
}

Switch.propTypes = {
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func
  };

export default Switch;