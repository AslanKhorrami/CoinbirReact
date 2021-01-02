import React from "react";
import TetherPageForm from "../Components/TetherPageForm";
import { Redirect } from "react-router-dom";

function TetherPriceEdit() {
  document.title = "ثبت قیمت تتر";
  function isAuthenicated() {
    const accessToken = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    if (accessToken && accessToken.length > 10 && role === "admin") {
      return true;
    }
    // return token && token.length > 10;
  }
  const isAlreadyAuthennicated = isAuthenicated();
  return (
    <div>
      {!isAlreadyAuthennicated ? (
        <Redirect to={{ pathname: "/admin" }} />
      ) : (
        <TetherPageForm />
      )}
    </div>
  );
}

export default TetherPriceEdit;
