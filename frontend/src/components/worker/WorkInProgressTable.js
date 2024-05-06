import React, { useEffect, useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";
import axios from "../../api/axios";
import useThemeContext from "../../contexts/ThemeContext";

export default function WorkInProgressTable({ ElKezdettMunkak }) {
  const { csrf,user} = useAuthContext();
  const { darkTheme } = useThemeContext();
  ElKezdettMunkak.sort((a, b) => a.id - b.id);
  let columns =  [
      { Header: "Munkalapszám", accessor: "munkalapszam" },
      { Header: "Autó", accessor: "marka" },
      { Header: "Rendszám", accessor: "rendszam" },
      { Header: "Ügyfél", accessor: "ugyfel_nev" },
      { Header: "Leírás", accessor: "altalanosLeiras" },
      { Header: "Munkavezető", accessor: "munkavezeto_nev" },
    
    ]
  
  const befejezgomb = async (munkalapszam) => {
    try {
      const token = await csrf();
      const data = { munkalapszam, statusz: 2, _token: token };
      const response = await axios.post("/api/befejezettmunkapost", data);
      window.location.reload()
      alert("Státusz megváltoztatva! A munkafolyamat átkerült az befejezett munkák táblázatba.")
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  return (
    <div >
      <h3>Elkezdett munkák</h3>
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
              <th> </th>
          )}
        </tr>
      </thead>
      <tbody>
        {ElKezdettMunkak.map((munka, index) => (
          <tr key={index}>
               <th></th>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} data-label={column.Header}>{munka[column.accessor]}</td>
            ))}
            {user && user.szerepkor === "vezetoszerelo" && (
              <>
                <td>
                <Button
                    variant="primary"
                    onClick={() => {befejezgomb(munka.munkalapszam)}
                  }
                  >
                    Befejezés
                  </Button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}
