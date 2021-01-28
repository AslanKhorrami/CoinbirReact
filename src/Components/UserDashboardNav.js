import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";

function UserDashboardNav() {
  const [, setReload] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("statusId");
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
            <NavLink
              className="nav-link"
              exact
              to="/dashboard"
              activeClassName="active-user-dashboard"
            >
              حساب کاربری
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/wallet"
              activeClassName="active-user-dashboard"
            >
              کیف پول
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/authentication"
              activeClassName="active-user-dashboard"
            >
              احراز هویت
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/ticket"
              activeClassName="active-user-dashboard"
            >
              تیکت
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/bank-accounts"
              activeClassName="active-user-dashboard"
            >
              حساب های بانکی
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/withdraws"
              activeClassName="active-user-dashboard"
            >
              برداشت های من
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/purchases"
              activeClassName="active-user-dashboard"
            >
              خریدهای من
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/sales"
              activeClassName="active-user-dashboard"
            >
              فروش های من
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard/change-password"
              activeClassName="active-user-dashboard"
            >
              تغییر رمز عبور
            </NavLink>
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
