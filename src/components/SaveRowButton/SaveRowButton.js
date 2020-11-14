import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SaveRowButton = ({ onClick, disabled }) => {
  return (
    <button
      className="button is-small is-success is-outlined"
      onClick={onClick}
      disabled={disabled}
    >
      Zapisz
      <FontAwesomeIcon className="icon ml-2" icon={faSave} />
    </button>
  );
};

export default SaveRowButton;

SaveRowButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
