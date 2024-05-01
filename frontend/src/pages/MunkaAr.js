import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import MunkaTable from "../components/MunkaTable";
import useAuthContext from "../contexts/AuthContext";
import { Container } from "react-bootstrap";

export default function MunkaAr() {
  const [munkak, setMunkak] = useState([]);
  const { user, getUser } = useAuthContext();

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
    <div>
      <Container>
        <h1 style={{ textAlign:"center", paddingTop:"30px",paddingBottom:"30px" }}>Munkadíjak</h1>
        <MunkaTable munkak={munkak} />
      </Container>
    </div>
  );
}
