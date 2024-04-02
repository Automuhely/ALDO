import { useEffect, useState } from "react";
import useAuthContext, { AuthProvider } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";

export default function Profile() {
  // const [password, setPassword] = useState("");
  // const [password_confirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [cim, setCim] = useState("");
  const [szulido, setSzulido] = useState("");
  const [adoszam, setAdoszam] = useState("");
  const [adoazonosito, setAdoazonosito] = useState("");
  const [szamlaim, setSzamlaim] = useState([{}]);
  //  const [autoim, setAutoim] = useState({});
  // const [_token, setToken] = useState("");

  const { user, getUser, szamlak } = useAuthContext();

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
    try {
      const szamlakData = await szamlak();
      // beállítjuk a state-t hozzá
      setSzamlaim(szamlakData);
    } catch (error) {
      console.log(error);
    }
  }

  const bekuld = async (e) => {
    e.preventDefault();
    //  setToken(axios.get("/token"));
    const adat = {
      name: name,
      email: email,
      telefon: telefon,
      cim: cim,
      szulido: szulido,
      adoazonosito: adoazonosito,
      adoszam: adoszam,
      szerepkor: user.szerepkor,
      // _token: _token,
    };

    console.log(adat);
    /* Beküldés kódja */
  };

  return (
    <>
      <Container className="col-sm-12 m-0">
        {user ? (
          <Row>
          
            
            <Col className="col-sm-6 m-0">
              <h1 className="text-center">Profil</h1>
              <Table striped bordered responsive>
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
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => (
                          setName(e.target.value), console.log(e.target.value)
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Telefon</td>
                    <td>
                      <input
                        type="text"
                        value={telefon}
                        onChange={(e) => (
                          setTelefon(e.target.value),
                          console.log(e.target.value)
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cím</td>
                    <td>
                      <input
                        type="text"
                        value={cim}
                        onChange={(e) => (
                          setCim(e.target.value), console.log(e.target.value)
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Születési idő</td>
                    <td>
                      <input
                        type="text"
                        value={szulido}
                        onChange={(e) => (
                          setSzulido(e.target.value),
                          console.log(e.target.value)
                        )}
                      />
                    </td>
                  </tr>
                  {user.adoazonosito ? (
                    <tr>
                      <td>Adóazonosító</td>
                      <td>
                        <input
                          type="text"
                          value={adoazonosito}
                          onChange={(e) => (
                            setAdoazonosito(e.target.value),
                            console.log(e.target.value)
                          )}
                        />
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>Adószám</td>
                      <td>
                        <input
                          type="text"
                          value={adoszam}
                          onChange={(e) => (
                            setAdoszam(e.target.value),
                            console.log(e.target.value)
                          )}
                        />
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => (
                          setEmail(e.target.value), console.log(e.target.value)
                        )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-center adatokMenteseGomb">
                      <Button onClick={bekuld}>Mentés</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="col-sm-12 m-auto">
              <h1 className="text-center">Autóim</h1>

              
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    {/* Munkalapszám helyett számlaszám kellene */}
                    <th>Munkalapszám</th>
                    {/* rendszám, becenév átláthatóbb lenne */}
                    <th>Autó</th>
                    <th>Munkavezető</th>
                    <th>Leírás</th>
                    <th>Módosult</th>
                    <th colSpan={2}>Módosítás</th>
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
          </Row>
        ) : (
          <div>Valami hiba történt, jelentkezz be újra!</div>
        )}
      </Container>
    </>
  );
}
