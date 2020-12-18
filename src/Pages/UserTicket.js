import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <h1>تیکت ها</h1>
            </Row>
            <Row>
              <button onClick={handleShow}>ثبت تیکت جدید</button>
              <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                dialogClassName="modal-90w"
              >
                <Modal.Header closeButton>
                  <Modal.Title>ارسال تیکت جدید</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Row>
                      <Col sm="6">
                        <Form.Group controlId="TicketSubject">
                          <Form.Label>عنوان</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus={true}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group controlId="TicketPriority">
                          <Form.Label>اولویت</Form.Label>
                          <Form.Control as="select">
                            <option>بالا</option>
                            <option>متوسط</option>
                            <option>کم</option>
                          </Form.Control>
                          <Form.Text className="text-muted">
                            با انتخاب اولویت مناسب، تیم پشتیبانی را در مسیر
                            پاسخگویی راهنمایی کنید.
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        className="TicketTextarea"
                        controlId="TicketText"
                      >
                        <Form.Label>متن تیکت</Form.Label>
                        <Form.Control as="textarea" rows={5}></Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Col sm="3">
                        <Form.Group>
                          <Form.File id="TicketAttachment" label="ضمیمه 1" />
                        </Form.Group>
                      </Col>
                      <Col sm="3">
                        <Form.Group>
                          <Form.File id="TicketAttachment" label="ضمیمه 2" />
                        </Form.Group>
                      </Col>
                      <Col sm="3">
                        <Form.Group>
                          <Form.File id="TicketAttachment" label="ضمیمه 3" />
                        </Form.Group>
                      </Col>
                      <Col sm="3">
                        <Form.Group>
                          <Form.File id="TicketAttachment" label="ضمیمه 4" />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <button variant="secondary" onClick={handleClose}>
                    ارسال
                  </button>
                  <button variant="primary" onClick={handleClose}>
                    انصراف
                  </button>
                </Modal.Footer>
              </Modal>
            </Row>
            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">عنوان</th>
                      <th scope="col">اولویت</th>
                      <th scope="col">تاریخ ارسال</th>
                      <th scope="col">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>تیکت</td>
                      <td>بالا</td>
                      <td>1399-09-26 14:30</td>
                      <td>در انتظار پاسخ</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>تیکت</td>
                      <td>بالا</td>
                      <td>1399-09-26 14:30</td>
                      <td>در انتظار پاسخ</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>تیکت</td>
                      <td>بالا</td>
                      <td>1399-09-26 14:30</td>
                      <td>در انتظار پاسخ</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>تیکت</td>
                      <td>بالا</td>
                      <td>1399-09-26 14:30</td>
                      <td>در انتظار پاسخ</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>تیکت</td>
                      <td>بالا</td>
                      <td>1399-09-26 14:30</td>
                      <td>در انتظار پاسخ</td>
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

export default UserTicket;
