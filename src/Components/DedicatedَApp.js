import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DedicatedApp extends React.Component {
  render() {
    return (
      <Container fluid={true} className="DedicatedApp">
        <Row>
          <h2>اپلیکیشن اختصاصی کوین بیت</h2>
        </Row>
        <Row className="DedicatedAppDesc">
          <Col md="6" className="AppDesc">
            <p>
              اپلیکیشن اختصاصی کوین بیت، با رابط کاربری زیبا و جذاب، کاملترین
              امکانات در زمینه ارزهای دیجیتال را در اختیار شما مشتریان گرامی
              قرار می دهد که در ذیل مختصری از امکانات این اپلیکیشن آورده شده
              است:
            </p>
            <ul>
              <li>اطلاع از قیمت های لحظه ای رمز ارزها</li>
              <li>امکان خرید و فروش آنی و 24 ساعته</li>
              <li>ثبت نام و عضویت سریع</li>
              <li>مشاهده تغییرات رمز ارزها بصورت روزانه و هفتگی</li>
              <li>دسترسی و اتصال به کیف پول های نرم افزاری و کنترل حساب ها</li>
              <li>و ده ها امکانات دیگر ...</li>
            </ul>
            <Row className="DownloadButton">
              <Col md="6">
                <button>
                  <FontAwesomeIcon icon="robot" className="FontAwesome" />
                  به زودی
                </button>
              </Col>
              <Col md="6">
                <button>
                  <FontAwesomeIcon icon="apple-alt" className="FontAwesome" />{" "}
                  به زودی
                </button>
              </Col>
            </Row>
          </Col>
          <Col md="6" className="AppImage">
            <img src={require("../Images/MainPage/phone.png")} alt="" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DedicatedApp;
