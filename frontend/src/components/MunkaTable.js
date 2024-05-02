import React, { useCallback } from "react";
import { Button, Table } from "react-bootstrap";
import useAuthContext from "../contexts/AuthContext";
import axios from "../api/axios";

export default function MunkaTable({ munkak }) {
  const { csrf, user } = useAuthContext();

  // const szerkesztesgomb = async (id) => {
  //   try {
  //     const token = await csrf();
  //     const data = { id, _token: token };
  //     console.log("Munka megnevezése:", id);
  //     const response = await axios.put("/api/arak/{id}", data);
  //     console.log("Sikeres munka ár szerkesztése!");
  //     alert("Sikeres munka ár szerkesztése!");
  //   } catch (error) {
  //     console.error("Hiba történt a munka ár megváltoztatása közben:", error);
  //     alert("Hiba történt a munka ár megváltoztatása közben")
  //   }
  // };

  const torlesgomb = async (id) => {
    try {
      const token = await csrf();
      const data = { id, _token: token };
      console.log("Munka ár id:", id);
      console.log("Felhasználó: ",user)
      const response = await axios.delete(`/api/arak/${id}`, { data });
      console.log("Sikeres munka ár törlése!");
      window.location.reload();
      alert("Sikeres munka ár törlése!");
    } catch (error) {
      console.error("Hiba történt a munka törlésekor:", error);
      alert("Hiba történt a munka törlésekor!");
    }
  };

  let columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "Munka megnevezése",
      accessor: "megnevezes",
    },
    {
      Header: "Munka ára",
      accessor: "ara",
      Cell: ({ value }) => `${value} Ft`,
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col">
              {column.Header}
            </th>
          ))}
          {user && user.szerepkor === "vezetoszerelo" && (
            <>
              <th> </th>
              <th> </th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {munkak.map((munka, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{munka[column.accessor]}</td>
            ))}
            {user && user.szerepkor === "vezetoszerelo" && (
              <>
                {/* <td>
                  <Button
                    variant="primary"
                    onClick={() => szerkesztesgomb(munka.id)}
                  >
                    Szerkesztés
                  </Button>
                </td> */}
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
