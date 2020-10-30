import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <Container fluid={true} className="ContactUs">
      <Row>
        <Col sm="12" className="contact-us-header">
          <h1>با ما در تماس باشید</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <p>
            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            <span>آدرس دفتر مرکزی: تهران، خیابان آزادی، برج های کاوه</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "phone"]} />
            <span>شماره دفتر: 02166581367</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
            <span>شماره همراه: 09120859814</span>
          </p>

          <p>
            <FontAwesomeIcon icon={["far", "clock"]} />
            <span>
              ساعات کاری دفتر: هر روز هفته از ساعت 8 صبح الی 6 بعد از ظهر
            </span>
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.0264813246015!2d51.383780657980274!3d35.700314273218154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00e394f16e49%3A0xdb0e041646f59404!2zVGVocmFuIFByb3ZpbmNlLCBUZWhyYW4sIEF6YWRpLCDZhdis2KrZhdi5INio2LHYrNiz2KfYstiMIDEzMTM1IDY0OTk3LCBJcmFu!5e0!3m2!1sen!2sca!4v1592498217815!5m2!1sen!2sca"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="TehranAddress"
          ></iframe>

          <br />
          <br />
          <p>
            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
            <span>
              آدرس شعبه 1: آذربایجان غربی، سلماس، خیابان امام، طبقه دوم داروخانه
              شبانه روزی
            </span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "phone"]} />
            <span>شماره دفتر: 04435228893</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["far", "clock"]} />
            <span>
              ساعات کاری دفتر: هر روز هفته از ساعت 8 صبح الی 6 بعد از ظهر
            </span>
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.5165706960697!2d44.764616203849215!3d38.197902075807136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4011ae12e1eb5d1f%3A0xb735651a23f73bd0!2z2K_Yp9ix2YjYrtin2YbZhyDYtNio2KfZhtmHINix2YjYstuM!5e0!3m2!1sen!2s!4v1592555170458!5m2!1sen!2s"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="1stBranchAddress"
          ></iframe>
        </Col>
        <Col lg="6">
          <form
            action=""
            className="needs-validation"
            noValidate
            autoComplete="off"
          >
            <div className="form-group">
              <label htmlFor="user-name">نام و نام خانوادگی</label>
              <br />
              <input
                type="text"
                className="form-control"
                id="user-name"
                name="user-name"
                placeholder="نام و نام خانوادگی خود را وارد کنید."
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">شماره همراه</label>
              <br />
              <input
                type="tel"
                className="form-control"
                id="phone-number"
                name="phone-number"
                placeholder="شماره همراه خود را وارد کنید."
                pattern="[0-9]{3}-[0-9]{7}"
              />
              <small>به این صورت وارد کنید: 1234567-912</small>
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">ایمیل (پست الکترونیک)</label>
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="آدرس ایمیل خود را وارد کنید. (الزامی)"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">متن پیغام</label>
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="متن پیام خود را بنویسید."
                required
              ></textarea>
            </div>
            <button type="submit">ارسال</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
