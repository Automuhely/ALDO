import React, { useMemo } from "react";
import { Button, Table } from "react-bootstrap";
import { useTable } from "react-table";
import useAuthContext from "../contexts/AuthContext";
import axios from "../api/axios";

export default function MunkaTable({ munkak }) {
  const { csrf,Torles} = useAuthContext();
  const columns = useMemo(
    () => [
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
      {
        Header: " ",
        accessor: "Szerkesztés",
        Cell: ({ row }) => (
          <Button variant="primary" onClick={() => szerkesztesgomb(row.original.id)}>
            Szerkesztés
          </Button>
        ),
      },
      {
        Header: " ",
        accessor: "Törlés",
        Cell: ({ row }) => (
          <Button variant="primary" onClick={() => torlesgomb(row.original.id)}>
            Törlés
          </Button>
        ),
      },
    ],
    []
  );

  const szerkesztesgomb = async (id) => {
    try {
      const token = await csrf();
      const data = { id, _token: token };
      console.log("Munka megnevezése:",id)
      const response = await axios.put("/api/arak/{id}", data);
      console.log("Sikeres munka ár szerkesztése!");
      alert("Sikeres munka ár szerkesztése!");
    } catch (error) {
      console.error("Hiba történt a státusz megváltoztatása közben:", error);
    }
  };

  const torlesgomb = async (id) => {
    try {
        const token = await csrf();
        const data = { id,_token: token };
        console.log("Munka ár id:", id);
        const response = await axios.delete(`/api/arak/${id}`, { data }); 
        console.log("Sikeres munka ár törlése!");
        window.location.reload()
        alert("Sikeres munka ár törlése!");
    } catch (error) {
        console.error("Hiba történt a munka törlésekor:", error);
    }
};


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: munkak });

  return (
    <Table
      {...getTableProps()}
      style={{ border: "1px solid black", borderCollapse: "collapse" ,textAlign:"center"}}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ border: "1px solid black", padding: "8px" }}
              >
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
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: "1px solid black", padding: "8px" }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
