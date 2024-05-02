import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import useAuthContext from "../../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import useThemeContext from "../../contexts/ThemeContext";
import MoonIcon from "../../icons/MoonIcon";
import SunIcon from "../../icons/SunIcon";
import "../../styles/icons.css";

export default function MyNav() {
  const { user, logout } = useAuthContext();
  const { toggleTheme, darkTheme, isDarkTheme } = useThemeContext();

  return (
    <Navbar
      expand="lg"
      bg={darkTheme.bgVariant}
      data-bs-theme={darkTheme.dataBsTheme}
    >
      <Container>
        <Navbar.Brand href="/" className="mx-2">
          ALDO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 ">
            {user ? (
              <>
                {user.szerepkor === "ugyfel" && (
                  <>
                    <Nav.Link href="/" className="ms-md-0 ms-lg-auto ms-sm-0">
                      Főoldal
                    </Nav.Link>
                    <Nav.Link href="/galeria">Galéria</Nav.Link>
                    <Nav.Link href="/munkaar">Munkadíjak</Nav.Link>
                    <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
                    <Nav.Link
                      href="/profil"
                      className="ms-md-0 ms-lg-auto ms-sm-0"
                    >
                      Profilom
                    </Nav.Link>
                  </>
                )}

                {user.szerepkor === "szerelo" && (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="ms-0 ps-0"
                        id="dropdown-basic"
                      >
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
                    <Nav.Link
                      href="/munkafolyamatok"
                      className="ms-sm-0 ms-md-0 ms-lg-auto m-auto"
                    >
                      Munkafolyamatok
                    </Nav.Link>
                  </>
                )}

                {user.szerepkor === "vezetoszerelo" && (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="ms-0 ps-0"
                        variant=""
                        id="dropdown-basic"
                      >
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
                    <Nav.Link
                      href="/vezetoszerelo"
                      className="ms-sm-0 ms-md-0 ms-lg-auto"
                    >
                      Vezetői
                    </Nav.Link>
                    <Nav.Link href="/munkafolyamatok" className="ms-0 me-auto">
                      Munkafolyamatok
                    </Nav.Link>
                  </>
                )}
                <Nav.Link href="#" onClick={logout} className="">
                  {" "}
                  Kijelentkezés
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/" className="m-auto ms-0">
                  Főoldal
                </Nav.Link>
                <Nav.Link href="/galeria">Galéria</Nav.Link>
                <Nav.Link href="/munkaar">Munkadíjak</Nav.Link>
                <Nav.Link href="/kapcsolat">Kapcsolat</Nav.Link>
                <Nav.Link href="/login" className="ms-lg-auto mx-lg-3">
                  Bejelentkezés
                </Nav.Link>
                <Nav.Link href="/register">Regisztráció </Nav.Link>
                <div className="me-0  ms-0 sm-lg-5 mx-3 h3 d-flex">
                  <Form onClick={toggleTheme}>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                  {isDarkTheme ? <MoonIcon /> : <SunIcon />}
                </div>
              </>
            )}
          </Nav>
          {user && (
            <Nav.Link href="/profil" className="text-nowrap link-info">
              {user.name}
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
