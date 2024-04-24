import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //bejelentkezés
    //Összegyűjtjük egyetlen objektumban az űrlap adatokat
    const adat = {
      email: email,
      password: password,
    };
    console.log(adat);
    loginReg(adat, "/login");
  };

  return (
    <Container fluid>
      <Container className="mt-5 p-5 m-auto bg-light border rounded col-sm-12 col-md-5">
        <h1 className="text-center mb-4">Bejelentkezés</h1>
        <Col className="mx-auto col-md-12">
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
            <p>
              <Link className="nav-link text-info" to="/register">
                Regisztráció
              </Link>
            </p>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </Container>
  );
}
