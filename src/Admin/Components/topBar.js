import React from "react";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/TopBar.scss";

function TopBar() {
  const username = localStorage.getItem("username");
  const adminLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    window.location.reload(false);
  };
  return (
    <Row>
      <h4 className="topBarUsername">{username} عزیز، خوش آمدید</h4>
      <h4 className="topBarExit" onClick={adminLogout}>
        خروج <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
      </h4>
    </Row>
  );
}

export default TopBar;
