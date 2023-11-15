import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>
          {props.location} - {props.name}
        </h3>
        <p>
          <em>{props.issue}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  location: PropTypes.string,
  names: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
};

export default Ticket;
