import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
} from "reactstrap";

function SignIn() {
  return (
    <Container fluid={true} className="SignIn">
      <Row>
        <Col lg={6}>
          <img
            src={require("../Images/SignIn/sign-in.png")}
            alt="Sign-in-Logo"
          ></img>
        </Col>
        <Col lg={6}>
          <Form>
            <FormGroup>
              <Label for="UserName">شماره تماس یا نام کاربری</Label>
              <Input type="text" name="username" id="UserName"></Input>
            </FormGroup>
            <FormGroup>
              <Label for="PassWord">رمز عبور</Label>
              <Input type="text" name="password" id="PassWord"></Input>
            </FormGroup>
            <Button>ورود</Button>
          </Form>
          <Row>
            <p>
              هنوز عضو نشدید؟ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/register">ثبت نام کنید</a>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
