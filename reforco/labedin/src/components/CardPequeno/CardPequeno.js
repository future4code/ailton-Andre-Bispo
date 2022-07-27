import React from "react";
// import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <>
      <div className="smallcard-container">
        <img src={props.icon} />
        <div>
          <h4>Email:{props.email}</h4>
        </div>
      </div>
      <div className="smallcard-container">
        <img src={props.icon} />
        <div>
          <h4>Endereço:{props.local}</h4>
        </div>
      </div>
    </>
  );
}

export default CardPequeno;
