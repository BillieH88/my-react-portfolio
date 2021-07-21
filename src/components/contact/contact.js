import "./contact.css"

import {Form, Button} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import Footer from "../footer/footer";

function writeError(msg){
    // write error msg to user
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").className = "alert alert-danger";
}

function handleSubmit(e){
    console.log('subb==>>')
    //handle button click
    e.preventDefault();
    // get name
    let name = document.getElementById("name").value;
    // email
    let email = document.getElementById("email").value;
    // message
    let msg = document.getElementById("mesg").value;
    // check null
    if(name === "" || name == null){
        // function call
        writeError("Name is required !!")
    }
    //check email
    else if(email === "" || email == null){
        // function call
        writeError("Email is required !!")
    }
    // check message
    else if(msg === "" || name == null){
        // function call
        writeError("Message is required !!")
    }
}


export default function Contact() {
    return (
        <div className="contact">
            <Container>
                <h2 className="text-white">   Contact </h2> &nbsp;
                <Row>
                    <Col md="8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label> Name </Form.Label>
                            <Form.Control  id="name" placeholder="Enter name "/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label> Message </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Message" id="mesg" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button> &nbsp; <br/>
                        <p id="msg"> </p>
                    </Form>
                    </Col>
                </Row>
                <Row/>
            </Container>
            <div>
                <Footer/>
            </div>
        </div>

    )
}

