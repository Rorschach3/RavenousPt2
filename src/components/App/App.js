import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Mainpage from '../App/Mainpage';





function App() {
  
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
