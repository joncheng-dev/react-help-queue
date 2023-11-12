import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.location}</h3>
      <h3>{props.names}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
};

export default Ticket;
