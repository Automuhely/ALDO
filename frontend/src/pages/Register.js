import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Összegyűjtjük egyetlen objektumban az űrlap adatokat
    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    loginReg(adat, "/register");
  };

  return (
    <Container fluid className="w-25 mt-5 m-auto">
      Regisztráció
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Név</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tóth Jakab"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.name && <span className="text-danger">{errors.name[0]}</span>}
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="toth@aldo.hu"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.email && (
            <span className="text-danger">{errors.email[0]}</span>
          )}
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Jelszó</Form.Label>
          <Form.Control
            type="password"
            placeholder="W0lfSvag3n+@"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {errors.password && (
          <span className="text-danger">{errors.password[0]}</span>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Jelszó újra</Form.Label>
          <Form.Control
            type="password"
            placeholder="W0lfSvag3n+@"
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.password_confirmation && (
            <span className="text-danger">
              {errors.password_confirmation[0]}
            </span>
          )}
        </div>
        <p>
          <Link className="nav-link text-info" to="/login">
            Bejelentkezés
          </Link>
        </p>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Regisztráció
          </Button>
        </div>
      </Form>
    </Container>
  );
}
