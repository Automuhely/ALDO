import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {  Container } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";

export default function Contacts() {
  const { Kuldes, csrf, user, getUser } = useAuthContext(); // csrf függvény hozzáadása

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uzenet, setUzenet] = useState("");
  const [subject, setSubject] = useState("");
  const [rendszam, setRendszam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("Nincs kitöltve a név!");
    } else if (email.length === 0) {
      alert("Nincs kitöltve az e-mail cím!");
    } else if (uzenet.length === 0) {
      alert("Nincs kitöltve az üzenet!");
    } else if (subject.length === 0) {
      alert("Nincs kitöltve az tárgy!");
    } else if (rendszam.length === 0) {
      alert("Nincs kitöltve a rendszám!");
    } else {
      try {
        const token = await csrf(); // Token lekérése
        const adat = {
          name: name,
          email: email,
          subject: subject,
          uzenet: uzenet,
          rendszam:rendszam,
          _token: token, // A token hozzáadása az adatokhoz
        };
        console.log("Adatok:", adat);
        await Kuldes(adat);
        alert("Email sikeresen elküldve!");
      } catch (error) {
        alert("Hiba történt az email küldése során: " + error.message);
      }
    }
  };

  return (
    <>
    <Container>
    <h1  className="text-center">Kérdezz minket</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <Form.Group className="mb-3 mt-4" controlId="name">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tóth Alexandra"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email cím</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3 mt-4" controlId="rendszam">
            <Form.Label>Rendszám</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setRendszam(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3 mt-4" controlId="subject">
            <Form.Label>Tárgy</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="uzenet">
            <Form.Label>Üzenet szövege</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setUzenet(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div className="text-center my-3">
          <Button variant="primary" type="submit"  >
            Küldés
          </Button>
        </div>
      </Form>

    </Container>
     
    </>
  );
    
}
