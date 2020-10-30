import React, { useState } from "react";
import Toggler from "./Toggler";
import { Link } from "react-router-dom";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 120) {
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
            <Link className="nav-link" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cryptocurrencies">
              رمز ارزها
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exchange">
              صرافی کوین بیت
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              درباره ما
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              تماس با ما
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              ثبت نام
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/log-in">
              ورود
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
