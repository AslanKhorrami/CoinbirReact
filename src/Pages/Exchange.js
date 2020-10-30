import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Exchange() {
  return (
    <Container fluid={true} className="Exchange">
      <Row>
        <h1>به صرافی کوین بیت خوش آمدید</h1>
      </Row>
      <Row>
        <Jumbotron>
          <h3>
            لطفا قبل از اقدام به خرید و فروش ارز دیجیتال ابتدا سوالات متداول را
            مطالعه نمایید
          </h3>
        </Jumbotron>
      </Row>
      <Row>
        <Col lg={6}>
          <Row>
            <h2>خرید از کوین بیت</h2>
          </Row>
          <Form>
            <FormGroup>
              <Label for="AllCurrencies">ارز مورد نظر را انتخاب کنید</Label>
              <Input type="select" name="currencies" id="AllCurrencies">
                <option>بیت کوین</option>
                <option>اتریوم</option>
                <option>ریپل</option>
                <option>ترون</option>
                <option>تتر</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Amount">مقدار ارز مورد نظر را وارد کنید</Label>
              <Input
                type="text"
                name="amount"
                id="Amount"
                autoComplete="false"
              ></Input>
            </FormGroup>
            <FontAwesomeIcon icon={["fas", "sync-alt"]}></FontAwesomeIcon>
            <FormGroup>
              <Label for="Toman">قیمت به تومان</Label>
              <Input
                type="text"
                name="toman"
                id="Toman"
                autoComplete="false"
              ></Input>
            </FormGroup>
            <Button>ثبت درخواست خرید</Button>
          </Form>
        </Col>
        <Col lg={6}>
          <Row>
            <h2>فروش به کوین بیت</h2>
          </Row>
          <Form>
            <FormGroup>
              <Label for="AllCurrencies">ارز مورد نظر را انتخاب کنید</Label>
              <Input type="select" name="currencies" id="AllCurrencies">
                <option>بیت کوین</option>
                <option>اتریوم</option>
                <option>ریپل</option>
                <option>ترون</option>
                <option>تتر</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Amount">مقدار ارز مورد نظر را وارد کنید</Label>
              <Input
                type="text"
                name="amount"
                id="Amount"
                autoComplete="false"
              ></Input>
            </FormGroup>
            <FontAwesomeIcon icon={["fas", "sync-alt"]}></FontAwesomeIcon>
            <FormGroup>
              <Label for="Toman">قیمت به تومان</Label>
              <Input
                type="text"
                name="toman"
                id="Toman"
                autoComplete="false"
              ></Input>
            </FormGroup>
            <Button>ثبت درخواست خرید</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Exchange;
