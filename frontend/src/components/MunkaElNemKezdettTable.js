import React, { useMemo } from "react";
import { useTable } from "react-table";

export default function MunkaElNemKezdettTable({ ElNemKezdettMunkak, onMoveToStarted }) {
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
          <button onClick={() => onMoveToStarted(row.original)}>Kezdés</button>
        ),
      },
    ],
    []
  );

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
