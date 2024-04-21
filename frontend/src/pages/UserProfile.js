import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "../api/axios";
import UserProfileForm from "../components/UserProfileForm";
import UserAutosForm from "../components/UserAutosForm";
import UserAutoMezo from "../components/UserAutoMezo";
import EmailForm from "../components/EmailForm";
import UserSzamlaMezo from "../components/UserSzamlaMezo";

export default function UserProfile() {
  /* Profilhoz tartozó elemek, táblák */
  const [szamlaim, setSzamlaim] = useState([{}]);
  const [autoim, setAutoim] = useState([{}]);
  const [markak, setMarkak] = useState([]);

  /* Contextek */
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      szamlakBetolt();
      markakBetolt();
    }
    console.log("render");
  }, [user]);

  async function markakBetolt() {
    try {
      let response = await axios.get("/api/auto-markak");
      setMarkak(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function szamlakBetolt() {
    try {
      const szamlakAdat = await axios.get("/api/szamlaim").then((e) => {
        return e.data;
      });
      const autoimAdat = await axios.get("/api/autoim").then((e) => {
        return e.data;
      });
      /*                                                                        try catch ?????  */
      setSzamlaim(szamlakAdat);
      setAutoim(autoimAdat);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container fluid>
        <Container>

        {user ? (
          <>
            <Row>
              <Col className="col-sm-12 col-md-6 m-auto mt-5" id="profilMezo">
                <UserProfileForm />
              </Col>
              <Col className="col-sm-12 col-md-6 mt-5" id="ujAutoMezo">
                <UserAutosForm markak={markak}/>
              </Col>
              <Col className="col-sm-12 m-auto pt-4 mt-5" id="autokMezo">
                <UserAutoMezo autoim={autoim} />
              </Col>
              <Col className="col-sm-12 m-auto mt-5" id="szamlakMezo">
                <UserSzamlaMezo szamlaim={szamlaim} />
              </Col>
              <Col className="col-sm-12 col-md-6 m-auto mt-5 mb-5" id="emailForm">
                <EmailForm user={user} autoim={autoim} />
              </Col>
            </Row>
          </>
        ) : (
          <div>Valami hiba történt, jelentkezz be újra!</div>
        )}
      </Container>
      </Container>

    </>
  );
}
