import React from "react";
import PropTypes from "prop-types";

const Table = ({ header, body }) => {
  return (
    <div className="container">
      <table className="table is-fullwidth is-striped is-bordered">
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
};
