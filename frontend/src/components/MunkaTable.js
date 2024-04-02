import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export default  function MunkaTable({ munkak }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Munka megnevezése',
        accessor: 'megnevezes', 
      },
      {
        Header: 'Munka ára',
        accessor: 'ara', 
        Cell: ({ value }) => `${value} Ft`,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: munkak });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '8px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


