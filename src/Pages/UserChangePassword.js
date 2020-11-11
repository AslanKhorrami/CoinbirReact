import React from "react";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserChangePassword() {
  return (
    <Container>
      <Row className="dashboard">
        <Col lg="3" className="dashboard-nav">
          <UserDashboardNav></UserDashboardNav>
        </Col>
        <Col lg="9" className="dashboard-area">
          تغییر رمز عبور
        </Col>
      </Row>
    </Container>
  );
}

export default UserChangePassword;
