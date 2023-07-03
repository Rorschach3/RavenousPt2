import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Mainpage from '../App/Mainpage';


const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (term, location) => {
    // Perform API request and update the businesses state with the fetched data
    // You can use the term and location parameters to customize the API request
    // Once the data is fetched, update the businesses state using setBusinesses
  };

  return (
    <BrowserRouter>
      <div>
        <h1>ravenous</h1>
        <Routes>
          <Route path="/" element={<Mainpage onSearch={handleSearch} />} />
          <Route path="/search" element={<SearchBar onSearch={handleSearch} />} />
          <Route path="/list" element={<BusinessList businesses={businesses} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
