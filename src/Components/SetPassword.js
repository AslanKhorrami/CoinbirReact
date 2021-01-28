import React, { useState, useEffect } from "react";
import SetPassordValidator from "../Admin/Functions/SetPasswordValidator";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
} from "reactstrap";

function SetPassword() {
  document.title = "انتخاب رمز عبور";

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [redirect, setRedirect] = useState(false);

  const mobileNo = localStorage.getItem("Mobile No.");

  const handelChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
    setPassword2({
      ...password2,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    event.persist();
    setErrors(SetPassordValidator(password, password2));
    setIsSubmitting(true);
  };
  useEffect(() => {
    //Check if there is no error and then call th callback()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
    // eslint-disable-next-line
  }, [errors, isSubmitting]);

  function submit() {
    axios({
      method: "post",
      url: `https://coinbit-backend.com/api/Customer/customerchangepwd?mobile=${mobileNo}&password=${password.Password}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => {
        if (Response.data.isSuccess) {
          setMessage(
            "اطلاعات با موفقیت ثبت شد. برای ادامه، لطفا وارد حساب کاربری خود شوید."
          );
          setTimeout(() => {
            setRedirect(true);
          }, 3000);
        } else {
          setMessage("کاربر موجود نیست.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // localStorage.removeItem("Mobile No.")
  }, [redirect]);

  return (
    <div>
      {mobileNo ? (
        <div>
          {redirect ? (
            <Redirect to={{ pathname: "/log-in" }} />
          ) : (
            <Container>
              <Row>
                {message && <p style={{ color: "red" }}>{message}</p>}
                <Form onSubmit={handelSubmit} noValidate>
                  <FormGroup>
                    <Label for="Password">رمز عبور</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="رمز عبور خود را انتخاب کنید (الزامی)"
                      onChange={handelChange}
                      autoComplete="none"
                      autoFocus={true}
                    ></Input>
                    {errors.Password && (
                      <p style={{ color: "red" }}>{errors.Password}</p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="Password2">نام خانوادگی</Label>
                    <Input
                      type="password"
                      name="Password2"
                      id="Password2"
                      placeholder="رمز عبور خود  را تکرار کنید (الزامی)"
                      onChange={handelChange}
                      autoComplete="none"
                    ></Input>
                    {errors.Password2 && (
                      <p style={{ color: "red" }}>{errors.Password2}</p>
                    )}
                  </FormGroup>

                  <Button>ذخیره</Button>
                </Form>
              </Row>
            </Container>
          )}
        </div>
      ) : (
        <Redirect to={{ pathname: "/register" }} />
      )}
    </div>
  );
}

export default SetPassword;
