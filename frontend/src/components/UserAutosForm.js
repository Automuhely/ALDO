import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";

export default function UserAutosForm() {
  /* Új autó hozzáadásához */
  const [becenev, setBecenev] = useState("");
  const [rendszam, setRendszam] = useState("");
  const [marka, setMarka] = useState("");
  const [alvazszam, setAlvazszam] = useState("");
  const [motorkod, setMotorkod] = useState("");
  const [evjarat, setEvjarat] = useState("");

  /* Szerkesztéshez logikai operátorok */
  const [isAutoUrlapNyitva, setIsAutoUrlapNyitva] = useState(false);

  /* Error üzenetek formokhoz */
  const [autoErrors, setAutoErrors] = useState({
    becenev: "",
    rendszam: "",
    marka: "",
    alvazszam: "",
    motorkod: "",
    evjarat: "",
  });

  const { user, csrf } = useAuthContext();

  const ujAuto = async (e) => {
    e.preventDefault();
    const token = await csrf();
    const adat = {
      ugyfel: user.id,
      becenev: becenev,
      rendszam: rendszam,
      marka: marka,
      alvazszam: alvazszam,
      motorkod: motorkod,
      evjarat: evjarat,
      _token: token,
    };
    console.log("Új autó beküldés...", adat);

    try {
      const response = await axios.post("/api/autos", adat);
      console.log("Új autó elküldve SIKERESEN:", response.data);
      setAutoErrors("");
      alert("Sikeres beküldés.");
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.data.errors) {
        setAutoErrors(error.response.data.errors);
        console.log("Nem sikerült a beküldés....: ", autoErrors);
      }
    }
  };

  return (
    <Col className="col-sm-12 col-md-6" id="ujAutoMezo">
      <Row id="ujAutoMezoFejlec">
        <Col className="text-end">
          <Button
            variant="primary"
            id="ujAutoGomb"
            onClick={() => {
              setIsAutoUrlapNyitva((prevState) => !prevState);
            }}
          >
            Új autó felvitele
          </Button>
        </Col>
      </Row>

      <Row>
        <Col
          id="ujAutoUrlap"
          style={{
            visibility: isAutoUrlapNyitva ? "visible" : "hidden",
          }}
        >
          <h1 id="ujAutoUrlapCim" className="text-center">
            Új autó
          </h1>
          <Form onSubmit={(e) => ujAuto(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Becenév</Form.Label>
              <Form.Control
                required
                type="text"
                value={becenev}
                onChange={(e) => setBecenev(e.target.value)}
              />
              <Form.Text>
                {autoErrors.becenev && (
                  <span className="text-danger">{autoErrors.becenev[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rendszám</Form.Label>
              <Form.Control
                required
                type="text"
                value={rendszam}
                onChange={(e) => setRendszam(e.target.value)}
              />
              <Form.Text>
                {autoErrors.rendszam && (
                  <span className="text-danger">{autoErrors.rendszam[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Márka</Form.Label>
              <Form.Select
                required
                id="marka"
                value={marka}
                onChange={(e) => setMarka(e.target.value)}
              >
                <option value={""}>Kérlek válassz....</option>
                <option value={"BMW"}>BMW</option>
              </Form.Select>
              <Form.Text>
                {autoErrors.marka && (
                  <span className="text-danger">{autoErrors.marka[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Alvázszám</Form.Label>
              <Form.Control
                required
                type="text"
                value={alvazszam}
                onChange={(e) => setAlvazszam(e.target.value)}
              />
              <Form.Text>
                {autoErrors.alvazszam && (
                  <span className="text-danger">{autoErrors.alvazszam[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Motorkód</Form.Label>
              <Form.Control
                required
                type="text"
                value={motorkod}
                onChange={(e) => setMotorkod(e.target.value)}
              />
              <Form.Text>
                {autoErrors.motorkod && (
                  <span className="text-danger">{autoErrors.motorkod[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Évjárat</Form.Label>
              <Form.Control
                required
                type="text"
                value={evjarat}
                onChange={(e) => setEvjarat(e.target.value)}
              />
              <Form.Text>
                {autoErrors.evjarat && (
                  <span className="text-danger">{autoErrors.evjarat[0]}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="mx-auto d-block">
              Küldés
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}
