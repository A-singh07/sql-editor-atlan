import React from 'react';
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles'
// import alasql from 'alasql';
// import csv from './data/categories.csv';
// Layout
import MainLayout from './layouts/mainLayout/MainLayout';

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
  })

  // React.useEffect(() => {
  //   alasql.promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [csv])
  //     .then(res => console.log('DATA', res))

  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
