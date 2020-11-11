import React from "react";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";

function Cryptocurrencies() {
  return (
    <div className="admin-panel-side-navbar">
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <SideNavBar />
          </Col>
          <Col lg="10" className="AdminPanelArea">
            <h1>صفحه نمایش رمز ارزها</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cryptocurrencies;
