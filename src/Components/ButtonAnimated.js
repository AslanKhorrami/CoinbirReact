import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ButtonAnimated.scss";
function ButtonAnimated(props) {
  return (
    <div className="btn-animated">
      <Link className="nav-link">{props.text}</Link>
    </div>
  );
}

export default ButtonAnimated;
