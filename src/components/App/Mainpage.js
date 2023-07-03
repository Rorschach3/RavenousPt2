import React, { useState } from 'react';
import './mainpage.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import { renderSortByOptions } from '../SearchBar/SearchBar';

const REACT_APP_API_KEY = 'bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx'
const API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

function Mainpage({ onSearch }) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSortBy(sortBy)
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    const url = `${API_ENDPOINT}?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}`;
    const fetchConfig = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      onSearch(data.businesses);
    } else {
      console.log('Error', response.status);
    }
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form id="search-business-form" action="https://api.yelp.com/v3/businesses/search?location" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="text"
          name="term"
          placeholder="Business"
          aria-label="term"
          value={term}
          onChange={handleTermChange} />
        <input
          className="form-control mr-sm-2"
          type="text"
          name="location"
          placeholder="Location"
          aria-label="location"
          value={location}
          onChange={handleLocationChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Mainpage;
