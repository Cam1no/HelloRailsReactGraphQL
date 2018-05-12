import React from 'react';
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';

const headers = [
  'first',
  'second',
  'third',
  'fourth',
];

const rows = [
  ['firstRow', 'secondRow', 'thirdRow', 'fourthRow'],
  ['firstRow', 'secondRow', 'thirdRow', 'fourthRow'],
  ['firstRow', 'secondRow', 'thirdRow', 'fourthRow'],
  ['firstRow', 'secondRow', 'thirdRow', 'fourthRow'],
]

const CommonTable = () => {
  return(
    <Table striped bordered condensed hover>
      <TableHeader headers={headers} />
      {
        rows.map(row => {
          return <TableRow row={row} />
        })
      }
    </Table>
  )
}


export default CommonTable;
