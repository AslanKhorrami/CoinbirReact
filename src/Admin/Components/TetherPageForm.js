import React, { useState } from "react";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";
import "../Styles/TetherPriceEdit.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNavBar from "../Components/SideNavBar";
import useForm from "./useForm";
import Validate from "../Functions/ValidateTetherPrice";

function TetherPageForm() {
  const { values, handelChange, handelSubmit, errors } = useForm(
    submit,
    Validate
  ); // This is how we destructure custom hook we created

  function submit() {
    console.log("submited");
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
                    placeholder="ارزش تتر به تومان"
                    onChange={handelChange}
                    value={values.tetherValue}
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
