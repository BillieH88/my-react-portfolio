import "./header.css"
import logo from "./Logos/headerpic.jpeg"

import {Nav, Navbar} from "react-bootstrap";



export default function Header() {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/about"> Lernantino </Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top "
                />{' '}
                <Navbar.Collapse>
                    <Nav  className="ml-auto my-2 my-lg-0 justify-content-end"
                          style={{ maxHeight: '100px' }}
                          navbarScroll>
                        <Nav.Link href="/about"> About me </Nav.Link>
                        <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
                        <Nav.Link href="/contact"> Contact </Nav.Link>
                        <Nav.Link href="/resume"> Resume </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

