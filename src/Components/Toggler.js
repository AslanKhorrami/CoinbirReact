import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

// class Toggler extends React.Component {
function Toggler() {
  const [ShowMenu, SetShowMenu] = useState(false);
  const maskTransitions = useTransition(ShowMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(ShowMenu, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="Toggler">
      <FontAwesomeIcon icon={faBars} onClick={() => SetShowMenu(!ShowMenu)} />
      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="ToggleMenuMask"
              onClick={() => SetShowMenu(false)}
            ></animated.div>
          )
      )}
      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="ToggleMenu">
              <Nav className="mr-auto">
                <Link
                  to="/register"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  ثبت نام
                </Link>

                <Link
                  to="/log-in"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  ورود
                </Link>
                <NavDropdown title="پنل کاربری" id="collasible-nav-dropdown">
                  <Link
                    to="/dashboard"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    حساب کاربری
                  </Link>
                  <Link
                    to="/dashboard/wallet"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    کیف پول
                  </Link>
                  <Link
                    to="/dashboard/authentication"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    احراز هویت
                  </Link>
                  <Link
                    to="/dashboard/ticket"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    تیکت ها
                  </Link>
                  <Link
                    to="/dashboard/bank-accounts"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    حساب های بانکی
                  </Link>
                  <Link
                    to="/dashboard/withdraws"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    برداشت های من
                  </Link>
                  <Link
                    to="/dashboard/purchases"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    خریدهای من
                  </Link>
                  <Link
                    to="/dashboard/sales"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    فروش های من
                  </Link>
                  <Link
                    to="/dashboard/change-password"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    تغییر رمز عبور
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-item"
                    onClick={() => SetShowMenu(false)}
                  >
                    خروج
                  </Link>
                </NavDropdown>
              </Nav>
              <Nav>
                <Link
                  to="/"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  صفحه اصلی
                </Link>
                <Link
                  eventKey={2}
                  to="/cryptocurrencies"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  رمز ارزها
                </Link>
                <Link
                  to="/exchange"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  صرافی کوین بیت
                </Link>
                <Link
                  to="/about"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  درباره ما
                </Link>
                <Link
                  to="/contact-us"
                  className="nav-link"
                  role="button"
                  onClick={() => SetShowMenu(false)}
                >
                  تماس با ما
                </Link>
              </Nav>
            </animated.div>
          )
      )}
    </Navbar>
  );
}

export default Toggler;
