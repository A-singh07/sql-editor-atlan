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

  // Convert the response suitable got MUI data grid Table
  const dataGridFormat = (res) => {
    setTableData({
      tableColumn: [],
      tableRow: []
    })

    let column = [];

    // Array for column fields - as per MUI DataGrid structure.
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
  }

  // Run SQL command received from the editor
  const runSqlCommand = (command, table) => {
    alasql.promise(command, [table])
      .then(res => {
        dataGridFormat(res)
      })
  }

  // Load Data on table when selected from the list.
  const loadTableData = (table, tableName) => {

    alasql.promise("select * from CSV(?)", [table])
      .then(res => {
        // console.log('RES', res)
        setCommandValue(`select * from ${tableName}`)
        dataGridFormat(res)
      })
      .catch(err => console.log('Error in running the command!', err));
  }

  return (
    <ThemeProvider theme={theme}>
      <SqlContext.Provider value={{ loadTableData, runSqlCommand, commandValue, setCommandValue, tableData, setTableData }}>
        <MainLayout />
      </SqlContext.Provider>
    </ThemeProvider>
  );
}

export default App;
