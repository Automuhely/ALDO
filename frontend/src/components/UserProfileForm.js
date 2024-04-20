import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import axios from "../api/axios";

export default function UserProfileForm() {
  /* Profiladatok módosításához */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [cim, setCim] = useState("");
  const [szulido, setSzulido] = useState("");
  const [adoszam, setAdoszam] = useState("");
  const [adoazonosito, setAdoazonosito] = useState("");

  /* Szerkesztéshez logikai operátorok */
  const [isProfilSzerkesztheto, setIsProfilSzerkesztheto] = useState(false);

  /* Error üzenetek formokhoz */
  const [profilErrors, setProfilErrors] = useState({
    name: "",
    email: "",
    telefon: "",
    cim: "",
    szulido: "",
    adoazonosito: "",
    adoszam: "",
    // szerepkor: "",
  });

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
    }
    console.log("useEffect profil");
  }, [user, getUser]);

  const bekuld = async (e) => {
    e.preventDefault();
    const token = await csrf();
    try {
      const adat = {
        name: name,
        telefon: telefon,
        cim: cim,
        adoszam: adoszam ?? "",
        adoazonosito: adoazonosito ?? "",
        _token: token,
      };
      console.log("Profil Beküldés....", adat);

      let vegpont = "/api/users/" + user.id;
      const response = await axios.put(vegpont, adat);
      console.log("Profil beküldés SIKERES", response.data);
      setIsProfilSzerkesztheto(false);
      setProfilErrors("");
      alert("Sikeres beküldés.");
    } catch (error) {
      if (error.response && error.response.status === 419) {
        console.log(
          error.response.status +
            " - " +
            error.response.data.message +
            " - " +
            error.response.statusText
        );
      }
      if (error.response && error.response.status === 422) {
        console.log(error.response);
        setProfilErrors(error.response.data.errors);
        console.log("PROFIL ERRORS: ", profilErrors);
      } else {
        console.log(error.response);
      }
    }
  };

  return (
    <Col className="col-sm-12 col-md-6 m-auto profilMezo">
      <Row>
        <Col>
          <h1 className="text-center">Profil</h1>
        </Col>
      </Row>
      <Table bordered responsive>
        <thead>
          <tr>
            <th
              colSpan="2"
              className="text-center"
              style={{ position: "relative" }}
            >
              Személyes adatok
              <Button
                variant="primary"
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "2em",
                  fontSize: "1.5em",
                  margin: "0",
                  padding: "0",
                }}
                id="profilModosito"
                onClick={() => {
                  setIsProfilSzerkesztheto((prevState) => !prevState);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Név</td>
            <td>
              <Form.Control
                disabled={!isProfilSzerkesztheto}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text>
                {profilErrors.name && (
                  <span className="text-danger">{profilErrors.name[0]}</span>
                )}
              </Form.Text>
            </td>
          </tr>
          <tr>
            <td>Telefon</td>
            <td>
              <Form.Control
                disabled={!isProfilSzerkesztheto}
                type="text"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
              />
              <Form.Text>
                {profilErrors.telefon && (
                  <span className="text-danger">{profilErrors.telefon[0]}</span>
                )}
              </Form.Text>
            </td>
          </tr>
          <tr>
            <td>Cím</td>
            <td>
              <Form.Control
                disabled={!isProfilSzerkesztheto}
                type="text"
                value={cim}
                onChange={(e) => setCim(e.target.value)}
              />
              <Form.Text>
                {profilErrors.cim && (
                  <span className="text-danger">{profilErrors.cim[0]}</span>
                )}
              </Form.Text>
            </td>
          </tr>
          <tr>
            <td>Születési idő</td>
            <td>
              <Form.Control disabled type="date" value={szulido} />
              <Form.Text>
                {profilErrors.szulido && (
                  <span className="text-danger">{profilErrors.szulido[0]}</span>
                )}
              </Form.Text>
            </td>
          </tr>
          {user?.adoazonosito ? (
            <tr>
              <td>Adóazonosító</td>
              <td>
                <Form.Control disabled type="text" value={adoazonosito} />
              </td>
            </tr>
          ) : (
            <tr>
              <td>Adószám</td>
              <td>
                <Form.Control
                  disabled={!isProfilSzerkesztheto}
                  type="text"
                  value={adoszam}
                  onChange={(e) => setAdoszam(e.target.value)}
                />
                <Form.Text>
                  {profilErrors.adoszam && (
                    <span className="text-danger">
                      {profilErrors.adoszam[0]}
                    </span>
                  )}
                </Form.Text>
              </td>
            </tr>
          )}

          <tr>
            <td>Email</td>
            <td>
              <Form.Control disabled type="text" value={email} />
            </td>
          </tr>
          <tr
            style={{
              visibility: isProfilSzerkesztheto ? "visible" : "hidden",
            }}
          >
            <td colSpan={2}>
              <Button
                className="mx-auto d-block"
                onClick={(e) => {
                  bekuld(e);
                }}
                id="profilMentesGomb"
                style={{
                  visibility: isProfilSzerkesztheto ? "visible" : "hidden",
                }}
              >
                Mentés
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}
