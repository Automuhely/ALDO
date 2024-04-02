import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuthContext from "../contexts/AuthContext";

export default function MyNav() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ALDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/galeria">Galéria</Nav.Link>
            <Nav.Link href="/munkaar">Munkadíjak</Nav.Link>
            <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
            {user ? (
              <>
              {/* Bejelentkezett felhasználó láthatja */}
                <Nav.Link href="#" onClick={logout}>Kijelentkezés</Nav.Link>
                <Nav.Link href="/profil">Profilom</Nav.Link>
              </>
            ) : (
              /* Guest, vendég láthatja */
              <>
                <Nav.Link href="/login">Bejelentkezés</Nav.Link>

                <Nav.Link href="/register">Regisztráció</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
