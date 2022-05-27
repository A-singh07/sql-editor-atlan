import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles'
import alasql from 'alasql';
// Layout
import MainLayout from './layouts/mainLayout/MainLayout';
// Context
import { SqlContext } from './context/SqlContext';

import './App.css';

function App() {

  const theme = createTheme({
    typography: {
      "fontFamily": `"Poppins", sans-serif`,
    },
    // palette: {
    //   primary: {
    //     main: ""
    //   }
    // }
  });

  const [commandValue, setCommandValue] = useState("")
  const [tableData, setTableData] = useState({
    tableColumn: [],
    tableRow: [],
  })

  const loadTableData = (table, tableName) => {

    setTableData({
      tableColumn: [],
      tableRow: []
    })

    alasql.promise("select * from CSV(?)", [table])
      .then(res => {
        let column = [];
        // console.log('RES', res)
        setCommandValue(`select * from ${tableName}`)

        // Array for column fields - required for MUI DataGrid structure.
        Object.keys(res[0]).forEach((key) => {
          const columnCell = {
            field: key,
            headerName: key,
            width: (key.length * 10) + 20
          }
          column.push(columnCell);
        });

        setTableData({
          tableColumn: column,
          tableRow: res,
        });
      })
      .catch(err => console.log('Error in running the command!', err));
  }

  React.useEffect(() => {

    // const csvFile = process.env.PUBLIC_URL + '/data/categories.csv';
    // const fileName = csvFile.split('.')
    // console.log('FILEE', fileName)

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SqlContext.Provider value={{ loadTableData, commandValue, setCommandValue, tableData, setTableData }}>
        <MainLayout />
      </SqlContext.Provider>
    </ThemeProvider>
  );
}

export default App;
