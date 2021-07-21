import "./footer.css"
import {Col, Container, Row} from "react-bootstrap";

import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className="footer">
            <hr/>
            <Container className="justify-content-center">
                <Row>
                    <Col md="12">
                        <a href="www.github.com"> <Icon.Github className="icon" color="royalblue" size={56} /> </a> &nbsp;&nbsp;
                        <a href="www.facebook.com"> <Icon.Facebook color="red" size={56} /> </a> &nbsp;&nbsp;
                        <a href="www.linkedin.com"> <Icon.Linkedin color="royalblue" size={56} /> </a> &nbsp;&nbsp;
                        <a href="www.discord.com"> <Icon.Discord color="green" size={56} /> </a> &nbsp;&nbsp;
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

