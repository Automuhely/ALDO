import React from "react";
import { Button, Table } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";
import useThemeContext from "../../contexts/ThemeContext";

export default function WorkFinishedTable({ BefejezettMunkak }) {
  const { csrf, user } = useAuthContext();
  const { darkTheme } = useThemeContext();

  let columns = [
    {
      Header: "Munkalapszám",
      accessor: "munkalapszam",
    },
    {
      Header: "Autó",
      accessor: "marka",
    },
    {
      Header: "Rendszám",
      accessor: "rendszam",
    },
    {
      Header: "Ügyfél",
      accessor: "ugyfel_nev",
    },

    {
      Header: "Leírás",
      accessor: "altalanosLeiras",
    },
    {
      Header: "Munkavezető",
      accessor: "munkavezeto_nev",
    },
    {
      Header: "Számlaszám",
      accessor: "szamlaszam",
    },
  ];

  const szamlagomb = async () => {
    try {
      const token = await csrf();
    } catch (error) {
      console.error("Hiba történt a számla megjelenítése közben:", error);
    }
  };

  return (
    <div>
      <h3>Befejezett munkák</h3>
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
          {BefejezettMunkak.map((munka, index) => (
            <tr key={index}>
              {columns.map((columns, columnIndex) => (
                <td key={columnIndex}>{munka[columns.accessor]}</td>
              ))}
              {user && user.szerepkor === "vezetoszerelo" && (
                <>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        szamlagomb(munka.munkalapszam);
                      }}
                    >
                      Számla megtekint
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
