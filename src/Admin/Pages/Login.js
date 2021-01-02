import React, { useState } from "react";
import "../Styles/Login.scss";
import { Container, Row, Col } from "reactstrap";
import { Form, Button } from "react-bootstrap";
import useForm from "../Components/useForm";
import loginValidate from "../Functions/LoginValidate";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login() {
  document.title = "ورود ادمین";
  const { loginValues, handelChange, handelSubmit, errors } = useForm(
    submit,
    loginValidate
  );
  const [failedLogin, setFailedLogin] = useState("");
  const [, setReload] = useState(false);

  function submit() {
    // console.log("submited");
    axios
      .post("https://coinbit-backend.com/api/Account/login", {
        username: loginValues.email,
        password: loginValues.password,
      })
      .then(Response.JSON)
      .then((Response) => {
        localStorage.setItem("accessToken", Response.data.accessToken);
        localStorage.setItem("role", Response.data.role);
        setReload(true);
      })
      .catch((error) => {
        setFailedLogin("نام کاربری یا رمز عبور اشتباه می باشد");
      });
  }

  function isAuthenicated() {
    const accessToken = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    if (accessToken && accessToken.length > 10 && role === "admin") {
      return true;
    }
    // return token && token.length > 10;
  }
  const isAlreadyAuthennicated = isAuthenicated();
  return (
    <div>
      {isAlreadyAuthennicated ? (
        <Redirect to={{ pathname: "/admin/dashboard" }} />
      ) : (
        <Container fluid={true} className="admin-common">
          <Row>
            <Col sm={12} className="AdminLoginForm">
              <h1>ورود به پنل مدیریت</h1>
              {failedLogin && <p>{failedLogin}</p>}
              <Form noValidate onSubmit={handelSubmit}>
                <Form.Group controlId="AdminLoginUsername">
                  <Form.Control
                    className={`${errors.email && "innputError"}`}
                    type="email"
                    name="email"
                    placeholder="نام کاربری"
                    value={loginValues.email}
                    onChange={handelChange}
                    autoComplete="off"
                    autoFocus={true}
                  ></Form.Control>
                  {errors.email && <p className="error">{errors.email}</p>}
                </Form.Group>
                <Form.Group controlId="AdminLoginPassword">
                  <Form.Control
                    className={`${errors.password && "innputError"}`}
                    type="password"
                    name="password"
                    placeholder="رمز عبور"
                    value={loginValues.password}
                    onChange={handelChange}
                  ></Form.Control>
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </Form.Group>
                {/* <Form.Group controlId="AdminLoginRememberMe">
                <Form.Check
                  type="checkbox"
                  label="مرا به خاطر بسپار"
                ></Form.Check>
              </Form.Group> */}
                <Button type="submit">ورود</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Login;
