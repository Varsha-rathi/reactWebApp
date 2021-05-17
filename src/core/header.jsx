import React from 'react';
import {Nav, Navbar, Button, NavDropdown} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/page1">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="/team">Team</Nav.Link>
                </Nav>
                <NavDropdown title="Subsystems" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/electricalcomp">Electrical Component</NavDropdown.Item>
                    <NavDropdown.Item href="/">Mechanical Component</NavDropdown.Item>
                    <NavDropdown.Item href="/">Mechanical Component 1</NavDropdown.Item>
                </NavDropdown>
                <Button variant="outline-info">Search</Button>
            </Navbar>
        );
    }
}
export default Header;