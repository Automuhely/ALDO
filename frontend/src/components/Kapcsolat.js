import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuthContext from "../contexts/AuthContext";

export default function Kapcsolat() {
  const { Kuldes, csrf } = useAuthContext(); // csrf függvény hozzáadása

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uzenet, setUzenet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("Nincs kitöltve a név!");
    } else if (email.length === 0) {
      alert("Nincs kitöltve az e-mail cím!");
    } else if (uzenet.length === 0) {
      alert("Nincs kitöltve az üzenet!");
    } else {
      try {
        const token = await csrf(); // Token lekérése
        const adat = {
          name: name,
          email: email,
          uzenet: uzenet,
          _token: token, // A token hozzáadása az adatokhoz
        };
        await Kuldes(adat);
        alert("Email sikeresen elküldve!");
      } catch (error) {
        alert("Hiba történt az email küldése során: " + error.message);
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Form.Group className="mb-3" controlId="name">
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
        <div>
          <Button variant="primary" type="submit">
            Küldés
          </Button>
        </div>
      </Form>
    </div>
  );
}
