import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginReg, errors } = useAuthContext();
  const { darkTheme } = useThemeContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      email: email,
      password: password,
    };
    console.log(adat);
    loginReg(adat, "/login");
  };

  return (
    <Container fluid className={`${darkTheme.bg} pt-5 pb-5`}>
      <Container
        className="p-1 m-auto bg-light border rounded-4 col-sm-12 col-md-8 col-lg-5"
        id="containerhatter"
      >
        <Container className="p-1 rounded-4 border">
          <h1 className="text-center mb-4">Bejelentkezés</h1>
          <Col className="mx-auto col-md-10">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="toth@aldo.hu"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text>
                  {errors.email && (
                    <span className="text-danger">{errors.email[0]}</span>
                  )}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="W0lfSvag3n+@"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Form.Text>
                  {errors.password && (
                    <span className="text-danger">{errors.password[0]}</span>
                  )}
                </Form.Text>
              </Form.Group>

              <div className="text-center mt-5 mb-5">
                <Button variant="primary" type="submit">
                  Bejelentkezés
                </Button>
              </div>
              <p>
                <Link
                  className="nav-link text-black text-center"
                  to="/kapcsolat"
                >
                  Elfelejtett jelszó
                </Link>
              </p>
              <p>
                <Link
                  className="nav-link text-black text-center"
                  to="/register"
                >
                  Regisztráció
                </Link>
              </p>
            </Form>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}
