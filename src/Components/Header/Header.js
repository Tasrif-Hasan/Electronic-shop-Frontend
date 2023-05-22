import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/logo/logo.jpg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        if (user) {
            navigate('/')
            signOut(auth)
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(54, 120, 122)' }} variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img height='30px' style={{ borderRadius: '5px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>

                        </Nav>
                        <Nav>
                            {/* <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
                            {
                                user
                                    ?

                                    <>
                                        <Nav.Link as={Link} to='/manageinventory'>Manage</Nav.Link>
                                        <Nav.Link as={Link} to='/add'>Add </Nav.Link>

                                        <Nav.Link as={Link} to='/myitems'>My-Items</Nav.Link>
                                        <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none '>Sign Out</button>
                                    </>
                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;