import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// Styles
import styles from './tableCustom.module.css';

const TableDataGrid = ({ tableRows, tableColumns }) => {

  const [pageSize, setPageSize] = useState(10)

  return (
    <div className={styles.dataGridContainer}>
      <DataGrid
        className={styles.dataGrid}
        rows={tableRows}
        getRowId={(row) => row[Object.keys(row)[0]]}
        columns={tableColumns}
        rowsPerPageOptions={[10, 20, 50, 100]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSize={pageSize}
        // autoHeight
        // autoPageSize
        pagination
        sx={{
          borderRadius: '10px',
          background: '#fff',
          border: 'none',
          '& .MuiDataGrid-row': { cursor: 'pointer' },
          '& .MuiDataGrid-row:hover': { background: '#f3f5f7' },
        }}
      />
    </div>
  )
}

export default TableDataGrid
