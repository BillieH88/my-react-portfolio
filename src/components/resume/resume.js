import Footer from "../footer/footer";

import "./resume.css"

import {Container, Row, Col } from "react-bootstrap";
import {Card, Button} from "react-bootstrap";

export default function Resume() {
    return (
        <div className="resume">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header> Resume </Card.Header>
                            <Card.Body className="bg-success">
                                <Card.Title> Front end technologies </Card.Title>
                                <Card.Text>
                                   <ul>
                                       <li> Javascript </li>
                                       <li> React JS </li>
                                       <li> Angular js </li>
                                       <li> Vue </li>
                                       <li> Next Js </li>
                                       <li> Bootstrap </li>
                                   </ul>
                                </Card.Text>
                                <br/>
                                    <Card.Title> Backend technologies </Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li> Node js</li>
                                            <li> Laravel </li>
                                            <li> Flask </li>
                                        </ul>
                                    </Card.Text>
                                <Button variant="danger"> Download Resume </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div>
                <Footer/>
            </div>
        </div>
    );
}