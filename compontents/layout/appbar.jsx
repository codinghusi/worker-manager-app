import { Navbar, Nav } from 'react-bootstrap';
import User from './user'

export default function Appbar() {
    return (
        <Navbar expand="lg">
            <Nav className="mr-auto">
                <Navbar.Brand>
                    Yay
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar-navs"></Navbar.Toggle>
                
                <Navbar.Collapse id="navbar-navs" >
                    <Nav.Link> Dashboard </Nav.Link>
                    <Nav.Link> Mitarbeiter </Nav.Link>
                </Navbar.Collapse>
            </Nav>

            <User />
            
        </Navbar>
    );
}