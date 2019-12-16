import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">AsanShar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dvertisinglist">Home</Nav.Link>
          <Nav.Link href="/">LogOut</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
