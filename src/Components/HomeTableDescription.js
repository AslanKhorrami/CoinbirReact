import React from "react";
import { Col, Container, Row } from "reactstrap";

class HomeTableDescription extends React.Component {
  render() {
    return (
      // <div className="row HomeTableDescription">
      //   <div className="col-sm-4">
      //     <h3>10000</h3>
      //     <p>مشتریان کوین بیت</p>
      //   </div>
      //   <div className="col-md-4">
      //     <h3>10000</h3>
      //     <p> معامله انجام شده در کوین بیت</p>
      //   </div>
      //   <div className="col-md-4">
      //     <h3>10000</h3>
      //     <p>ارزش معاملات انجام شده</p>
      //   </div>
      // </div>
      <Container fluid={true} className="HomeTableDescription">
        <Row>
          <button>خرید و فروش آنلاین</button>
        </Row>
        <Row className="HomeTableDescription">
          <Col sm="4">
            <h3>10000</h3>
            <p>مشتریان کوین بیت</p>
          </Col>
          <Col sm="4">
            <h3>10000</h3>
            <p> معامله انجام شده در کوین بیت</p>
          </Col>
          <Col sm="4">
            <h3>10000</h3>
            <p>ارزش معاملات انجام شده</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeTableDescription;
