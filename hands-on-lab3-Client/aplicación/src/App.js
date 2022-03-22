import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableCountries from './components/TableLayout';

const App = () => {

  return (
  
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<TableCountries />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
