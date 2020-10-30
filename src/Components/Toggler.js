import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";

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
    <nav className="Toggler">
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
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/register"
                    onClick={() => SetShowMenu(false)}
                  >
                    ثبت نام
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/log-in"
                    onClick={() => SetShowMenu(false)}
                  >
                    ورود
                  </Link>
                </li>
              </ul>
              <hr></hr>
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => SetShowMenu(false)}
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/cryptocurrencies"
                    onClick={() => SetShowMenu(false)}
                  >
                    رمز ارزها
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/exchange"
                    onClick={() => SetShowMenu(false)}
                  >
                    صرافی کوین بیت
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    onClick={() => SetShowMenu(false)}
                  >
                    درباره ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact-us"
                    onClick={() => SetShowMenu(false)}
                  >
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Toggler;
