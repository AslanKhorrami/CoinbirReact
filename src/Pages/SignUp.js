import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Redirect } from "react-router-dom";
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
  const [FullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(FullName, PhoneNumber, Email);
    return <Redirect to="/" />;
  };
  return (
    <div>
      <NavBar />
      <Container fluid={true} className="SignIn">
        <Row>
          <Col lg={6}>
            <img
              src={require("../Images/SignUp/signup.png")}
              alt="Sign-in-Logo"
            ></img>
          </Col>
          <Col lg={6}>
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <Label for="UserName">نام و نام خانوادگی</Label>
                <Input
                  type="text"
                  name="UserName"
                  id="UserName"
                  placeholder="نام و نام خانوادگی خود را وارد کنید (الزامی)"
                  value={FullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={true}
                  autoComplete="none"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="PhoneNumber">شماره همراه</Label>
                <Input
                  type="tel"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  placeholder="شماره همراه خود را وارد کنید (الزامی)"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required={true}
                  autoComplete="none"
                ></Input>
              </FormGroup>
              {/* <FormGroup>
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
              </FormGroup> */}
              <FormGroup>
                <Label for="Email">ایمیل (پست الکترونیک)</Label>
                <Input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="پست الکترونیک خود را وارد کنید (اختیاری)"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
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
      <Footer />
    </div>
  );
}

export default SignUp;
