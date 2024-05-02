import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { Button, Table } from "react-bootstrap";
import axios from "../../api/axios";
import useAuthContext from "../../contexts/AuthContext";

export default function MunkaElNemKezdetTable({ ElNemKezdetMunkak }) {
  const { csrf} = useAuthContext();

  const columns = useMemo(
    () => [
      { Header: "Munkalapszám", accessor: "munkalapszam" },
      { Header: "Autó", accessor: "marka" },
      { Header: "Rendszám", accessor: "rendszam" },
      { Header: "Ügyfél", accessor: "name" },
      { Header: "Leírás", accessor: "megnevezes" },
      {
        Header: " ",
        accessor: "kezdes",
        Cell: ({ row }) => (
          <Button variant="primary" onClick={() => kezdesgomb(row.original.munkalapszam)}>
            Kezdés
          </Button>
        ),
      },
    ],
    []
  );

  const kezdesgomb = async (munkalapszam) => {
    try {
      const token = await csrf();
      const data = { munkalapszam, statusz: 1, _token: token };
      console.log("Munkalapszám a kezdés táblánál:",munkalapszam)
      const response = await axios.post("/api/folyamatmunkapost", data);
      console.log("Státusz megváltoztatva");
      window.location.reload()
      alert("Státusz megváltoztatva!A munkafolyamat átkerült az elkezdett munkák táblázatba.");
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: ElNemKezdetMunkak });

  return (
    <div>
      <h3>Felvett munkák</h3>
      <Table striped bordered hover {...getTableProps()} style={{ textAlign:"center" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

