import React from 'react';

const TableRow = ({ row }) => {
  return (
    <tbody>
      <tr>
        {
          row.map(cell => {
            return <th>{cell}</th>
          })
        }
      </tr>
    </tbody>  
  )
}

export default TableRow;
