import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";

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

  /* Szerkesztéshez */
  const [isAutoUrlapNyitva, setIsAutoUrlapNyitva] = useState(0);
  const [isProfilSzerkesztheto, setIsProfilSzerkesztheto] = useState(0);

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
      // meghívjuk az adatot a backendről külső függvénnyel, aszinkron módon
      szamlakBetolt();
    }
  }, [user]);

  async function szamlakBetolt() {
    /*                                                                          CSRF ??????    */
    await csrf();
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
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  const bekuld = async (e) => {
    const token = await csrf();
    e.preventDefault();
    //setToken(token);
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
    try {
      let vegpont = "/api/users/" + user.id;
      // console.log("VÉGPONT:", vegpont);
      const response = await axios.put(vegpont, adat);
      console.log("Profil beküldés SIKERES", response.data);
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  return (
    <>
      <Container className="col-sm-12 m-0">
        {user ? (
          <Row>
            <Col className="col-sm-6 m-auto profilMezo">
              <Row>
                <Col>
                  <h1 className="text-center">Profil</h1>
                </Col>
                <Col>
                  <Button
                    className="primary"
                    id="profilModosito"
                    onClick={() => {
                      if (!isProfilSzerkesztheto) {
                        setIsProfilSzerkesztheto(1);
                        let profilInputok =
                          document.querySelectorAll(".profilInputok");
                        // console.log("profilInputlista", profilInputok);
                        profilInputok.forEach((input) => {
                          input.removeAttribute("disabled");
                        });
                        document.querySelector(
                          "#profilMentesGomb"
                        ).style.visibility = "visible";
                      } else {
                        setIsProfilSzerkesztheto(0);
                        let profilInputok =
                          document.querySelectorAll(".profilInputok");
                        // console.log("profilInputlista", profilInputok);
                        profilInputok.forEach((input) => {
                          input.setAttribute("disabled", true);
                        });
                        document.querySelector(
                          "#profilMentesGomb"
                        ).style.visibility = "hidden";
                      }
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
                        className="profilInputok"
                        disabled
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
                        className="profilInputok"
                        disabled
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
                        className="profilInputok"
                        disabled
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
                        className="profilInputok"
                        disabled
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
                          className="profilInputok"
                          disabled
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
                          className="profilInputok"
                          disabled
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
                        className="profilInputok"
                        disabled
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr
                    style={{ visibility: "hidden", borderColor: "transparent" }}
                  >
                    <td colSpan={2} className="text-center adatokMenteseGomb">
                      <Button
                        onClick={bekuld}
                        id="profilMentesGomb"
                        style={{ visibility: "hidden" }}
                      >
                        Mentés
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="col-sm-6 m-auto" id="ujAutoMezo">
              <Button
                className="primary"
                id="ujAutoGomb"
                onClick={() => {
                  if (!isAutoUrlapNyitva) {
                    setIsAutoUrlapNyitva(1);
                    document.querySelector("#ujAutoUrlap").style.visibility =
                      "visible";
                    document.querySelector("#ujAutoGomb").innerHTML = "Bezár";
                  } else {
                    setIsAutoUrlapNyitva(0);
                    document.querySelector("#ujAutoUrlap").style.visibility =
                      "hidden";
                    document.querySelector("#ujAutoGomb").innerHTML =
                      "Új autó felvitele";
                  }
                }}
              >
                Új autó felvitele
              </Button>
              <div id="ujAutoUrlap" style={{ visibility: "hidden" }}>
                <h1>Új autó hozzáadása</h1>
                <Form onSubmit={(e) => ujAuto(e)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Becenév</Form.Label>
                    <Form.Control
                      type="text"
                      value={becenev}
                      onChange={(e) => setBecenev(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Rendszám</Form.Label>
                    <Form.Control
                      type="text"
                      value={rendszam}
                      onChange={(e) => setRendszam(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Márka</Form.Label>
                    <Form.Select
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
                      type="text"
                      value={alvazszam}
                      onChange={(e) => setAlvazszam(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Motorkód</Form.Label>
                    <Form.Control
                      type="text"
                      value={motorkod}
                      onChange={(e) => setMotorkod(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Évjárat</Form.Label>
                    <Form.Control
                      type="text"
                      value={evjarat}
                      onChange={(e) => setEvjarat(e.target.value)}
                    />
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </div>
            </Col>
            <Col className="col-sm-12 m-auto szamlakMezo">
              <h1 className="text-center">Számlák</h1>

              <Table bordered striped hover responsive className="munkalapokTable">
                <thead>
                  <tr>
                    {/* Munkalapszám helyett számlaszám kellene */}
                    <th>Munkalapszám</th>
                    {/* rendszám, becenév átláthatóbb lenne */}
                    <th>Autó</th>
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
                        <td>{e.auto}</td>
                        <td>{e.munkavezeto}</td>
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
              <Table bordered striped hover responsive>
                <thead>
                  <tr>
                    <th>Becenév</th>
                    <th>Rendszám</th>
                    <th>Alvázszám</th>
                    <th>Motorkód</th>
                    <th>Évjárat</th>
                    <th>Módosít</th>
                  </tr>
                </thead>
                <tbody>
                {Object.values(autoim).map((e, i) => {
                    return (
                      <tr key={i}>
                    
                        <td> <Form.Control type="text" disabled value={e.becenev} onChange={(e) => console.log(e)}/></td>
                        <td> <Form.Control type="text" disabled value={e.rendszam} onChange={(e) => console.log(e)}/></td>
                        <td> <Form.Control type="text" disabled value={e.alvazszam} onChange={(e) => console.log(e)}/></td>
                        <td> <Form.Control type="text" disabled value={e.motorkod} onChange={(e) => console.log(e)}/></td>
                        <td> <Form.Control type="text" disabled value={e.evjarat} onChange={(e) => console.log(e)}/></td>
                        <td> <Button className="primary">Szerkeszt</Button></td>
                        <td> <Button className="danger">Töröl</Button></td>
                      </tr>
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