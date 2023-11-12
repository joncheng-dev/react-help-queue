import React from "react";
import epicodusLogo from "./../img/epicodus-logo-300.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={epicodusLogo} alt="Epicodus logo" />
    </React.Fragment>
  );
}

export default Header;
