import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";
import { Container } from "react-bootstrap";

export default function WorkTableForm() {
  const { ujMunkalap, csrf, user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const [marka, setMarka] = useState("");
  const [rendszam, setRendszam] = useState("");
  const [ugyfel_nev, setUgyfel] = useState("");
  const [altalanosLeiras, setLeiras] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (marka.length === 0) {
      alert("Nincs kitöltve a megnevezés!");
    } else if (rendszam.length === 0) {
      alert("Nincs kitöltve a munkadíj!");
    } else {
      try {
        const token = await csrf();
        const adat = {
            marka: marka,
            rendszam: rendszam,
            ugyfel_nev: ugyfel_nev,
            altalanosLeiras: altalanosLeiras,
          _token: token,
        };
        console.log("Adatok:", adat);
        await ujMunkalap(adat);
        alert("Sikeres munkalap felvitele!");
        window.location.reload();
      } catch (error) {
        console.error("Hiba történt az új munkalap felvitele közben:", error);
        alert("Hiba történt az új munkalap felvitele közben: " + error.message);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Container className="p-3 text-center">
        <h3>Új munkalap felvitele</h3>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center"
          
        >
          <Form.Group className="mb-3 mt-4" controlId="marka">
            <Form.Label>Autó</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setMarka(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rendszam">
            <Form.Label>Rendszám</Form.Label>
            <Form.Control
              type="rendszam"
              onChange={(e) => {
                setRendszam(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ugyfel_nev">
            <Form.Label>Ügyfél neve</Form.Label>
            <Form.Control
              type="ugyfel_nev"
              onChange={(e) => {
                setUgyfel(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="altalanosLeiras">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              type="altalanosLeiras"
              onChange={(e) => {
                setLeiras(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Mentés
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
