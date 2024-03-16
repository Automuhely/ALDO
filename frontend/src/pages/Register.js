import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container fluid className="w-25 mt-5 m-auto">
      Regisztráció
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="toth@aldo.hu" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Jelszó</Form.Label>
          <Form.Control type="password" placeholder="W0lfSvag3n+@" />
        </Form.Group>
        <p>
          <Link className="nav-link text-info" to="/login">
            Bejelentkezés
          </Link>
        </p>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}
