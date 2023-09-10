import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = () => {
      // Clear the user token from localStorage
      localStorage.removeItem('access_token');
      // Redirect to the login page
      navigate('/login');
    };

    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Astronacci</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Align to the right */}
                        <Nav.Link href="#link" onClick={handleLogout}>Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
