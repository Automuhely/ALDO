import React, { useEffect, useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";
import axios from "../../api/axios";
import useThemeContext from "../../contexts/ThemeContext";

export default function WorkInProgressTable({ ElKezdettMunkak }) {
  const { csrf,user} = useAuthContext();
  const { darkTheme } = useThemeContext();

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
      const data = { munkalapszam, statusz: 1, _token: token };
      console.log("Munkalapszám:",munkalapszam)
      console.log("Adatok:",ElKezdettMunkak)
      // console.log("Státusz:",statusz)
      const response = await axios.post("/api/befejezettmunkapost", data);
      console.log("Státusz megváltoztatva");
      window.location.reload()
      alert("Státusz megváltoztatva")
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  return (
    <div >
      <h3>Elkezdett munkák</h3>
      <Table className={`${darkTheme.tableTheme}`}>
      <thead>
        <tr>
          {columns.map((columns, index) => (
            <th key={index} scope="col">
              {columns.Header}
            </th>
          ))}
          {user && user.szerepkor === "vezetoszerelo" && (
            <>
              <th> </th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {ElKezdettMunkak.map((munka, index) => (
          <tr key={index}>
            {columns.map((columns, columnIndex) => (
              <td key={columnIndex}>{munka[columns.accessor]}</td>
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
