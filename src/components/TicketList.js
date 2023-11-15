import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// const tempTicketList = [
//   {
//     names: "Paul and Moses",
//     location: "Cello-1",
//     issue: "GitHub history got deleted!",
//   },
//   {
//     names: "Jon and Joey",
//     location: "Cello-2",
//     issue: "State not updating as expected",
//   },
//   {
//     names: "Jake and Ian",
//     location: "Drum-1",
//     issue: "components not talking to each other",
//   },
// ];

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) => (
        <Ticket
          whenTicketClicked={props.onTicketSelection}
          location={ticket.location}
          names={ticket.names}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}
        />
      ))}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func,
};

export default TicketList;
