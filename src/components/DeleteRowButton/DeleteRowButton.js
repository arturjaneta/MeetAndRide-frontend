import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const DeleteRowButton = ({ onClick, disabled }) => {
  return (
    <button
      className="button is-small is-danger is-outlined"
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      Usuń
      <FontAwesomeIcon className="icon ml-2" icon={faTrash} />
    </button>
  );
};

export default DeleteRowButton;

DeleteRowButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
