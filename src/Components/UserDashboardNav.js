import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function UserDashboardNav() {
  const [Reload, setReload] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setReload(true); //makes dom to reload the render method and then redirect to specific route
  }

  function isAuthenicated() {
    const token = localStorage.getItem("token");
    if (token && token.length > 10) {
      return true;
    }
    // return token && token.length > 10;
  }

  const isAlreadyAuthennicated = isAuthenicated();

  return (
    <>
      {!isAlreadyAuthennicated ? (
        <Redirect to={{ pathname: "/log-in" }} />
      ) : (
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              حساب کاربری
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/wallet">
              کیف پول
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/authentication">
              احراز هویت
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/ticket">
              تیکت
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/bank-accounts">
              حساب های بانکی
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/withdraws">
              برداشت های من
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/purchases">
              خریدهای من
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/sales">
              فروش های من
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/change-password">
              تغییر رمز عبور
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={logout}>
              خروج
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default UserDashboardNav;
