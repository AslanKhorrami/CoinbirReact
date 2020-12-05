import React from "react";
import { Col, Container, Row } from "reactstrap";

class WhyOfUse extends React.Component {
  render() {
    return (
      <Container fluid={true} className="WhyOfUse">
        <Row>
          <h2>چرا باید از ارزهای دیجیتال استفاده کرد؟</h2>
        </Row>
        <Row className="ResponsiveView">
          <Col md="4" sm="12" className="clearfix">
            <img src={require("../Images/MainPage/multi-uses.png")} alt="" />
            <p>
              رمز ارزها امروزه در حال تبدیل شدن به یکی از مهمترین عوامل اقتصادی
              و تجاری هستند. با وجود قوانین ارائه شده از سوی دولت و بانک مرکزی
              جمهوری اسلامی، استفاده از رمز ارزها در ایران نیز رو به افزایش و
              گسترده شدن خواهد رفت.
            </p>
          </Col>
          <Col md="4" sm="12" className="clearfix">
            <img src={require("../Images/MainPage/exchange.png")} alt="" />
            <p>
              از جذابت ترین و محبوب ترین امکانات رمز ارزها، امکان تبدیل کردن رمز
              ارزها به یکدیگر و همچنین امکان ارسال فوری و بی دردسر آنها به گوشه
              گوشه دنیا بدون هیچ محدودیتی است. همین امر باعث مورد توجه قرار
              گرفتن رمز ارزها در همه کشورها علی الخصوص ایران شده است.
            </p>
          </Col>
          <Col md="4" sm="12" className="clearfix">
            <img src={require("../Images/MainPage/investing.png")} alt="" />
            <p>
              یکی دیگر از امکانات رمز ارزها، قابلیت سرمایه گذاری آنهاست. با
              مطالعه، شرکت در کلاس های حضوری و آنلاین کوین بیت و آشنا شدن با این
              پدیدهای سودآور، این امکان برای شما وجود خواهد داشت که سرمایه خود
              را چندین برابر کنید.
            </p>
          </Col>
        </Row>
        <Row className="ResponsiveView">
          <Col md="4" sm="12" className="clearfix">
            <img src={require("../Images/MainPage/security.png")} alt="" />
            <p>
              از دیگر امکانات رمز ارزها می توان به امنیت بالای آنها اشاره نمود.
              امنیت شبکه رمز رزها به گونه ای قوی و امن طراحی شده که نفوذ به آن
              تقریبا غیر ممکن است. بنابراین برای مدیریت حساب رمز ارزهای خود تنها
              کافی است از کیف پول های سخت افزاری و یا نرم افزاری معتبر استفاده
              نمائید.
            </p>
          </Col>
          <Col md="4" sm="12" className="clearfix">
            <img
              src={require("../Images/MainPage/sanctions-override.png")}
              alt=""
            />
            <p>
              وجود تحریم های بانکی علیه کشورمان ایران، باعث شده که بسیاری از
              تجار عزیز و افرادی که با خارج از مرزهای این مرز و بوم تبادلات مالی
              دارند، به مشکل برخورند. از این رو این دسته از افراد می توانند به
              راحتی با استفاده از رمز ارزها تحریم ها را دور بزنند و تبادلات مالی
              خود را انجام دهند.
            </p>
          </Col>
          <Col md="4" sm="12" className="clearfix">
            <img src={require("../Images/MainPage/mining.png")} alt="" />
            <p>
              دیگر راه بدست آوردن رمز ارزها استخراج یا به اصطلاح ماین کردن
              آنهاست. با خرید دستگاه های مخصوص استخراج، می توانید ارز مورد نظر
              را استخراج کنید تا علاوه بر ایجاد اشتغال در این زمنیه، از افزایش
              قیمت ارزهای استخراج شده به سود برسید.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhyOfUse;
