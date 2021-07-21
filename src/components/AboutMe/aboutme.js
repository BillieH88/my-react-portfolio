import "./aboutme.css"
import React from "react";

import {Card, Button} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import Footer from "../footer/footer";

import * as Icon from 'react-bootstrap-icons';

export default function AboutMe() {
    return (
        <div className="aboutme">
          <Container >
            <Col md="8">
                <Row>
                    <Card>
                        <Card.Header> About me </Card.Header>
                        <Card.Body className="bg-success">
                            <Icon.Person color="royalblue" size={96} />
                            <Card.Title>
                                Hi, Am Lernantino <br/>
                                Independent Freelancer and Web developer.
                            </Card.Title>
                            <Card.Text>
                                I Like to create amazing stuff
                            </Card.Text>
                            <Button> Hire me </Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
          </Container>
            <br/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

