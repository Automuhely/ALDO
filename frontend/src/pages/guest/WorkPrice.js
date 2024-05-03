import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import MunkaTable from "../../components/worker/MunkaTable";
import useAuthContext from "../../contexts/AuthContext";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useThemeContext from "../../contexts/ThemeContext";
import WorkTableForm from "../../components/worker/WorkTableForm";

export default function WorkPrice() {
  const [munkak, setMunkak] = useState([]);
  const { user, getUser } = useAuthContext();
  const { darkTheme } = useThemeContext();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!user) {
      getUser();
    }
    fetchMunkak();
  }, []);
  
 
  async function fetchMunkak() {
    try {
      const response = await axios.get("/api/feladats");
      console.log(response)
      setMunkak(response.data);
    } catch (error) {
      console.error("Hiba történt a munkadíjak lekérésekor:", error.data);
    }
  }
  
  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <Container fluid className={`${darkTheme.bg}`}>
    <Container className="p-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <h1>Munkadíjak</h1>
      {user && user.szerepkor === "vezetoszerelo" && (
        <div className="mt-4 mb-4">
          <Button onClick={handleToggleForm} variant="primary">
            {showForm ? "Munka felvitele megszakítása" : "Új munka felvitele"}
          </Button>
        </div>
      )}
      {showForm && <WorkTableForm />}
      <MunkaTable munkak={munkak} />
    </Container>
  </Container>
  
  
  );
}
