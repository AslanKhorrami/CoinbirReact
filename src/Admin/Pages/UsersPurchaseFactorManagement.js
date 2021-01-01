import React from "react";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";

function UserPurchaseFactorManagement() {
  return (
    <div className="admin-panel-side-navbar">
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <SideNavBar />
          </Col>
          <Col lg="10" className="AdminPanelArea">
            <Row>
              <h1>فاکتورهای فروش</h1>
            </Row>
            <Row>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>نام کاربر</th>
                    <th>ارز</th>
                    <th>مقدار</th>
                    <th>مبلغ (تومان)</th>
                    <th>تاریخ</th>
                    <th>ساعت</th>
                    <th>وضعیت</th>
                    <th>کد رهگیری</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>2</td>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>3</td>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>4</td>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>5</td>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPurchaseFactorManagement;
