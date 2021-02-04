import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav ,Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
              <Container>
            <LinkContainer to="/">
            <Navbar.Brand >צור עולם של יין</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

              <LinkContainer to="/cart">
                <Nav.Link >cart </Nav.Link>
                </LinkContainer>

              <LinkContainer to="/login">
              <Nav.Link >login</Nav.Link>
              </LinkContainer>

              </Nav>
            </Navbar.Collapse>
              </Container>
          </Navbar>
        </header>
    )
}

export default Header