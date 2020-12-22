import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import { Card } from "react-bootstrap";
import UserDashboardNav from "../Components/UserDashboardNav";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.min.js";
import TablePagination from "@material-ui/core/TablePagination";

function UserWallet() {
  document.title = "کیف پول";
  const settings = {
    rtl: true,
    startPosition: -1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  };

  // pagination related
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
              <h1>کیف پول</h1>
            </Row>
            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">نام رمز ارز</th>
                      <th scope="col">مقدار ارز</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ریال</td>
                      <td>1000000000 ریال</td>
                      <td>افزایش / برداشت</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img
                          // src={require(`../Images/HomeTable/${coin.Name}.png`)}
                          src={require(`../Images/HomeTable/Bitcoin.png`)}
                          // alt={`${coin.Name}`}
                          alt="بیت کوین"
                        />
                        بیت کوین
                      </td>
                      <td>0.85</td>
                      <td>خرید / فروش/ برداشت</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        <img
                          // src={require(`../Images/HomeTable/${coin.Name}.png`)}
                          src={require("../Images/HomeTable/Ethereum.png")}
                          // alt={`${coin.Name}`}
                          alt="بیت کوین"
                        />
                        Ethereum
                      </td>
                      <td>0.85</td>
                      <td>خرید / فروش/ برداشت</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        <img
                          // src={require(`../Images/HomeTable/${coin.Name}.png`)}
                          src={require("../Images/HomeTable/Tether.png")}
                          // alt={`${coin.Name}`}
                          alt="بیت کوین"
                        />
                        Tether
                      </td>
                      <td>0.85</td>
                      <td>خرید / فروش/ برداشت</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>
                        <img
                          // src={require(`../Images/HomeTable/${coin.Name}.png`)}
                          src={require("../Images/HomeTable/TRON.png")}
                          // alt={`${coin.Name}`}
                          alt="بیت کوین"
                        />
                        TRON
                      </td>
                      <td>0.85</td>
                      <td>خرید / فروش/ برداشت</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>
                        <img
                          // src={require(`../Images/HomeTable/${coin.Name}.png`)}
                          src={require("../Images/HomeTable/Bitcoin Cash.png")}
                          // alt={`${coin.Name}`}
                          alt="بیت کوین"
                        />
                        Bitcoin Cash
                      </td>
                      <td>0.85</td>
                      <td>خرید / فروش/ برداشت</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
            <Row>
              <h3 className="h3-middle">مدارک بارگذاری شده</h3>
            </Row>
            <Row>
              <OwlCarousel
                className="owl-theme"
                loop={false}
                margin={10}
                nav
                items="3"
                {...settings}
              >
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1606787619180-fac5ebe67ad8?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1547516508-4c1f9c7c4ec3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1606788167991-f12768b6dc06?ixid=MXwxMjA3fDF8MHxzZWFyY2h8OXx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1558458580-23a6eb22a071?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1558458580-23a6eb22a071?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1558458580-23a6eb22a071?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1558458580-23a6eb22a071?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">نمایش تصویر</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </OwlCarousel>
            </Row>
            <Row>
              <h3 className="h3-middle">تراکنش ها</h3>
            </Row>
            <Row>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">شماره کارت</th>
                      <th scope="col">نام بانک</th>
                      <th scope="col">مبلغ (ریال)</th>
                      <th scope="col">کد پیگیری</th>
                      <th scope="col">وضعیت تراکنش</th>
                      <th scope="col">ساعت</th>
                      <th scope="col">تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td>1234567890123456</td>
                      <td>ملت</td>
                      <td>100000000</td>
                      <td>12345678</td>
                      <td>موفق</td>
                      <td>16:30</td>
                      <td>1399-09-26</td>
                    </tr>
                  </tbody>
                </table>
                <TablePagination
                  component="div"
                  count={14}
                  page={page}
                  onChangePage={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 15, 20]}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UserWallet;
