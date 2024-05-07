import { useEffect, useState } from "react";
import useAuthContext from "../../contexts/AuthContext";
import axios from "../../api/axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserProfileForm from "../../components/user/UserProfileForm";
import UserAutosForm from "../../components/user/UserCarForm";
import UserEmailForm from "../../components/user/UserEmailForm";
import UserCarTable from "../../components/user/UserCarTable";
import UserInvoiceTable from "../../components/user/UserInvoiceTable";
import useThemeContext from "../../contexts/ThemeContext";

export default function UserProfile() {
  /* Profilhoz tartozó elemek, táblák */
  const [szamlaim, setSzamlaim] = useState([{}]);
  const [autoim, setAutoim] = useState([{}]);
  const [markak, setMarkak] = useState([]);

  /* Contextek */
  const { user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      szamlakBetolt();
      markakBetolt();
    }
  }, [user, getUser]);

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
      {user ? (
        <>
          <Container fluid className={`${darkTheme.bg}`}>
            <Container>
            <Row>
              <Col sm={12} md={6} className=" mt-3">
                <UserProfileForm />
              </Col>
              <Col sm={12} md={6} className="mt-3">
                <UserAutosForm markak={markak} />
              </Col>
            </Row>
            <Row>
              <Col className="col-sm-12 m-auto mt-3 p-2" id="autokMezo">
                <UserCarTable autoim={autoim} />
              </Col>
            </Row>
            <Row>
              <Col className="col-sm-12 m-auto mt-3 p-2" id="szamlakMezo">
                <UserInvoiceTable szamlaim={szamlaim} />
              </Col>
            </Row>
            <Row>
              <Col
                className="col-sm-12 col-md-10 col-lg-6 m-auto mt-3 p-2 mb-5 "
                id="userEmailForm"
              >
                <UserEmailForm user={user} autoim={autoim} />
              </Col>
            </Row>
            </Container>
          </Container>
        </>
      ) : (
        <div>Valami hiba történt, jelentkezz be újra!</div>
      )}
    </>
  );
}
