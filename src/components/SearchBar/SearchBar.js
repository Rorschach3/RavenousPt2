import React, { useState } from 'react';
import './SearchBar.css';

const API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search'

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};
 

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState("best_match");


  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption)
  }


  const handleTermChange = (e) => {
    setTerm(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    searchYelp(term, location, sortBy);
  }

try {
    const url = `${API_ENDPOINT}?location=${encodeURIComponent(
      location
    )}&term=${encodeURIComponent(term)}`;



  const fetchConfig = {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      'Authorization': 'Bearer bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx',
      'Content-Type': 'application/json'
    },
  }

  const response = (async) => fetch(url, fetchConfig)
  if (response.ok) {
    onSearch(data.businesses);
  } else {
    console.log('Error', response.status);
  }
} catch (error) {
  console.log(error)
}

return (
  <div className={Styles.SearchBar}>
    <a className="navbar-brand">Ravenous</a>
    <div className={styles.SearchBarSortOptions}>
      <ul>{renderSortByOptions()}</ul>
    </div>
    <form id="search-term-form" onSubmit={handleSubmit}>
      <div className={styles.SearchBarFields}>
        <input
          className="form-control mr-sm-2"
          type="text"
          name="term"
          placeholder="Search Business"
          aria-label="Search Business"
          value={term}
          onChange={handleTerm}
        />
        <input
          className="form-control mr-sm-2"
          type="text"
          name="location"
          placeholder="Location"
          aria-label="Location"
          value={location}
          onChange={handleLocation}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        </div>
      </form>
  </div>
  );
}

export default SearchBar;