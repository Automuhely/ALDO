import React, { useMemo } from "react";
import { useTable } from "react-table";

export default function MunkaFolyTable({ ElKezdettMunkak ,  onMoveToFinished}) {
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
        accessor: "befejezes",
        Cell: ({ row }) => (
          <button onClick={() => {
            console.log("Befejezés");
        }}>Befejezés</button>)
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: ElKezdettMunkak });

  return (
    <div>
      <h3>Elkezdett munkák</h3>
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