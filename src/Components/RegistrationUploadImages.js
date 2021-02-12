import React from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UserDashboardNav from "./UserDashboardNav";
import { Container, Row, Col, Button } from "reactstrap";
import UserIDCardUploader from "../Components/UserIDCardUploader";
import UserBankCardUploader from "../Components/UserBankCardUploader";
import UserSelfiUploader from "../Components/UserSelfiUploader";
import "../styles/components/RegistrationUploadImages.scss";

function RegistrationUploadImages() {
  const saveAndContinue = () => {
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
      x.idcardpic = Response.data.data.idcardpic;
      x.bankcardpic = Response.data.data.bankcardpic;
      x.selfiepic = Response.data.data.selfiepic;
      localStorage.setItem("userData", JSON.stringify(x));
      window.location.reload();
    });
  };
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
              <h2 className="h2Header">بارگذاری تصاویر هویتی</h2>
            </Row>
            <Row>
              <Col lg="4">
                <UserIDCardUploader />
              </Col>
              <Col lg="4">
                <UserBankCardUploader />
              </Col>
              <Col lg="4">
                <UserSelfiUploader />
              </Col>
            </Row>
            <Row>
              <Button className="SaveButton" onClick={saveAndContinue}>
                ذخیره و ادامه
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default RegistrationUploadImages;
