import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/">
                <img
                    src={'assets/images/home/logo.png'}
                    width="90"
                    height="40"
                    className="d-inline-block align-top"
                    alt="CanSat"
                />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/mission">Mission</Nav.Link>
                    <Nav.Link href="/reactWebApp/model">Model</Nav.Link>
                    <NavDropdown title="Subsystems" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/electricalcomp">Electrical Component</NavDropdown.Item>
                        <NavDropdown.Item href="/carrierview">Carrier Subsystem Design </NavDropdown.Item>
                        <NavDropdown.Item href="/payloadview">Science Payload design</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/members">Team Members</Nav.Link>

                </Nav>
            </Navbar>
        );
    }
}
export default Header;