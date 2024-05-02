import React, { useEffect, useState } from "react";
import useAuthContext from "../../contexts/AuthContext";
import Kapcsolat from "../../components/guest/Kapcsolat";
import TerkepElerhetoseg from "../../components/guest/TerkepElerhetoseg";
import { Col, Container, Row } from "react-bootstrap";
import useThemeContext from "../../contexts/ThemeContext";

export default function Emial() {
  const { csrf, user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      if (!user) {
        getUser();
        const token = await csrf();
        setToken(token);
      }
    };

    fetchCsrfToken();
  }, [user, getUser, csrf]);

  return (
    <Container fluid className={`${darkTheme.bg}`}>
      <Container>
        <h1 className="kapcsolatiurlap">Kapcsolati űrlap</h1>
        <Row>
          <Col className="mt-5">
          <Kapcsolat></Kapcsolat>
          </Col>
          <Col className="mb-5 mt-5">
          <TerkepElerhetoseg></TerkepElerhetoseg>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
