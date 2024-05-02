import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import {  Button, Table } from "react-bootstrap";
import useAuthContext from "../../contexts/AuthContext";


export default function MunkaBefejezettTable({ BefejezettMunkak }) {
  const { csrf} = useAuthContext();

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
        Header: "Munkavezető",
        accessor: "munkavezeto",
      },
      {
        Header: "Számlaszám",
        accessor: "szamlaszam",
      },
      {
        Header: " ",
        accessor: "szamla",
        Cell: ({ row }) => (
          <Button variant="primary" onClick={() => szamlagomb()}>
            Számla
          </Button>)
      },
      
    ],
    []
  );

  const szamlagomb = async () => {
    try {
      const token = await csrf();
      
    } catch (error) {
      console.error("Hiba történt a számla megjelenítése közben:", error);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: BefejezettMunkak });

  return (
    <div><h3>Befejezett munkák</h3>
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
      </Table></div>
    
  );
}