import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuthContext from "../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";

export default function MyNav() {
  const { user, logout } = useAuthContext();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="mx-5">
          ALDO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 ms-5">
            {user ? (
              <>
                {user.szerepkor === "ugyfel" && (
                  <>
                    <Nav.Link href="/" className="ms-auto">Főoldal</Nav.Link>
                    <Nav.Link href="/galeria">Galéria</Nav.Link>
                    <Nav.Link href="/munkaar">Munkadíjak</Nav.Link>
                    <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
                    <Nav.Link href="/profil" className="ms-auto">Profilom</Nav.Link>
                  </>
                )}
                
                {user.szerepkor === "szerelo" && (
                  <>
                   <Dropdown>
                   <Dropdown.Toggle variant="" id="dropdown-basic">
                     Publikus
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                     <Dropdown.Item href="/">Főoldal</Dropdown.Item>
                     <Dropdown.Item href="/galeria">Galéria</Dropdown.Item>
                     <Dropdown.Item href="/munkaar">Munka ár</Dropdown.Item>
                     <Dropdown.Item href="/kapcsolat">
                       Kapcsolat
                     </Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
                  <Nav.Link href="/munkafolyamatok" className="m-auto">Munkafolyamatok</Nav.Link>
                  </>
                )}

                {user.szerepkor === "vezetoszerelo" && (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle className="me-auto" variant="" id="dropdown-basic">
                        Publikus
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/">Főoldal</Dropdown.Item>
                        <Dropdown.Item href="/galeria">Galéria</Dropdown.Item>
                        <Dropdown.Item href="/munkaar">Munka ár</Dropdown.Item>
                        <Dropdown.Item href="/kapcsolat">Kapcsolat</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="/vezetoszerelo" className="ms-auto">Vezetői</Nav.Link>
                    <Nav.Link href="/munkafolyamatok" className="ms-0 me-auto">Munkafolyamatok</Nav.Link>
                  </>
                )}
                <Nav.Link href="#" onClick={logout} className=""> Kijelentkezés</Nav.Link>
                <Nav.Link href="/profil" className="">{user.name}</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/" className="m-auto ms-0">Főoldal</Nav.Link>
                <Nav.Link href="/galeria">Galéria</Nav.Link>
                <Nav.Link href="/munkaar">Munkadíjak</Nav.Link>
                <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
                <Nav.Link href="/login" className="ms-lg-auto mx-lg-3"> Bejelentkezés </Nav.Link>
                <Nav.Link href="/register">Regisztráció </Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Nav.Link href="/profil" className="ml-auto px-5">
              {user.name}
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
