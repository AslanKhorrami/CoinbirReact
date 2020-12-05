import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";

function HeroImage() {
  return (
    <Container fluid={true} className="HeroImage">
      <Row className="HeroImageRow">
        <Col lg="6" className="HeroImageText">
          <h1>صرافی کوین بیت</h1>
          <p>
            بی‌شک رمزارزها در آینده اقتصاد دنیا و نسل جدید اینترنت نقش ویژه‌ای
            خواهند داشت و پیش‌بینی‌ها حکایت از افزایش چشمگیر ارزش قیمتی و کاربرد
            آنها دارد. مجموعه کریپتولند با ایجاد یک پلتفرم اتوماتیک و پیشرفته،
            این امکان را برای شما فراهم نموده که بدون نگرانی و در هر زمانی خرید،
            فروش و تبادل رمزارزهای خود را انجام دهید. خصوصیت مهم اکسچنج
            کریپتولند کارمزد کم و پیشتیبانی از 200+ رمزارز معتبر است.
          </p>
          <Link to="/register">ثبت نام</Link>
        </Col>
        <Col lg="6">
          <img
            src={require("../Images/MainPage/heroimage.gif")}
            alt="Hero Image"
          ></img>
        </Col>
      </Row>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "HeroImage",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: false,
        }}
      />
    </Container>
  );
}

export default HeroImage;
