import React, { useEffect, useMemo } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "../../api/axios";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";

export default function WorkPickedUpTable({ ElNemKezdetMunkak }) {
  const { csrf, user } = useAuthContext();
  const { darkTheme } = useThemeContext();

  let columns = [
    { Header: "Munkalapszám", accessor: "munkalapszam" },
    { Header: "Autó", accessor: "marka" },
    { Header: "Rendszám", accessor: "rendszam" },
    { Header: "Ügyfél", accessor: "ugyfel_nev" },
    { Header: "Leírás", accessor: "altalanosLeiras" },
  ];

  const kezdesgomb = async (munkalapszam) => {
    try {
      const token = await csrf();
      const data = { munkalapszam, statusz: 1, _token: token };
      const response = await axios.post("/api/folyamatmunkapost", data);
      window.location.reload();
      alert(
        "Státusz megváltoztatva!A munkafolyamat átkerült az elkezdett munkák táblázatba."
      );
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  return (
    <div>
      <h3>Felvett munkák</h3>
      <Table className={`${darkTheme.tableTheme} responsive-table`}>
        <thead>
          <tr>
            <th></th>
            {columns.map((column, index) => (
              <th key={index} scope="col">
                {column.Header}
              </th>
            ))}
            {user && user.szerepkor === "vezetoszerelo" && (
              <th></th>
            )}
          </tr>
        </thead>
        <tbody>
          {ElNemKezdetMunkak.map((munka, index) => (
            <tr key={index}>
              <th></th>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} data-label={column.Header}>
                  {munka[column.accessor]}
                </td>
              ))}
              {user && user.szerepkor === "vezetoszerelo" && (
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      kezdesgomb(munka.munkalapszam);
                    }}
                  >
                    Kezdés
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

