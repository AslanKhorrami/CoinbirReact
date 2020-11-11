import React from "react";
import "../Styles/Login.scss";
import { Container, Row, Col } from "reactstrap";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container fluid={true} className="admin-common">
      <Row>
        <Col sm={12} className="AdminLoginForm">
          <h1>ورود به پنل مدیریت</h1>
          <Form>
            <Form.Group controlId="AdminLoginUsername">
              <Form.Control type="email" placeholder="ایمیل"></Form.Control>
            </Form.Group>
            <Form.Group controlId="AdminLoginPassword">
              <Form.Control
                type="password"
                placeholder="رمز عبور"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="AdminLoginRememberMe">
              <Form.Check
                type="checkbox"
                label="مرا به خاطر بسپار"
              ></Form.Check>
            </Form.Group>
            <Button type="submit">ورود</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
