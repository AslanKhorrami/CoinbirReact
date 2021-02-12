import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UserDashboardNav from "./UserDashboardNav";
import { Container, Row, Col } from "reactstrap";

function UserApproval() {
  return (
    <div>
      <NavBar />
      <Container fluid={true} className="dashboard-container">
        <Row className="dashboard">
          <Col lg="3" className="dashboard-nav">
            <UserDashboardNav></UserDashboardNav>
          </Col>
          <Col lg="9" className="dashboard-area">
            <Row>
              <h2 className="h2Header">در انتظار تائید مدیریت</h2>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UserApproval;
