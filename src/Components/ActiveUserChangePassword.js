import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function ActiveUserChangePassword() {
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
              <h1>تغییر رمز عبور</h1>
            </Row>
            <Row className="ChangePassword">
              <Form>
                <Form.Row>
                  <Form.Group controlId="CurrentPassword">
                    <Form.Label>رمز عبور فعلی</Form.Label>
                    <Form.Control
                      type="password"
                      autoFocus={true}
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="NewPassword">
                    <Form.Label>رمز عبور جدید</Form.Label>
                    <Form.Control type="password"></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="RetypeNewPassword">
                    <Form.Label>تکرار رمز عبور جدید</Form.Label>
                    <Form.Control type="password"></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  ذخیره
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ActiveUserChangePassword;
