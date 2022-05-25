import React from 'react';
import alasql from 'alasql';
import csv from './data/categories.csv';
// Layout
import MainLayout from './layouts/mainLayout/MainLayout';

import './App.css';

function App() {

  React.useEffect(() => {
    alasql.promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [csv])
      .then(res => console.log('DATA', res))

  }, [])

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
