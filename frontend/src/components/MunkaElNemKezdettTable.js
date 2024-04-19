import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import axios from "../api/axios";
import useAuthContext from "../contexts/AuthContext";

export default function MunkaElNemKezdettTable({ ElNemKezdettMunkak }) {
  const { csrf } = useAuthContext();
  const [token, setToken] = useState("");

  useEffect(() => {
    // CSRF token lekérése és beállítása
    const fetchCsrfToken = async () => {
      try {
        const token = await csrf();
        setToken(token);
      } catch (error) {
        console.error("Hiba történt a CSRF token lekérése során:", error);
      }
    };
    fetchCsrfToken();
  }, [csrf]);


  const columns = useMemo(
    () => [
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
        accessor: "name",
      },
      {
        Header: "Leírás",
        accessor: "megnevezes",
      },
      {
        Header: "Elvitték",
        accessor: "elvitel_ido",
      },
      {
        Header: "Munkavezető",
        accessor: "munkavezeto",
      },
      {
        Header: "Számlaszám",
        accessor: "szamlaszam",
      },
      {
        Header: " ",
        accessor: "kezdes",
        Cell: ({ row }) => (
          <button onClick={()=> kezdesgomb(row.munkalapszam)}>Kezdés</button>
        ),
      },
    ],
    []
  );

  const kezdesgomb = async (munkalapszam) => {
    try {
      // CSRF token lekérése
      await csrf();
      // A kéréshez tartozó adatok összeállítása
      const data = {
        munkalapszam: munkalapszam,
        statusz: 1,
        _token: token, // A token hozzáadása az adatokhoz
      };
      // Elküldjük a kérést a backend-nek a státusz módosításához
      const response = await axios.post("/api/folyamatmunkapost", data);
      console.log("Státusz megváltoztatva");
      // Ha a kérés sikeres, frissítjük az oldalt
      // Frissítheted az oldalt a megfelelő módon, pl. újratöltéssel vagy a friss adatok letöltésével
      window.location.reload(); // Példa: oldal újratöltése
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };
  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: ElNemKezdettMunkak });

  return (
    <div>
      <h3>Következő munkák</h3>
      <table {...getTableProps()} style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ border: "1px solid black", padding: "8px" }}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ border: "1px solid black", padding: "8px" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
