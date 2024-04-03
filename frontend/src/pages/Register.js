import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import "../styles/forms.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [cim, setCim] = useState("");
  const [szulido, setSzulido] = useState("");
  const [adoszam, setAdoszam] = useState(null);
  const [adoazonosito, setAdoazonosito] = useState(null);

  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Összegyűjtjük egyetlen objektumban az űrlap adatokat

    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      cim: cim,
      telefon: telefon,
      szulido: szulido,
      szerepkor: 0,
      adoazonosito: adoazonosito,
      adoszam: adoszam,
    };

    loginReg(adat, "/register");
  };

  return (
    <Container fluid className="w-25 mt-5 m-auto">
      <h1 className="text-center">Regisztráció</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="adoazonosito">
          <Form.Label className="adoazonosito">Adóazonosító</Form.Label>
          <Form.Control
            // required
            type="text"
            onChange={(e) => {
              setAdoazonosito(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.adoazonosito && (
            <span className="text-danger">{errors.adoazonosito[0]}</span>
          )}
        </div>
        <Form.Group className="mb-3" controlId="adoszam">
          <Form.Label>Adószám</Form.Label>
          <Form.Control
            // required
            type="text"
            onChange={(e) => {
              setAdoszam(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.adoszam && (
            <span className="text-danger">{errors.adoszam[0]}</span>
          )}
        </div>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="required-field">Név</Form.Label>
          <Form.Control
            required
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
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="required-field">Email</Form.Label>
          <Form.Control
            required
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
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="required-field">Jelszó</Form.Label>
          <Form.Control
            required
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
        <Form.Group className="mb-3" controlId="password_confirmation">
          <Form.Label className="required-field">Jelszó újra</Form.Label>
          <Form.Control
            required
            type="password"
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
        <Form.Group className="mb-3" controlId="cim">
          <Form.Label className="required-field">Cím</Form.Label>
          <Form.Control
            required
            placeholder="1234 Budapest, Tesztelők útja 123."
            onChange={(e) => {
              setCim(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.cim && <span className="text-danger">{errors.cim[0]}</span>}
        </div>
        <Form.Group className="mb-3" controlId="telefon">
          <Form.Label className="required-field">Telefon</Form.Label>
          <Form.Control
            required
            placeholder="06702001234"
            onChange={(e) => {
              setTelefon(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.telefon && (
            <span className="text-danger">{errors.telefon[0]}</span>
          )}
        </div>
        <Form.Group className="mb-3" controlId="szulido">
          <Form.Label className="required-fied">Születési idő</Form.Label>
          <Form.Control
            required
            type="date"
            onChange={(e) => {
              setSzulido(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          {errors.szulido && (
            <span className="text-danger">{errors.szulido[0]}</span>
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
