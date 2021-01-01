import React from "react";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <div className="admin-panel-side-navbar">
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <SideNavBar />
          </Col>
          <Col lg="10" className="AdminPanelArea">
            <Row>
              <p>کاربران جدید امروز: 2 نفر</p>
            </Row>
            <Row>
              <p>کاربران جدید هفته اخیر: 10 نفر</p>
            </Row>
            <Row>
              <p>خلاصه فروش امروز:</p>
            </Row>
            <Row>
              <p>خلاصه خرید امروز</p>
            </Row>
            <Row>
              <p>خلاصه فروش هفته اخیر</p>
            </Row>
            <Row>
              <p>خلاصه خرید هفته اخیر</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
