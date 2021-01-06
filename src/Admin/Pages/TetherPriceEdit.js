import React, { useState, useEffect } from "react";
import axios from "axios";
import TetherPageForm from "../Components/TetherPageForm";
import { Redirect } from "react-router-dom";

function TetherPriceEdit() {
  document.title = "ثبت قیمت تتر";
  const [tetherRvalue, setTetherRvalue] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("accessToken");
    axios
      .get("https://coinbit-backend.com/api/Config/get", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then(Response.JSON)
      .then((Response) => {
        setTetherRvalue(Response.data[0].tetherRialValue);
      });
    // return () => {
    //   const tetherRialValue = Response.data[0].tetherRialValue;
    // };
  }, []);

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
        <TetherPageForm tetherRialValue={tetherRvalue} />
      )}
    </div>
  );
}

export default TetherPriceEdit;
