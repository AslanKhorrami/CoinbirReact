import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserTicket() {
  return (
    <Container>
      <Row className="dashboard">
        <Col lg="3" className="dashboard-nav">
          <UserDashboardNav></UserDashboardNav>
        </Col>
        <Col lg="9" className="dashboard-area">
          ارسال تیکت
        </Col>
      </Row>
    </Container>
  );
}

export default UserTicket;
