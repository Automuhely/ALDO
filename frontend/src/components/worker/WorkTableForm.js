import React, { useEffect, useState } from "react";
import { Button, Row, Form, Col } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";
import { Container } from "react-bootstrap";

export default function WorkTableForm() {
  const { ujMunka, csrf, user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    console.log(user);
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const [megnevezes, setMegnevezes] = useState("");
  const [ara, setMunkaar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (megnevezes.length === 0) {
      alert("Nincs kitöltve a megnevezés!");
    } else if (ara.length === 0) {
      alert("Nincs kitöltve a munkadíj!");
    } else {
      try {
        const token = await csrf();
        const adat = {
          megnevezes: megnevezes,
          ara: ara,
          _token: token,
        };
        console.log("Adatok:", adat);
        await ujMunka(adat);
        alert("Sikeres munka felvitele!");
        window.location.reload();
      } catch (error) {
        console.error("Hiba történt az új munka felvitele közben:", error);
        alert("Hiba történt az új munka felvitele közben: " + error.message);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center worktable">
      <Container className="p-3 mb-3 mt-1  text-center ">
        <h3>Új munka felvitele</h3>
        <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          <Row className="mb-3 text-center">
            <Form.Group controlId="megnevezes" style={{ maxWidth: "400px" }}>
              <Form.Label className="text-center">Munka megnevezése</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setMegnevezes(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="ara"  style={{ maxWidth: "400px" }}>
              <Form.Label>Munkadíj</Form.Label>
              <Form.Control
                type="munkaar"
                onChange={(e) => {
                  setMunkaar(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 mt-4">
            <Col className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                style={{ maxWidth: "100px" }}
              >
                Mentés
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}
