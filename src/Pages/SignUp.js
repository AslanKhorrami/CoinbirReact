import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Redirect } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import User1stStepSignUpValidator from "../Admin/Functions/User1stStepSignUp";
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
  document.title = "ثبت نام کاربران";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [submitCode, setSubmitCode] = useState(false);
  const [message, setMessage] = useState();
  const [smsCode, setSMSCode] = useState();
  const isSubmited = localStorage.getItem("Mobile No.");
  const [reload, setReload] = useState(false);

  const handleClose = () => setShow(false);

  const handelChange = (event) => {
    setFirstName({
      ...firstName,
      [event.target.name]: event.target.value,
    });
    setLastName({
      ...lastName,
      [event.target.name]: event.target.value,
    });
    setPhoneNumber({
      ...PhoneNumber,
      [event.target.name]: event.target.value,
    });
    setEmail({
      ...email,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    event.persist();
    setErrors(
      User1stStepSignUpValidator(firstName, lastName, PhoneNumber, email)
    );
    setIsSubmitting(true);
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

  function submit() {
    const subData = {
      firstName: firstName.UserName,
      lastName: lastName.UserLastName,
      mobile: PhoneNumber.PhoneNumber,
      mail: email.Email,
    };

    axios({
      method: "post",
      url: "https://coinbit-backend.com/api/Customer/registerCustomer",
      data: JSON.stringify(subData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        // console.log(Response.data.devMessage);
        setMessage(Response.data.devMessage);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      if (message === null) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    return () => {
      isUnmounted = true;
    };
  }, [message]);

  function handelSubmitCode(event) {
    setSMSCode({
      ...submitCode,
      [event.target.name]: event.target.value,
    });
  }

  function handelCodeSubmit() {
    axios({
      method: "post",
      url: `https://coinbit-backend.com/api/Customer/checkcustomersms?mobile=${PhoneNumber.PhoneNumber}&code=${smsCode.submitCode}`,
    }).then((Response) => {
      localStorage.setItem("Mobile No.", PhoneNumber.PhoneNumber);
      setShow(false);
      setSubmitCode(true);
      setReload(true);
      if (reload) {
        window.location.reload();
      }
    });
  }

  // useEffect(() => {
  //   let isUnmount = false;
  //   if (!isUnmount) {
  //     window.location.reload();
  //   }
  //   return () => {
  //     isUnmount = true;
  //   }
  // }, [])

  // function isCodeSubmited() {
  //   return submitCode;
  // }

  // const isSubmited = isCodeSubmited();

  return (
    <div>
      {isSubmited ? (
        <Redirect to={{ pathname: "/setpassword" }} />
      ) : (
        <div>
          <NavBar />
          <Container fluid={true} className="SignIn">
            <Row className="Register">
              <Col lg={6}>
                <img
                  src={require("../Images/SignUp/signup.png")}
                  alt="Sign-up-Logo"
                  className="SignupImage"
                ></img>
              </Col>
              <Col lg={6}>
                {message && (
                  <p
                    style={{
                      marginTop: "6px",
                      color: "#ff3333",
                      textAlign: "center",
                    }}
                  >
                    {message}
                  </p>
                )}
                <Form onSubmit={handelSubmit} noValidate>
                  <FormGroup>
                    <Label for="UserName">نام </Label>
                    <Input
                      type="text"
                      name="UserName"
                      id="UserName"
                      placeholder="نام خود را به فارسی وارد کنید (الزامی)"
                      onChange={handelChange}
                      autoComplete="none"
                    ></Input>
                    {errors.firstName && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.firstName}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="UserLastName">نام خانوادگی</Label>
                    <Input
                      type="text"
                      name="UserLastName"
                      id="UserLastName"
                      placeholder="نام خانوادگی خود را به فارسی وارد کنید (الزامی)"
                      onChange={handelChange}
                      autoComplete="none"
                    ></Input>
                    {errors.lastName && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.lastName}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="PhoneNumber">شماره همراه</Label>
                    <Input
                      type="tel"
                      name="PhoneNumber"
                      id="PhoneNumber"
                      placeholder="شماره همراه خود را وارد کنید (الزامی)"
                      onChange={handelChange}
                      autoComplete="none"
                    ></Input>
                    {errors.phoneNumber && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.phoneNumber}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="Email">ایمیل (پست الکترونیک)</Label>
                    <Input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="پست الکترونیک خود را وارد کنید (اختیاری)"
                      onChange={handelChange}
                      required={false}
                    ></Input>
                    {errors.email && (
                      <p style={{ marginTop: "6px", color: "#ff3333" }}>
                        {errors.email}
                      </p>
                    )}
                  </FormGroup>
                  <Button>ثبت نام</Button>
                </Form>
                <Row>
                  <p>
                    قبلا ثبت نام کرده اید؟ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/log-in">وارد شوید</a>
                  </p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>تائید شماره موبایل</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3>
                    کد ارسال شده به شماره همراه ثبت شده را در کادر زیر وارد
                    کنید.
                  </h3>
                  <input
                    type="text"
                    name="submitCode"
                    onChange={handelSubmitCode}
                  ></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "blue" }}
                    onClick={handelCodeSubmit}
                  >
                    ارسال
                  </Button>
                  <Button
                    variant="secondary"
                    style={{ backgroundColor: "red" }}
                    onClick={handleClose}
                  >
                    انصراف
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default SignUp;
