import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiAirplaneDeparture } from 'react-icons/gi'
function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <GiAirplaneDeparture className='icon' />
          <Nav.Link href="#services">Nossos Serviços</Nav.Link>
          <Nav.Link href="#footer">Fale com a gente</Nav.Link>
          <GiAirplaneDeparture className='icon' />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default NavBarComponent;