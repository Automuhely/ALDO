import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import MunkaTable from "../../components/worker/MunkaTable";
import useAuthContext from "../../contexts/AuthContext";
import { Col, Container, Row } from "react-bootstrap";
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
  }, [getUser, user]);
  
 
  async function fetchMunkak() {
    try {
      const response = await axios.get("/api/munkaars");
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
    <Container className="p-2 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <h1>Munkadíjak</h1>
      {user && user.szerepkor === "vezetoszerelo" && (
        <div className="mt-4 mb-4">
          <Button onClick={handleToggleForm} variant="primary">
            {showForm ? "Munka felvitele megszakítása" : "Új munka felvitele"}
          </Button>
        </div>
      )}
      {showForm && <WorkTableForm />}
      <Row>
        <Col xs={12} md={6} className="">
          <MunkaTable munkak={munkak} />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <img src="/img/dhiva-krishna-YApS6TjKJ9c-unsplash.jpg" alt="" className="img-fluid worktableimg" />
        </Col>
      </Row>
    </Container>
  </Container>
  );
}
