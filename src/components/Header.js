import React from "react";
import { Navbar, Container, Button,Image } from "react-bootstrap";
import Logo from "../img/microphone-clipart.png"

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="shadow">
      <Container fluid>
        <Navbar.Brand>
          <Image width="90px" height="50px" src={Logo} className="d-inline-block align-bottom"/>
          <span className="h3 d-inline-block ml-lg-1" style={{fontFamily:"cursive"}}>Web Speech</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className="justify-content-end">
          <a
            href="https://github.com/chigboguorji/web-speech.git"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline-light">Github</Button>
          </a>
          <a
            href="https://chigboguorji.netlify.com"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline-light">Developer</Button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
