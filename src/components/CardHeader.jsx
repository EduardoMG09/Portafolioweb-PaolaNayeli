import React from "react";
import "../styles/CardHeader.css";

function CardHeader(props) {
  return (
    <div className="card-header" style={{ backgroundColor: props.color }}>
      <img src={props.image} alt={props.text} />
      <p>{props.text}</p>
    </div>
  );
}

export default CardHeader;