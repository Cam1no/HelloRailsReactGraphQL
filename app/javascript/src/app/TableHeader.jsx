import React from 'react';

const TableHeader = ({ headers }) => {
  return(
    <thead>
      <tr>
        {
          headers.map(header => {
            return <th>{header}</th>
          })
        }
      </tr>
    </thead>
  )
}

export default TableHeader;
