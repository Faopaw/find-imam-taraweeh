import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function MainNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useUser();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Find an Imam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* {user
           ? <Nav.Link href="/register">Add Vacancy</Nav.Link>
           : <Nav.Link href="/api/auth/login">Add Vacancy</Nav.Link>
           } */}
              <Nav.Link href="/register">Add Vacancy</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link onClick={handleShow} href="#">
                FAQ
              </Nav.Link>
              {user ? <Nav.Link href="/profile">Profile</Nav.Link> : <></>}
              {user ? (
                <Nav.Link href="/api/auth/logout">Log out</Nav.Link>
              ) : (
                <Nav.Link href="/api/auth/login">Log in</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FAQ</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>
            <strong>Do I have to sign up to register a vacancy?</strong>
          </h3>

          <p>
            No, you may register a vacancy by simply filling out the
            registration form. signing up is optional.
          </p>
          <br></br>
          <h3>
            <strong>
              I registered a vacancy, why is it not appearing on the homepage?
            </strong>
          </h3>

          <p>
            Once you have submitted a vancancy it will be processed by the team.
            Once approved it will appear on the home page of the app
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
