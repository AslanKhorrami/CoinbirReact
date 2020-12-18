import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "reactstrap";
import { Card } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserAuthentication() {
  document.title = "احراز هویت";
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
              <h1>احراز هویت</h1>
            </Row>
            <Row>
              <Col sm="6">
                <p>جهت ارسال مدارک دکمه ارسال مدارک را انتخاب نمائید</p>
              </Col>
              <Col sm="6">
                <input type="file"></input>
              </Col>
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UserAuthentication;
