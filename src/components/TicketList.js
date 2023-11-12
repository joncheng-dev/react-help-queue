import React from "react";
import Ticket from "./Ticket";

const tempTicketList = [
  {
    names: "Paul and Moses",
    location: "Cello-1",
    issue: "GitHub history got deleted!",
  },
  {
    names: "Jon and Joey",
    location: "Cello-2",
    issue: "State not updating as expected",
  },
  {
    names: "Jake and Ian",
    location: "Drum-1",
    issue: "components not talking to each other",
  },
];

function TicketList() {
  return (
    <React.Fragment>
      <hr />
      {tempTicketList.map((ticket, index) => (
        <Ticket location={ticket.location} names={ticket.names} issue={ticket.issue} key={index} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
