import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserWithdraws() {
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
              <h1>برداشت های من</h1>
            </Row>
            <Row>
              <h2 className="h3-middle">رمز ارزها</h2>
            </Row>
            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">نام ارز</th>
                      <th scope="col">مقدار</th>
                      <th scope="col">شماره کیف پول</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">تاریخ درخواست</th>
                      <th scope="col">ساعت درخواست</th>
                      <th scope="col">تاریخ ارسال</th>
                      <th scope="col">ساعت ارسال</th>
                      <th scope="col">کد رهگیری</th>
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
            <Row>
              <h2 className="h3-middle">ریالی</h2>
            </Row>
            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">نام ارز</th>
                      <th scope="col">مقدار</th>
                      <th scope="col">شماره حساب / کارت</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">تاریخ درخواست</th>
                      <th scope="col">ساعت درخواست</th>
                      <th scope="col">تاریخ ارسال</th>
                      <th scope="col">ساعت ارسال</th>
                      <th scope="col">کد رهگیری</th>
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

export default UserWithdraws;
