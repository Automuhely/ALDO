import { useEffect, useState } from "react";
import useAuthContext, { AuthProvider } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";

export default function Profile() {
  // const [password, setPassword] = useState("");
  //const [password_confirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [cim, setCim] = useState("");
  const [szulido, setSzulido] = useState("");
  const [adoszam, setAdoszam] = useState("");
  const [adoazonosito, setAdoazonosito] = useState("");

  const { user, getUser } = useAuthContext();

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
  }, [user]);

  const bekuld = async (e) => {
    e.preventDefault();

    const adat = {
      name: name,
      email: email,
      telefon: telefon,
      cim: cim,
      szulido: szulido,
      adoazonosito: adoazonosito,
      adoszam: adoszam,
      szerepkor: user.szerepkor,
    };

    console.log(adat);

    try {
      const response = await axios.put("/api/users/" + user.id, adat);
      console.log("Siker: ", response.data);
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  return (
    <>
      <Container className="col-sm-6 m-0">
        <h1 className="text-center">Profil</h1>
        {user ? (
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
                      setTelefon(e.target.value), console.log(e.target.value)
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
                      setSzulido(e.target.value), console.log(e.target.value)
                    )}
                  />
                </td>
              </tr>
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
              <tr>
                <td>Adószám</td>
                <td>
                  <input
                    type="text"
                    value={adoszam}
                    onChange={(e) => (
                      setAdoszam(e.target.value), console.log(e.target.value)
                    )}
                  />
                </td>
              </tr>
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
        ) : (
          <div>Valami hiba történt, jelentkezz be újra!</div>
        )}
      </Container>
    </>
  );
}
