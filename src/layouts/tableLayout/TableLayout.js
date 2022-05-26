import React from 'react';
import TableDataGrid from '../../components/tableCustom/TableDataGrid';
// import TableCustom from '../../components/tableCustom/TableCustom';

const TableLayout = () => {

  const tableColumn = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'col1',
      headerName: 'Col1'
    },
    {
      field: 'col2',
      headerName: 'Col2'
    },
  ]

  const tableRow = [
    {
      id: '1',
      col1: 'qwerty',
      col2: '123412'
    },
    {
      id: '2',
      col1: 'asdasf',
      col2: '12ascacac'
    },
    {
      id: '3',
      col1: 'asdas',
      col2: '129cuans'
    },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <TableDataGrid tableColumns={tableColumn} tableRows={tableRow} />
      {/* <TableCustom /> */}
    </div>
  )
}

export default TableLayout
