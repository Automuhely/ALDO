import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import AutoSor from "../components/AutoSor";

export default function UserProfile() {
  /* Profiladatok módosításához */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [cim, setCim] = useState("");
  const [szulido, setSzulido] = useState("");
  const [adoszam, setAdoszam] = useState("");
  const [adoazonosito, setAdoazonosito] = useState("");

  /* Új autó hozzáadásához */
  const [becenev, setBecenev] = useState("");
  const [rendszam, setRendszam] = useState("");
  const [marka, setMarka] = useState("");
  const [alvazszam, setAlvazszam] = useState("");
  const [motorkod, setMotorkod] = useState("");
  const [evjarat, setEvjarat] = useState("");

  /* Szerkesztéshez logikai operátorok */
  const [isAutoUrlapNyitva, setIsAutoUrlapNyitva] = useState(false);
  const [isProfilSzerkesztheto, setIsProfilSzerkesztheto] = useState(false);

  /* Profilhoz tartozó elemek, táblák */
  const [szamlaim, setSzamlaim] = useState([{}]);
  const [autoim, setAutoim] = useState([{}]);

  /* Contextek */
  const { user, getUser, csrf } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      setName(user.name);
      setEmail(user.email);
      setTelefon(user.telefon);
      setCim(user.cim);
      setSzulido(user.szulido);
      setAdoazonosito(user.adoazonosito);
      setAdoszam(user.adoszam);
      szamlakBetolt();

      // meghívjuk az adatot a backendről külső függvénnyel, aszinkron módon
    }
    console.log("useEffect profil");
  }, [user]);

  async function szamlakBetolt() {
    /*                                                                          CSRF ??????    */
    // await csrf();
    try {
      const szamlakAdat = await axios.get("/api/szamlaim").then((e) => {
        // console.log("számlák betölt....:", e.data);
        return e.data;
      });
      const autoimAdat = await axios.get("/api/autoim").then((e) => {
        //console.log("autóim betölt....:", e.data);
        return e.data;
      });
      /*                                                                        try catch ?????  */
      // const token = await csrf();
      setSzamlaim(szamlakAdat);
      // console.log("setSzámláim: ", szamlaim);
      setAutoim(autoimAdat);
      //console.log("setAutoim: ", autoim);
    } catch (error) {
      console.log(error);
    }
  }

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
    /* Beküldés kódja */
    try {
      const response = await axios.post("/api/autos", adat);
      console.log("Új autó elküldve SIKERESEN:", response.data);
      szamlakBetolt();
    } catch (error) {
      console.log(
        error.response.status +
          " - " +
          error.response.data.message +
          " - " +
          error.response.statusText
      );
    }
  };

  const bekuld = async (e) => {
    const token = await csrf(); // CSRF token lekérése
    e.preventDefault();
    try {
      const adat = {
        name: name,
        email: email,
        telefon: telefon,
        cim: cim,
        szulido: szulido,
        adoazonosito: adoazonosito,
        adoszam: adoszam,
        szerepkor: user.szerepkor,
        _token: token,
      };
      console.log("Profil Beküldés....", adat);

      let vegpont = "/api/users/" + user.id;
      // console.log("VÉGPONT:", vegpont);
      const response = await axios.put(vegpont, adat);
      console.log("Profil beküldés SIKERES", response.data);
      szamlakBetolt();
    } catch (error) {
      if (error.response && error.response.status === 419) {
        console.log(
          error.response.status +
            " - " +
            error.response.data.message +
            " - " +
            error.response.statusText
        );
      } else if (error.request) {
        console.error("Hiba:", error);
      }
    }
  };

  return (
    <>
      <Container fluid>
        {user ? (
          <Row>
            <Col className="col-sm-12 col-md-6 m-auto profilMezo">
              <Row>
                <Col>
                  <h1 className="text-center">Profil</h1>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    id="profilModosito"
                    onClick={() => {
                      setIsProfilSzerkesztheto((prevState) => !prevState);
                    }}
                  >
                    Szerkeszt
                  </Button>
                </Col>
              </Row>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      Személyes adatok
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Név</td>
                    <td>
                      <Form.Control
                        /*   className="profilInputok" */
                        disabled={!isProfilSzerkesztheto}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Telefon</td>
                    <td>
                      <Form.Control
                        /*   className="profilInputok" */
                        disabled={!isProfilSzerkesztheto}
                        type="text"
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cím</td>
                    <td>
                      <Form.Control
                        /*   className="profilInputok" */
                        disabled={!isProfilSzerkesztheto}
                        type="text"
                        value={cim}
                        onChange={(e) => setCim(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Születési idő</td>
                    <td>
                      <Form.Control
                        /*   className="profilInputok" */
                        disabled={!isProfilSzerkesztheto}
                        type="text"
                        value={szulido}
                        onChange={(e) => setSzulido(e.target.value)}
                      />
                    </td>
                  </tr>
                  {user.adoazonosito ? (
                    <tr>
                      <td>Adóazonosító</td>
                      <td>
                        <Form.Control
                          /*   className="profilInputok" */
                          disabled={!isProfilSzerkesztheto}
                          type="text"
                          value={adoazonosito}
                          onChange={(e) => setAdoazonosito(e.target.value)}
                        />
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>Adószám</td>
                      <td>
                        <Form.Control
                          /*   className="profilInputok" */
                          disabled={!isProfilSzerkesztheto}
                          type="text"
                          value={adoszam}
                          onChange={(e) => setAdoszam(e.target.value)}
                        />
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td>Email</td>
                    <td>
                      <Form.Control
                        /*   className="profilInputok" */
                        disabled={!isProfilSzerkesztheto}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      visibility: isProfilSzerkesztheto ? "visible" : "hidden",
                    }}
                  >
                    <td colSpan={2} className="text-center">
                      <Button
                        onClick={(e) => {
                          setIsProfilSzerkesztheto((prevState) => !prevState);
                          bekuld(e);
                        }}
                        id="profilMentesGomb"
                        style={{
                          visibility: isProfilSzerkesztheto
                            ? "visible"
                            : "hidden",
                        }}
                      >
                        Mentés
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="col-sm-12 col-md-6" id="ujAutoMezo">
              <Row>
                <Col className="col-9">
                  <h1 id="ujAutoUrlapCim" style={{ display: "block" }}>
                    Új autó
                  </h1>
                </Col>
                <Col className="col-3">
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
                  style={{ display: isAutoUrlapNyitva ? "block" : "none" }}
                >
                  <Form onSubmit={(e) => ujAuto(e)}>
                    <Form.Group className="mb-3">
                      <Form.Label>Becenév</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={becenev}
                        onChange={(e) => setBecenev(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Rendszám</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={rendszam}
                        onChange={(e) => setRendszam(e.target.value)}
                      />
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
                        <option value={"Alfa Romeo"}>Alfa Romeo</option>
                        <option value={"Aston Martin"}>Aston Martin</option>
                        <option value={"Audi"}>Audi</option>
                        <option value={"BMW"}>BMW</option>
                        <option value={"Bugatti"}>Bugatti</option>
                        <option value={"Cadillac"}>Cadillac</option>
                        <option value={"Chevrolet"}>Chevrolet</option>
                        <option value={"Chrysler"}>Chrysler</option>
                        <option value={"Citroen"}>Citroen</option>
                        <option value={"Dacia"}>Dacia</option>
                        <option value={"Dodge"}>Dodge</option>
                        <option value={"Fiat"}>Fiat</option>
                        <option value={"Ford"}>Ford</option>
                        <option value={"Honda"}>Honda</option>
                        <option value={"Hyundai"}>Hyundai</option>
                        <option value={"Jaguar"}>Jaguar</option>
                        <option value={"Jeep"}>Jeep</option>
                        <option value={"Kia"}>Kia</option>
                        <option value={"Lada"}>Lada</option>
                        <option value={"Land Rover"}>Land Rover</option>
                        <option value={"Lexus"}>Lexus</option>
                        <option value={"Maserati"}>Maserati</option>
                        <option value={"Mazda"}>Mazda</option>
                        <option value={"Mercedes"}>Mercedes</option>
                        <option value={"Mini Cooper"}>Mini Cooper</option>
                        <option value={"Mitsubishi"}>Mitsubishi</option>
                        <option value={"Nissan"}>Nissan</option>
                        <option value={"Opel"}>Opel</option>
                        <option value={"Peugeot"}>Peugeot</option>
                        <option value={"Porsche"}>Porsche</option>
                        <option value={"Seat"}>Seat</option>
                        <option value={"Skoda"}>Skoda</option>
                        <option value={"Smart"}>Smart</option>
                        <option value={"Subaru"}>Subaru</option>
                        <option value={"Suzuki"}>Suzuki</option>
                        <option value={"Tesla"}>Tesla</option>
                        <option value={"Toyota"}>Toyota</option>
                        <option value={"Volkswagen"}>Volkswagen</option>
                        <option value={"Volvo"}>Volvo</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Alvázszám</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={alvazszam}
                        onChange={(e) => setAlvazszam(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Motorkód</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={motorkod}
                        onChange={(e) => setMotorkod(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Évjárat</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={evjarat}
                        onChange={(e) => setEvjarat(e.target.value)}
                      />
                    </Form.Group>
                    <Button type="submit">Küldés</Button>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col className="col-sm-12 m-auto szamlakMezo">
              <h1 className="text-center">Számlák</h1>

              <Table bordered striped hover className="munkalapokTable">
                <thead>
                  <tr>
                    {/* Munkalapszám helyett számlaszám kellene */}
                    <th>Munkalapszám</th>
                    <th>Becenév</th>
                    <th>Rendszám</th>
                    <th>Munkavezető</th>
                    <th>Leírás</th>
                    <th>Módosult</th>
                    <th colSpan={2}></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(szamlaim).map((e, i) => {
                    return (
                      <tr key={i}>
                        <td>{e.munkalapszam}</td>
                        <td>{e.becenev}</td>
                        <td>{e.rendszam}</td>
                        <td>{e.munkavezeto_nev}</td>
                        <td>{e.altalanosLeiras}</td>
                        <td>{e.updated_at}</td>
                        <td>Megtekint</td>
                        <td>Letölt</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col className="col-sm-12 m-auto autokMezo pt-4">
              <h1 className="text-center">Autóim</h1>
              <Table bordered striped hover>
                <thead>
                  <tr>
                    <th>Becenév</th>
                    <th>Rendszám</th>
                    <th>Alvázszám</th>
                    <th>Motorkód</th>
                    <th>Évjárat</th>
                    <th colSpan={2}></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(autoim).map((e, i) => {
                    return (
                      <AutoSor
                        key={i}
                        auto={e}
                        autoim={autoim}
                        becenev={becenev}
                        setBecenev={setBecenev}
                        setRendszam={setRendszam}
                        setAlvazszam={setAlvazszam}
                        setMotorkod={setMotorkod}
                        setEvjarat={setEvjarat}
                      />
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : (
          <div>Valami hiba történt, jelentkezz be újra!</div>
        )}
      </Container>
    </>
  );
}
