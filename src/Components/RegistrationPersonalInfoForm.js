import React, { useState, useEffect } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";
import moment from "moment-jalaali";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UserDashboardNav from "./UserDashboardNav";
import StatusID1RegValidator from "../Admin/Functions/StatusID1RegValidator";
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

function RegistrationPersonalInfoForm() {
  const [statusID1Reg, setStatusID1Reg] = useState({});
  const [bankNames, setBankNames] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelChange = (event) => {
    setStatusID1Reg({
      ...statusID1Reg,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(StatusID1RegValidator(statusID1Reg));
    setIsSubmitting(true);
    submit();
  };

  const handelBirthday = (event) => {
    setStatusID1Reg({
      ...statusID1Reg,
      Birthday: moment.unix(event).format(),
    });
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
    // console.log("submited!");
    await axios({
      method: "post",
      url: "https://coinbit-backend.com/api/Customer/updateCustomer",
      data: {
        customer_id: JSON.parse(localStorage.getItem("userData")).id,
        father_name: statusID1Reg.FatherName,
        tel: statusID1Reg.HomeTel,
        birth_date: statusID1Reg.Birthday,
        national_code: statusID1Reg.IDnumber,
        bank_id: statusID1Reg.BankName,
        card_number: statusID1Reg.BankCardNumber,
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userData")).accessToken
        }`,
      },
    }).then(() => {
      axios({
        method: "get",
        url: "https://coinbit-backend.com/api/Customer/get",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userData")).accessToken
          }`,
        },
      }).then((Response) => {
        const x = JSON.parse(localStorage.getItem("userData"));
        x.fatherName = Response.data.data.fatherName;
        x.tel = Response.data.data.tel;
        x.birthdate.DateTime = Response.data.data.birthDate;
        x.nationalCode = Response.data.data.nationalCode;
        x.bank_id = Response.data.data.bank_id;
        x.card_number = Response.data.data.card_number;
        localStorage.setItem("userData", JSON.stringify(x));
        window.location.reload();
      });
    });
  }

  // proper render handler
  useEffect(() => {
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Customer/get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userData")).accessToken
        }`,
      },
    }).then((Response) => {
      if (
        Response.data.data.fatherName !==
        JSON.parse(localStorage.getItem("userData")).fatherName
      ) {
        const x = JSON.parse(localStorage.getItem("userData"));
        x.fatherName = Response.data.data.fatherName;
        // localData = JSON.stringify(x);
        localStorage.setItem("userData", JSON.stringify(x));
        window.location.reload();
      }
    });
    return () => {};
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Bank/get_banks",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userData")).accessToken
        }`,
      },
    }).then((Response) => {
      setBankNames(Response.data.data);
    });
    return () => {};
  }, []);

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
              <h1>تکمیل مدارک</h1>
            </Row>
            <Row>
              <h4>
                کاربر گرامی، به منظور بهره مندی از خدمات صرافی کوین بیت و همچنین
                امکان خرید و فروش در سایت، ابتدا باید از طریق فرم ذیل، اقدام به
                تکمیل اطلاعات خود و احراز هویت نمائید.
              </h4>
            </Row>
            <Row>
              <Form noValidate onSubmit={handelSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="FatherName">نام پدر</Label>
                      <Input
                        type="text"
                        name="FatherName"
                        id="FatherName"
                        autoComplete="off"
                        onChange={handelChange}
                      ></Input>
                      {errors.FatherName && <p>{errors.FatherName}</p>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="HomeTel">شماره ثابت</Label>
                      <Input
                        type="tel"
                        name="HomeTel"
                        id="HomeTel"
                        onChange={handelChange}
                      ></Input>
                      {errors.HomeTel && <p>{errors.HomeTel}</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <h4>تاریخ تولد</h4>
                    <Row>
                      <FormGroup>
                        <DatePicker
                          name="Birthday"
                          id="Birthday"
                          cancelOnBackgroundClick={true}
                          onChange={handelBirthday}
                        />
                        {errors.Birthday && <p>{errors.Birthday}</p>}
                      </FormGroup>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="IDnumber">شماره ملی</Label>
                      <Input
                        type="text"
                        name="IDnumber"
                        id="IDnumber"
                        onChange={handelChange}
                      ></Input>
                      {errors.IDnumber && <p>{errors.IDnumber}</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="BankName">نام بانک</Label>
                      <Input
                        type="select"
                        name="BankName"
                        id="BankName"
                        onChange={handelChange}
                      >
                        <option>انتخاب بانک</option>
                        {bankNames.map((bank, idx) => (
                          <option key={idx} value={bank.id}>
                            {bank.title}
                          </option>
                        ))}
                      </Input>
                      {errors.BankName && <p>{errors.BankName}</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <Label for="BankCardNumber">شماره کارت</Label>
                      <Input
                        type="text"
                        name="BankCardNumber"
                        id="BankCardNumber"
                        onChange={handelChange}
                      ></Input>
                      {errors.BankCardNumber && <p>{errors.BankCardNumber}</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Col sm="12">
                  <Button type="submit">ذخیره اطلاعات</Button>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default RegistrationPersonalInfoForm;
