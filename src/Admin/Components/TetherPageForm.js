import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";
import "../Styles/TetherPriceEdit.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNavBar from "../Components/SideNavBar";
import tetherValidate from "../Functions/ValidateTetherPrice";

function TetherPageForm(props) {
  const [errors, setErrors] = useState({});
  const [tetherValues, setTetherValues] = useState({ tetherValue: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handelChange = (event) => {
    setTetherValues({
      ...tetherValues, // Here, we keep the original array, and next we just update the parts we need (we have just one field yet, so we shouldnt copy original array here)
      [event.target.name]: event.target.value,
      // [event.target.name]: addCommas(removeNonNumeric(event.target.value)), // Here, we create an object and push it to array
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrors(tetherValidate(tetherValues));
    setIsSubmitting(true);
  };
  useEffect(() => {
    //Check if there is no error and then call th callback()
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
  }, [errors]);

  function submit() {
    const auth = localStorage.getItem("accessToken");
    const subData = {
      id: 0,
      tetherRialValue: tetherValues.tetherValue * 10,
    };

    axios({
      method: "post",
      url: "https://coinbit-backend.com/api/Config/updateconfig",
      data: JSON.stringify(subData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    }).then(() => {
      setMessage("تغییرات با موفقیت ثبت شد!");
      setInterval(() => {
        window.location.reload(false);
      }, 3000);
    });
  }
  return (
    <div className="admin-panel-side-navbar">
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <SideNavBar />
          </Col>
          <Col lg="10" className="AdminPanelArea">
            <Row>
              <h1>صفحه ویرایش قیمت تتر</h1>
            </Row>
            <Row>
              {message && <p>{message}</p>}
              <Form
                onSubmit={handelSubmit}
                className="tetherPriceForm"
                noValidate
              >
                <Form.Group controlId="TetherValue">
                  <Form.Label>ارزش تومانی</Form.Label>
                  <Form.Control
                    className={`${errors.tetherValue && "innputError"}`}
                    type="text"
                    name="tetherValue"
                    placeholder={
                      "" +
                      (props.tetherRialValue / 10) // this two line trick change int to string
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    onChange={handelChange}
                    value={tetherValues.tetherValue}
                    autoComplete="off"
                    autoFocus={true}
                  />
                  {errors.tetherValue && (
                    <p className="error">{errors.tetherValue}</p>
                  )}
                </Form.Group>
                <Button type="submit">ذخیره</Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TetherPageForm;
