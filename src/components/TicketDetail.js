import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <p>
        {ticket.location} - {ticket.names}
      </p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={() => onClickingEdit()}>Edit</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Delete Ticket </button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default TicketDetail;
