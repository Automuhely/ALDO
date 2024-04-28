import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useState } from "react";

export default function EmailForm(props) {
  const [emailTargy, setEmailTargy] = useState("");
  const [emailUzenet, setEmailUzenet] = useState("");
  const [alvazszamEmailhez, setAlvazszamEmailhez] = useState("");
  const [fajl, setFajl] = useState("");

  const emailKuldes = async (e) => {
    console.log("email küldés");
    const email = {
      name: props.user.name,
      email: props.user.email,
      attachment: fajl,
      message: emailUzenet,
      alvazszamEmailhez: alvazszamEmailhez,
    };
    console.log(email);
  };

  return (
    /*     <Container fluid className="text-center pt-2 border m-4 m-auto bg-light">*/
    <Container fluid>
      <Row className="justify-content-center align-items-center p-2 border bg-light">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            emailKuldes();
          }}
          className="p-3 bg-light"
        >
          <h4 className="text-center text-bg-primary p-3">Email küldése</h4>

          <Form.Group className="mb-1">
            <Form.Label>Név</Form.Label>
            <Form.Control disabled type="text" value={props.user.name} />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>E-mail cím</Form.Label>
            <Form.Control type="email" value={props.user.email} disabled />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Tárgy</Form.Label>
            <Form.Control
              type="text"
              value={emailTargy}
              onChange={(e) => {
                setEmailTargy(e.target.value);
              }}
              placeholder="Tárgy"
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Autó</Form.Label>

            <Form.Select
              required
              id="emailAuto"
              value={alvazszamEmailhez}
              onChange={(e) => setAlvazszamEmailhez(e.target.value)}
            >
              <option value={""}>Kérlek válassz....</option>

              {props.autoim.map((e, i) => {
                return (
                  <option key={i} value={e.alvazszam}>
                    {e.becenev + " - " + e.rendszam}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Melléklet</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setFajl(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Üzenet</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              value={emailUzenet}
              onChange={(e) => {
                setEmailUzenet(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mx-auto d-block">
            Küldés
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
