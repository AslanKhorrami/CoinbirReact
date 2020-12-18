import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserDashboard() {
  document.title = "پیشخوان حساب کاربری";
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
              <h1>حساب کاربری</h1>
            </Row>
            <Row>
              <Col sm="12">
                <img
                  src={require("../Images/male-avatar.jpg")}
                  alt="User Avatar"
                  className="user-avatar"
                />
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  نام: <span>اصلان</span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  نام خانوادگی: <span>خرمی دیزجی</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  نام پدر: <span>حسین</span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  جنسیت: <span>مذکر</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  تاریخ تولد: <span>1371/04/18</span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  کد ملی: <span>1234567890</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  شماره همراه: <span>09398778617</span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  شماره ثابت: <span>77897805</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  آدرس ایمیل: <span>aslan.kh.dostan@gmail.com</span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  نام شرکت: <span>نر کلفتان</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="col-top-margin">
                <p>
                  آدرس:{" "}
                  <span>
                    تهران، میدان رسالت، خیابان فرجام، پلاک 837، واحد 3
                  </span>
                </p>
              </Col>
              <Col sm="6" className="col-top-margin">
                <p>
                  کد پستی: <span>1234567890123456</span>
                </p>
              </Col>
            </Row>
            <Row className="Bank-Accounts-List">
              <h3 className="h3-middle">لیست کارت بانکی های ثبت شده</h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" className="Bank-Name">
                        نام بانک
                      </th>
                      <th scope="col">شماره کارت</th>
                      <th scope="col">شماره شبا</th>
                      <th scope="col" className="Card-Date">
                        تاریخ انقضا کارت
                      </th>
                      <th scope="col" className="Card-Date">
                        تاریخ ثبت کارت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>بانک ملت</td>
                      <td>1234567890123456</td>
                      <td>1234567890</td>
                      <td>1403/03</td>
                      <td>1399/10/05</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
            <Row>
              <p>
                چنانچه مایل هستید اطلاعات تکمیلی خود را با ما به اشتراک بگذارید،
                از طریق تیکت، اطلاعات را به کارشناسان ما منتقل نمائید.
              </p>
              <p>
                برای افزودن شماره حساب های بیشتر به لیست بانک های ثبت شده خود،
                لطفا اطلاعات و تصاویر مربوطه را از طریق تیگت برای کارشناسان ما
                ارسال نمائید که پس از بررسی های نهایی به لیست حساب های مجاز جهت
                انجام تراکنش اضافه گردند.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UserDashboard;
