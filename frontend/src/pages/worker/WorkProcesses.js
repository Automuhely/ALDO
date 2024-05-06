import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../contexts/AuthContext";
import MunkaFolyTable from "../../components/worker/WorkInProgressTable";
import MunkaElNemKezdetTable from "../../components/worker/WorkPickedUpTable";
import MunkaBefejezettTable from "../../components/worker/WorkFinishedTable";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useThemeContext from "../../contexts/ThemeContext";
import WorkSheetForm from "../../components/worker/WorkSheetForm";

export default function WorkProcesses() {
  const [ElKezdettMunkak, setElKezdettMunkak] = useState([]);
  const [ElNemKezdetMunkak, setElNemKezdetMunkak] = useState([]);
  const [BefejezettMunkak, setBefejezettMunkak] = useState([]);
  const { csrf, user, getUser } = useAuthContext();
  const [token, setToken] = useState();
  const { darkTheme } = useThemeContext();
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    if (!user) {
      getUser();
    }
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = await csrf();
      console.log("Token:", token);
      const responses = await Promise.all([
        axios.get("/api/munkalapok/0"),
        axios.get("/api/munkalapok/1"),
        axios.get("/api/munkalapok/2"),
      ]);
      responses.forEach((response, index) => {
        if (index === 0) {
          setElNemKezdetMunkak(response.data);
        } else if (index === 1) {
          setElKezdettMunkak(response.data);
        } else {
          setBefejezettMunkak(response.data);
        }
        console.log("Adatok:", response);
      });
    } catch (error) {
      console.error("Hiba történt a munkalapok lekérésekor:", error);
    }
  }

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <Container fluid className={`${darkTheme.bg}`}>
      <Container className="p-5 d-flex flex-column align-items-center">
        <h1 style={{ textAlign: "center" }}>Munkalapok</h1>
        {user && user.szerepkor === "vezetoszerelo" && (
          <div className="mt-4 mb-4">
            <Button onClick={handleToggleForm} variant="primary">
              {showForm
                ? "Munkalap felvitele megszakítása"
                : "Új munkalap felvitele"}
            </Button>
          </div>
        )}
        {showForm && <WorkSheetForm />}
        <MunkaElNemKezdetTable ElNemKezdetMunkak={ElNemKezdetMunkak} />
        <MunkaFolyTable ElKezdettMunkak={ElKezdettMunkak} />
        <MunkaBefejezettTable BefejezettMunkak={BefejezettMunkak} />
      </Container>
    </Container>
  );
}
