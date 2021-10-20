import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Navber = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container >
                    <Navbar.Brand href="#home"><i class="fas fa-hospital-user"></i>  City Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Service</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            {user.email ?
                                <Button onClick={logOut} variant="light">Log Out</Button> :
                                <Nav.Link as={Link} to="/login/home" >Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;