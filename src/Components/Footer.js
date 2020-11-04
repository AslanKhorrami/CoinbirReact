import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid={true}>
          <Row>
            <Col lg="4">
              <img
                src={require("../Images/Logos/logo.coinbit.e.png")}
                alt="CoinBitLogo"
              />
            </Col>
            <Col lg="2">
              <h5>لینک های مفید</h5>
              <a href="/about" rel="noopener noreferrer">
                درباره ما
              </a>
              <a href="/contact-us" rel="noopener noreferrer">تماس با ما</a>
              <a href="/faq" rel="noopener noreferrer">سوالات متداول</a>
              <a href="/laws" rel="noopener noreferrer">قوانین سایت</a>

              {/* <a href="">درباره ما</a>
              <br />
              <a href="/#">تماس با ما</a>
              <br />
              <a href="#">سوالات متداول</a>
              <br />
              <a href="#">قوانین سایت</a>
              <br />
              <a href="#">ماشین حساب استخراج</a> */}
            </Col>
            <Col lg="2">
              <h5>شبکه های اجتماعی ما</h5>
              <p>
                ما را در شبکه های اجتماعی نیز دنبال کنین تا از آخرین اخبار و
                قیمت های احظه ای با خبر باشید.
              </p>
              <br />
              <Row className="SocialMedia">
                <a
                  href="https://www.instagram.com/farhadyousephi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a
                  href="https://t.me/coinbitiran_exchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "telegram-plane"]} />
                </a>
                <a
                  href="https://chat.whatsapp.com/JeZbBntjune6E8kSsNlgVL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
              </Row>
            </Col>
            <Col lg="2">
              <h5> خدمات ما</h5>
              {/* <a href="#">ماشین حساب ماینینگ</a> */}
              <p>ماشین حساب استخراج</p>
            </Col>
            <Col lg="2">
              <h5>راهنمای سایت</h5>
              <p>نحوه ثبت نام</p>
              <p>تکمیل مدارک ثبت نام</p>
              <p>خرید از کوین بیت</p>
              <p>فروش به کوین بیت</p>
              {/* <a href="#">نحوه ی ثبت نام</a>
              <br />
              <a href="#">تکمیل مدارک ثبت نام</a>
              <br />
              <a href="#">خرید از کوین بیت</a>
              <br />
              <a href="#">قروش به کوین بیت</a>
              <br /> */}
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <p className="copyright">
                کلیه حقوق مادی و معنوی این سایت متعلق به شرکت کوین بیت می باشد.
                استفاده از مطالب سایت با ذکر منبع بلامانع می باشد. 2020
                <FontAwesomeIcon icon={["fas", "copyright"]} />
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
