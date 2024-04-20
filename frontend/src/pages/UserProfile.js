import { useEffect, useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
  const markak = "";

  /* Contextek */
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      szamlakBetolt();
    }
  }, [user, getUser, autoim]);

  async function markakBetolt() {
    try {
      markak = await axios.get("/api/auto-markak");
    } catch (error) {console.log(error)}
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
        {user ? (
          <>
            <Row>
              <UserProfileForm />
              <UserAutosForm />
              <UserAutoMezo autoim={autoim} />
              <UserSzamlaMezo szamlaim={szamlaim} />
              <EmailForm user={user} autoim={autoim} />
            </Row>
          </>
        ) : (
          <div>Valami hiba történt, jelentkezz be újra!</div>
        )}
      </Container>
    </>
  );
}
