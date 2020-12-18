import React, { useState } from "react";
import Toggler from "./Toggler";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", ChangeBackground);
  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg sticky-top scrol"
          : "navbar navbar-expand-lg sticky-top"
      }
    >
      <Link className="navbar-brand" to="/">
        <img src={require("../Images/Logos/logo.png")} alt="logo"></img>
      </Link>
      <Toggler />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/" activeClassName="active">
              صفحه اصلی
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/cryptocurrencies"
              activeClassName="active"
            >
              رمز ارزها
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/exchange"
              activeClassName="active"
            >
              صرافی کوین بیت
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active">
              درباره ما
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact-us"
              activeClassName="active"
            >
              تماس با ما
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard"
              activeClassName="active"
            >
              پنل کاربری
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/register"
              activeClassName="active"
            >
              ثبت نام
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/log-in" activeClassName="active">
              ورود
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
