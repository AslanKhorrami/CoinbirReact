import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
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
  document.title = "ورود کاربران";

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [, setReload] = useState(false);

  const setuserName = (e) => {
    setUserName(e.target.value);
  };

  const setpassword = (e) => {
    setPassword(e.target.value);
  };

  function submitHandeler(e) {
    e.preventDefault();
    const temp = axios({
      method: "post",
      url: "https://marshalbackend.com/coinbit/token",
      data: {
        username: UserName,
        password: Password,
      },
      headers: {
        "content-type": "application/json",
      },
    })
      .then(Response.JSON)
      .then((Response) => {
        localStorage.setItem("token", Response.data.access_token);
        setReload(true); //makes dom to reload the render method and then redirect to specific route
        //   // console.log(Response.data.access_token);
        //   // alert("ورود انجام شد");
      })
      .catch((error) => {
        seterrorMessage("نام کاربری یا رمز عبور اشتباه است.");
        console.log(errorMessage);
      });
    return temp;
  }

  function isAuthenicated() {
    const token = localStorage.getItem("token");
    if (token && token.length > 10) {
      return true;
    }
    // return token && token.length > 10;
  }

  const isAlreadyAuthennicated = isAuthenicated();

  return (
    <div>
      {isAlreadyAuthennicated ? (
        <Redirect to={{ pathname: "/dashboard" }} />
      ) : (
        <div>
          <NavBar />
          <Container fluid={true} className="SignIn">
            <Row>
              <Col lg={6}>
                <img
                  src={require("../Images/SignIn/sign-in.png")}
                  alt="Sign-in-Logo"
                ></img>
              </Col>
              <Col lg={6}>
                <h2>{errorMessage}</h2>
                <Form onSubmit={submitHandeler}>
                  <FormGroup>
                    <Label for="UserName">شماره تماس یا نام کاربری</Label>
                    <Input
                      type="text"
                      name="username"
                      id="UserName"
                      onChange={setuserName}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="PassWord">رمز عبور</Label>
                    <Input
                      type="password"
                      name="password"
                      id="PassWord"
                      onChange={setpassword}
                    ></Input>
                  </FormGroup>
                  <Button type="submit">ورود</Button>
                </Form>
                <Row>
                  <p>
                    هنوز عضو نشدید؟ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/register">ثبت نام کنید</Link>
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default SignIn;
