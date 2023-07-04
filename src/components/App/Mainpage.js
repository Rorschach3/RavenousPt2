import React, { useState, useEffect } from 'react';
import App from '../App/App';
import './mainpage.css';
import BusinessList from '../BusinessList/BusinessList';


const REACT_APP_API_KEY = 'bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx'
const API_ENDPOINT = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Searching Yelp with ${term}, ${location}`);


    const url = `${API_ENDPOINT}?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}`;
    const fetchConfig = {
      url: url,
      method: 'get',
      headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${REACT_APP_API_KEY}`
      }
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      onSearch(data.businesses);
    } else {
      console.log('Error', response.status);
  };
}

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
      </div>
      <form id="search-business-form" onSubmit={handleSubmit}>
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