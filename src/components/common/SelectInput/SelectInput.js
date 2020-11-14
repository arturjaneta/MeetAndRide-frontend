import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const SelectInput = (props) => {
  return (
    <Select
      isMulti={props.isMulti}
      defaultValue={props.defaultValue}
      options={props.options}
      getOptionLabel={props.getOptionLabel}
      getOptionValue={props.getOptionValue}
      onChange={props.onChange}
      placeholder={props.placeholder}
      isDisabled={props.isDisabled}
    />
  );
};

SelectInput.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    PropTypes.object,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  onChange: PropTypes.func,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default SelectInput;
