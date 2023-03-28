import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function MainNavbar() {
  const {user} = useUser();
  const style = {
    border: "3px solid #328BE9",
    borderRadius: "50%",
  };
  return (
    <Navbar bg="dark" variant="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="/">Find an Imam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {user
           ? <Nav.Link href="/register">Add Vacancy</Nav.Link>
           : <Nav.Link href="/api/auth/login">Add Vacancy</Nav.Link>
           }
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Contact Me</Nav.Link>
            {user
           ? <Nav.Link href="/profile">Profile</Nav.Link>
           : <></>
           }
           {user
           ? <Nav.Link href="/api/auth/logout">Log out</Nav.Link>
           : <Nav.Link href="/api/auth/login">Log in</Nav.Link>
           }
          </Nav>
          {/* <Image
              src={user.picture}
              alt={user.name}
              style={style}
              width={50}
              height={50}
            /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
