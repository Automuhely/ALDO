import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";
import axios from "../../api/axios";

export default function MunkaTable({ munkak }) {
  const { csrf, user } = useAuthContext();
  const { darkTheme } = useThemeContext();

  const [editedRows, setEditedRows] = useState([]);
  const [editedAra, setEditedAra] = useState({});

  const toggleEditing = (id) => {
    if (editedRows.includes(id)) {
      setEditedRows(editedRows.filter((rowId) => rowId !== id));
    } else {
      setEditedRows([...editedRows, id]);
    }
  };

  const isRowEdited = (id) => editedRows.includes(id);

  const handleAraChange = (id, newValue) => {
    setEditedAra({ ...editedAra, [id]: newValue });
  };

  const szerkesztesgomb = async (id) => {
    try {
      const token = await csrf();
      const data = { id, ara: editedAra[id], _token: token };
      console.log("Munka megnevezése:", id);
      const response = await axios.put(`/api/feladats/${id}`, data);
      console.log("Sikeres munka ár szerkesztése!");
      alert("Sikeres munka ár szerkesztése!");
      toggleEditing(id);
      window.location.reload();
    } catch (error) {
      console.error("Hiba történt a munka ár megváltoztatása közben:", error);
      alert("Hiba történt a munka ár megváltoztatása közben")
    }
  };

  const torlesgomb = async (id) => {
    try {
      const token = await csrf();
      const data = { id, _token: token };
      console.log("Munka ár id:", id);
      console.log("Felhasználó: ",user)
      const response = await axios.delete(`/api/feladats/${id}`, { data }); 
      console.log("Sikeres munka ár törlése!");
      window.location.reload();
      alert("Sikeres munka ár törlése!");
    } catch (error) {
      console.error("Hiba történt a munka törlésekor:", error);
      alert("Hiba történt a munka törlésekor!");
    }
  };

  return (
    <Table className={`${darkTheme.tableTheme} text-center worktable mt-4`}>
      <thead className="text-center">
        <tr className="text-center">
          {user && user.szerepkor === "vezetoszerelo" && <th>ID</th>}
          <th>Munka megnevezése</th>
          <th>Munka ára</th>
          {user && user.szerepkor === "vezetoszerelo" && (
            <>
              <th> </th>
              <th> </th>
            </>
          )}
        </tr>
      </thead>
      <tbody className="text-center">
        {munkak.map((munka, index) => (
          <tr key={index} className="text-center">
            {user && user.szerepkor === "vezetoszerelo" && <td>{munka.id}</td>}
            <td>{munka.megnevezes}</td>
            <td>
              {isRowEdited(munka.id) ? (
                <Form.Control
                  type="text"
                  value={editedAra[munka.id] ?? munka.ara}
                  onChange={(e) => handleAraChange(munka.id, e.target.value)}
                />
              ) : (
                `${munka.ara.toLocaleString()} Ft.-`
              )}
            </td>
            {user && user.szerepkor === "vezetoszerelo" && (
              <>
                <td>
                  {isRowEdited(munka.id) ? (
                    <Button
                      variant="danger"
                      onClick={() => szerkesztesgomb(munka.id)}
                    >
                      Mentés
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => toggleEditing(munka.id)}
                    >
                      Szerkesztés
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => torlesgomb(munka.id)}
                  >
                    Törlés
                  </Button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
  
}
