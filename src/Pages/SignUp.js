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

function SignUp() {
  return (
    <Container fluid={true} className="SignIn">
      <Row>
        <Col lg={6}>
          <img
            src={require("../Images/SignUp/signup.png")}
            alt="Sign-in-Logo"
          ></img>
        </Col>
        <Col lg={6}>
          <Form>
            <FormGroup>
              <Label for="UserName">نام و نام خانوادگی</Label>
              <Input
                type="text"
                name="UserName"
                id="UserName"
                placeholder="نام و نام خانوادگی خود را وارد کنید (الزامی)"
                required={true}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="PhoneNumber">شماره همراه</Label>
              <Input
                type="tel"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="شماره همراه خود را وارد کنید (الزامی)"
                required={true}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Password">رمز عبور</Label>
              <Input
                type="password"
                name="Password"
                id="Password"
                placeholder="رمز عبور خود را انتخاب کنید (الزامی)"
                required={true}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Password2">تکرار رمز عبور</Label>
              <Input
                type="password"
                name="Password2"
                id="Password2"
                placeholder="رمز عبور خود را تکرار کنید (الزامی)"
                required={true}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Email">ایمیل (پست الکترونیک)</Label>
              <Input
                type="email"
                name="Email"
                id="Email"
                placeholder="پست الکترونیک خود را وارد کنید (اختیاری)"
                required={false}
              ></Input>
            </FormGroup>
            <Button>ثبت نام</Button>
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

export default SignUp;
