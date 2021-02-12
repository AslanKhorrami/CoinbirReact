import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import UserLoginValidator from "../Functions/UserLoginValidator";
// import { connect } from "react-redux";
// import { Types } from "../Redux/Constants/ActionTypes";
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
import "../styles/pages/UserLogin.scss";

function SignIn() {
  document.title = "ورود کاربران";

  localStorage.removeItem("Mobile No.");

  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelChange = (event) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(UserLoginValidator(loginValues));
    setIsSubmitting(true);
    // submit();
    // axios({
    //   method: "post",
    //   url: "https://coinbit-backend.com/api/Account/login",
    //   data: {
    //     username: loginValues.username,
    //     password: loginValues.password,
    //   },
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }).then((Response) => {
    //   localStorage.setItem("userData", JSON.stringify(Response.data));
    //   window.location.reload();
    // });
  };

  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      //Check if there is no error and then call th callback()
      if (Object.keys(errors).length === 0 && isSubmitting) {
        submit();
      }
    }

    return () => {
      isUnmounted = true;
    };
    // eslint-disable-next-line
  }, [errors, isSubmitting]);

  async function submit() {
    await axios({
      method: "post",
      url: "https://coinbit-backend.com/api/Account/login",
      data: {
        username: loginValues.username,
        password: loginValues.password,
      },
      headers: {
        "content-type": "application/json",
      },
    }).then((Response) => {
      localStorage.setItem("userData", JSON.stringify(Response.data));
      window.location.reload();
    });
  }

  function isAuthenicated() {
    if (localStorage.getItem("userData")) {
      const jsondata = JSON.parse(localStorage.getItem("userData"));
      if (
        jsondata.accessToken &&
        jsondata.accessToken.length > 10 &&
        jsondata.role === "customer"
      ) {
        return true;
      }
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
                  className="SigninImage"
                ></img>
              </Col>
              <Col lg={6}>
                <Form onSubmit={handelSubmit}>
                  <FormGroup>
                    <Label for="UserName">شماره تماس یا نام کاربری</Label>
                    <Input
                      type="text"
                      name="username"
                      value={loginValues.username}
                      id="UserName"
                      onChange={handelChange}
                    ></Input>
                    {errors.username && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.username}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="PassWord">رمز عبور</Label>
                    <Input
                      type="password"
                      name="password"
                      value={loginValues.password}
                      id="PassWord"
                      onChange={handelChange}
                    ></Input>
                    {errors.password && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.password}
                      </p>
                    )}
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

// const mapStateToProps = (state) => {
//   return {
//     profile: state.user,
//   };
// };

export default SignIn;
