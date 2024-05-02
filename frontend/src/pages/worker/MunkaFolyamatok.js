import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../contexts/AuthContext";
import MunkaFolyTable from "../../components/worker/MunkaFolyTable";
import MunkaElNemKezdetTable from "../../components/worker/MunkaElNemKezdetTable";
import MunkaBefejezettTable from "../../components/worker/MunkaBefejezettTable";
import { Container } from "react-bootstrap";

export default function MunkaFolyamatok() {
  const [ElKezdettMunkak, setElKezdettMunkak] = useState([]);
  const [ElNemKezdetMunkak, setElNemKezdetMunkak] = useState([]);
  const [BefejezettMunkak, setBefejezettMunkak] = useState([]);
  const { csrf ,user,getUser} = useAuthContext();
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

  useEffect(() => {
    Promise.all([
      axios.get("/api/folyamatmunka"),
      axios.get("/api/befejezettmunka"),
      axios.get("/api/elnemkezdetmunka")
    ])
    .then((responses) => {
      const elKezdettMunkak = responses[0].data;
      const befejezettMunkak = responses[1].data;
      const elNemKezdetMunkak = responses[2].data;
      setElKezdettMunkak(elKezdettMunkak);
      setBefejezettMunkak(befejezettMunkak);
      setElNemKezdetMunkak(elNemKezdetMunkak);
    })
    .catch((error) => {
      console.error("Hiba történt az adatok lekérésekor:", error);
    });
  }, []);
  
  
  // useEffect(() => {
  //   axios
  //     .get("/api/folyamatmunka")
  //     .then((response) => {
  //       setElKezdettMunkak(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Hiba történt az elkezdett munkák lekérésekor:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/befejezettmunka")
  //     .then((response) => {
  //       setBefejezettMunkak(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Hiba történt a befejezett munkák lekérésekor::", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/elnemkezdetmunka")
  //     .then((response) => {
  //       setElNemKezdetMunkak(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Hiba történt az el nem kezdett munkák lekérésekor:",
  //         error
  //       );
  //     });
  // }, []);

  return (
    <div>
      <Container>
      <h1 style={{ textAlign:"center" }}>Munkafolyamatok</h1>
      <MunkaElNemKezdetTable ElNemKezdetMunkak={ElNemKezdetMunkak} />
      <MunkaFolyTable ElKezdettMunkak={ElKezdettMunkak} />
      <MunkaBefejezettTable BefejezettMunkak={BefejezettMunkak} />
      </Container>
      
    </div>
  );
}
