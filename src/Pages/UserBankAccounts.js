import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserBankAccounts() {
  const [showAddAccount, setshowAddAccount] = useState(false);

  function ShowAddAccountsHandler() {
    setshowAddAccount(!showAddAccount);
  }
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
              <h1>حساب های بانکی</h1>
            </Row>
            <Row>
              <h2>افزودن حساب جدید</h2>
            </Row>
            <Row>
              <p>
                بعد از تائید اطلاعات وارده توسط تیم پشتیبانی، اطلاعات حساب جدید
                در جدول ذیل به نمایش در خواهد آمد.
              </p>
            </Row>
            <Row>
              <button onClick={ShowAddAccountsHandler}>افزودن حساب</button>
            </Row>
            {showAddAccount ? (
              <Row>
                <Form>
                  <Form.Row>
                    <Col sm="6">
                      <Form.Group controlId="TicketSubject">
                        <Form.Label>نام بانک</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus={true}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col sm="6">
                      <Form.Group controlId="TicketSubject">
                        <Form.Label>شماره کارت</Form.Label>
                        <Form.Control type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group controlId="TicketSubject">
                      <Form.Label>شماره شبا</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit">
                    ذخیره
                  </Button>
                </Form>
              </Row>
            ) : null}

            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">نام بانک</th>
                      <th scope="col">شماره کارت</th>
                      <th scope="col">شماره شبا</th>
                      <th scope="col">تاریخ انقضا</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ملت</td>
                      <td>1234567890123456</td>
                      <td>12345678901234567890</td>
                      <td>1400-04</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ملت</td>
                      <td>1234567890123456</td>
                      <td>12345678901234567890</td>
                      <td>1400-04</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ملت</td>
                      <td>1234567890123456</td>
                      <td>12345678901234567890</td>
                      <td>1400-04</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ملت</td>
                      <td>1234567890123456</td>
                      <td>12345678901234567890</td>
                      <td>1400-04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UserBankAccounts;
