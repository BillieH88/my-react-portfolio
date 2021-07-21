import "./portfolio.css"

import {Container, Row, Col, Card} from "react-bootstrap";

import img2 from "../../Assets/2.jpeg"
import img3 from "../../Assets/3.jpeg"
import img4 from "../../Assets/4.jpeg"
import img5 from "../../Assets/5.png"
import Footer from "../footer/footer";

export default function Portfolio()  {
    return (
        <div className="portfolio">
          <Container>
              <h2 className="text-white">   Portfolio </h2> &nbsp;
              <Row>
                      <Col xs md={6}>
                          <Card>
                              <Card.Img variant="top" src={img2} />
                              <Card.Body>
                                  <Card.Text>
                                      Art of software development cycle
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                  <Col xs md={6}>
                      <Card>
                          <Card.Img variant="bottom" src={img4}/>
                          <Card.Body>
                              <Card.Text>
                                  Art of the design tool for creative development
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <br/>
                  <Col xs md={6}>
                      <Card>
                          <Card.Img variant="bottom"  src={img5} />
                          <Card.Body>
                              <Card.Text>
                                  Template building using the mean stack
                              </Card.Text>
                          </Card.Body>

                      </Card>
                  </Col>
                  <Col xs md={6}>
                      <Card>
                          <Card.Img variant="bottom" src={img3}/>
                          <Card.Body>
                              <Card.Text>
                                 Software lifecyle
                              </Card.Text>
                          </Card.Body>

                      </Card>
                  </Col>
              </Row>
              <br/>
          </Container>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

