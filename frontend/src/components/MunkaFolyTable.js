import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { Button, Table } from "react-bootstrap";
import useAuthContext from "../contexts/AuthContext";
import axios from "../api/axios";

export default function MunkaFolyTable({ ElKezdettMunkak}) {
  const { csrf} = useAuthContext();
 
 
  const columns = useMemo(
    () => [
      { Header: "Munkalapszám", accessor: "munkalapszam" },
      { Header: "Autó", accessor: "marka" },
      { Header: "Rendszám", accessor: "rendszam" },
      { Header: "Ügyfél", accessor: "name" },
      { Header: "Leírás", accessor: "megnevezes" },
      { Header: "Munkavezető", accessor: "munkavezeto" },
      {
        Header: " ",
        accessor: "befejezes",
        Cell: ({ row }) => (
          <Button variant="primary" onClick={() => befejezgomb(row.original.munkalapszam)}>
            Befejezés
          </Button>)
      },
    ],
    []
  );

  
  const befejezgomb = async (munkalapszam) => {
    try {
      const token = await csrf();
      const data = { munkalapszam, statusz: 1, _token: token };
      console.log("Munkalapszám:",munkalapszam)
      // console.log("Státusz:",statusz)
      const response = await axios.post("/api/befejezettmunkapost", data);
      console.log("Státusz megváltoztatva");
      window.location.reload()
      alert("Státusz megváltoztatva")
      
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: ElKezdettMunkak });

  return (
    <div>
      <h3>Elkezdett munkák</h3>
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
