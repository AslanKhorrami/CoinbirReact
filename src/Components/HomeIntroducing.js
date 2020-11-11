import React from "react";
import { Container, Row, Col } from "reactstrap";

class HomeIntroducing extends React.Component {
  render() {
    return (
      <Container fluid={true} className="HomeIntroducing">
        <Row>
          <Col>
            <h2>کوین بیت چرا؟</h2>

            <p>
              کوین بیت یک بستر امن، سریع و قابل اعتماد است که با توجه به
              امکاناتی که در اختیار شما قرار می دهد، آرامش خیال و لذت یک خرید
              آسان و مطمئن که همه به دنبال آن هستند را برای شما به ارمغان می
              آورد. از قابلیت ها و امکانات کوین بیت می توان به رابط کاربری آسان
              و زیبا در تمامی دستگاه ها، امنیت، پشتیبانی آنلاین، قیمت های لحظه
              ای و آنلاین، کیف پول های نرم افزاری (به زودی) و سخت افزاری، ابزار
              تحلیل و چارت قیمتی (به زودی)، اخبار لحظه ای (به زودی)، ارائه
              تجهیزات استخراج (ماینینگ)، آموزش آنلاین (به زودی)، مشاوره برای
              سرمایه گذاری و ... اشاره نمود.
            </p>
            <p>
              همچنین وجود دو دفتر در شهر تهران و شهرستان سلماس به مشتریان عزیز
              این امکان را میدهد برای انجام خرید و فروش های خود، انجام مشاوره
              های مالی و سرمایه گذاری و آشنایی با تجهیزات استخراج و ... با
              مراجعه به این دفاتر، خدمات مد نظر خود را دریافت کنند.
            </p>
          </Col>
        </Row>
        <Row className="HomeIntroducingPadding">
          <Col sm="3">
            <img
              src={require("../Images/MainPage/online-real-pricing.png")}
              alt=""
              className="intro-img"
            />
            <h4>قیمت لحظه ای و آنلاین</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/online-support.png")}
              alt=""
              className="intro-img"
            />
            <h4>پشتیبانی آنلاین</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/high-security.png")}
              alt=""
              className="intro-img"
            />
            <h4>امنیت بالا</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/user-friendly-design.png")}
              alt=""
              className="intro-img"
            />
            <h4>رابط کاربری ساده و زیبا</h4>
          </Col>
        </Row>
        <Row className="HomeIntroducingPadding">
          <Col sm="3">
            <img
              src={require("../Images/MainPage/mining-equipment.png")}
              alt=""
              className="intro-img"
            />
            <h4>تجهیزات استخراج (ماینینگ)</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/online-news.png")}
              alt=""
              className="intro-img"
            />
            <h4>اخبار لحظه ای (به زودی)</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/analysis-tools.png")}
              alt=""
              className="intro-img"
            />
            <h4>ابزار تحلیل و چارت قیمتی (به زودی)</h4>
          </Col>
          <Col sm="3">
            <img
              src={require("../Images/MainPage/wallets.png")}
              alt=""
              className="intro-img"
            />
            <h4>کیف پول سخت افزاری و نرم افزاری (به زودی)</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeIntroducing;
