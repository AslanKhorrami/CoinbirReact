import React from "react";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserDashboard() {
  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="dashboard">
        <Col lg="3" className="dashboard-nav">
          <UserDashboardNav></UserDashboardNav>
        </Col>
        <Col lg="9" className="dashboard-area">
          حساب کاربری
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
