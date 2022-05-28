import { useContext, lazy, Suspense } from 'react';
// import TableDataGrid from '../../components/tableCustom/TableDataGrid';
// Context
import { SqlContext } from '../../context/SqlContext'
// component
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';
const TableDataGrid = lazy(() => import('../../components/tableCustom/TableDataGrid'))

const TableLayout = () => {

  const { tableData } = useContext(SqlContext);

  // const tableColumn = [
  //   {
  //     field: 'id',
  //     headerName: 'ID'
  //   },
  //   {
  //     field: 'col1',
  //     headerName: 'Col1'
  //   },
  //   {
  //     field: 'col2',
  //     headerName: 'Col2'
  //   },
  // ]

  // const tableRow = [
  //   {
  //     id: '1',
  //     col1: 'qwerty',
  //     col2: '123412'
  //   },
  //   {
  //     id: '2',
  //     col1: 'asdasf',
  //     col2: '12ascacac'
  //   },
  //   {
  //     id: '3',
  //     col1: 'asdas',
  //     col2: '129cuans'
  //   },
  // ]

  return (
    <Suspense fallback={<LoadingComponent />}>
      <TableDataGrid
        tableColumns={tableData.tableColumn}
        tableRows={tableData.tableRow}
      />
    </Suspense>
  )
}

export default TableLayout
