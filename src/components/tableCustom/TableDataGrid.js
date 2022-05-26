import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// Styles
import styles from './tableCustom.module.css';



const TableDataGrid = ({ tableRows, tableColumns }) => {

  const [pageSize, setPageSize] = useState(10)

  return (
    <div style={{ height: 350, width: '100%', marginTop: '3rem' }}>
      <DataGrid
        className={styles.dataGridContainer}
        rows={tableRows}
        columns={tableColumns}
        rowsPerPageOptions={[20, 50, 100]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSize={pageSize}
        autoHeight
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
