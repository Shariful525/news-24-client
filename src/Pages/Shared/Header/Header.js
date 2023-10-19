import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa6';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.error('error: ', error);
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4"  >
            <Container>
                <Navbar.Brand ><Link to='/'>News 24</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center '>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="outline-dark" onClick={handleSignOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ? <img style={{ height: "50px", borderRadius: "50%" }} alt='' src={user.photoURL} />
                                    :
                                    <FaUser />
                            }
                        </Nav.Link>
                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;