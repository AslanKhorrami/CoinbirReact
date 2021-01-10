import React from "react";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import TopBar from "../Components/topBar";

function UsernameEdit() {
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
        <div className="admin-panel-side-navbar">
          <Container fluid={true}>
            <Row>
              <Col lg="2">
                <SideNavBar />
              </Col>
              <Col lg="10" className="AdminPanelArea">
                <TopBar />
                <h1>صفحه تغییر نام کاربری</h1>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default UsernameEdit;
