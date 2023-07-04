import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Mainpage from '../App/Mainpage';
import searchYelp from '../../utils/searchYelp';


const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await searchYelp.search(term, location, sortBy);
    setBusinesses(businesses);
  }
    // Perform API request and update the businesses state with the fetched data
    // You can use the term and location parameters to customize the API request
    // Once the data is fetched, update the businesses state using setBusinesses

  return (
    <BrowserRouter>
      <div>
        <h1>ravenous</h1>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/search" element={<SearchBar/>} />
          <Route path="/list" element={<BusinessList businesses={businesses} />} />
        </Routes>
        <div>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList SearchBar={SearchBar} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
