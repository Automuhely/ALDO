import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import useAuthContext from "../../contexts/AuthContext";

export default function UserEmailForm(props) {
  const { Kuldes, csrf, user, getUser } = useAuthContext(); // csrf függvény hozzáadása

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const [subject, setSubject] = useState("");
  const [emailUzenet, setEmailUzenet] = useState("");
  const [rendszam, setRendszam] = useState("");

  const emailKuldes = async (e) => {
    e.preventDefault();
    console.log("email küldés");

    try {
      const token = await csrf(); // Token lekérése
      const email = {
        name: props.user.name,
        email: props.user.email,
        subject: subject,
        rendszam: rendszam,
        uzenet: emailUzenet,
        _token: token,
      };
      console.log(email);
      await Kuldes(email);
      alert("Email sikeresen elküldve!");
    } catch (error) {
      alert("Hiba történt az email küldése során: " + error.message);
    }
  };

  return (
    /*<Container fluid className="text-center pt-2 border m-4 m-auto bg-light">*/
    <Container fluid className="urlap">
      <Row className="justify-content-center align-items-center p-2 border bg-light">
        <Form onSubmit={emailKuldes} className="p-3 bg-light">
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
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Tárgy"
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Autó</Form.Label>

            <Form.Select
              required
              id="emailAuto"
              value={rendszam}
              onChange={(e) => setRendszam(e.target.value)}
            >
              <option value={""}>Kérlek válassz....</option>

              {props.autoim.map((e, i) => {
                return (
                  <option key={i} value={e.rendszam}>
                    {e.becenev + " - " + e.rendszam}
                  </option>
                );
              })}
            </Form.Select>
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
