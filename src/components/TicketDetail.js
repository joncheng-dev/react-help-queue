import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <p>
        {ticket.location} - {ticket.names}
      </p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
};

export default TicketDetail;
