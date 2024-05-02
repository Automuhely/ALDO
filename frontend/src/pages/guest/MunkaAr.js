import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import MunkaTable from "../../components/worker/MunkaTable";
import useAuthContext from "../../contexts/AuthContext";
import { Container } from "react-bootstrap";
import useThemeContext from "../../contexts/ThemeContext";

export default function MunkaAr() {
  const [munkak, setMunkak] = useState([]);
  const { user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  useEffect(() => {
    async function fetchMunkak() {
      try {
        const response = await axios.get("/api/arak");
        setMunkak(response.data);
      } catch (error) {
        console.error("Hiba történt a munkadíjak lekérésekor:", error);
      }
    }
    fetchMunkak();
  }, []);

  return (
    <Container fluid className={`${darkTheme.bg}`}>
      <Container className="p-5">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          Munkadíjak
        </h1>
        <MunkaTable munkak={munkak}/>
      </Container>
    </Container>
  );
}
