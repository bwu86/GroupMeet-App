import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarA = () => (
        <div>
            <Container >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">GroupMeet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Overview</Nav.Link>
                        <Nav.Link href="/">About Us</Nav.Link>

                        {/*Dropdown*/}
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/">Calendar</NavDropdown.Item>
                            <NavDropdown.Item href="/">Tasks</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>  
        </div>
)

export default NavbarA;