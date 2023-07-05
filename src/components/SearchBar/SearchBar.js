import React, { useState } from 'react';
import './SearchBar.css';

const API_ENDPOINT = 'https://justcors.com/tl_f4b7a4a/https://api.yelp.com/v3/businesses/search';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const url = `${API_ENDPOINT}?location=${encodeURIComponent(location)}&term=${encodeURIComponent(term)}`;
    const fetchConfig = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx',
        'Content-Type': 'application/json',
      },
    };

    fetch(url, fetchConfig)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        onSearch(data.businesses);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <a
          className={sortBy === sortByOptionValue ? 'active' : ''}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </a>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="container">
      <form id="search-term-form" onSubmit={handleSearch}>
        <div className="SearchBar-fields">
          <input
            className="form-control mr-sm-2"
            type="text"
            name="term"
            placeholder="Search Business"
            aria-label="Search Business"
            value={term}
            onChange={handleTermChange}
          />
          <input
            className="form-control mr-sm-2"
            type="text"
            name="location"
            placeholder="Location"
            aria-label="Location"
            value={location}
            onChange={handleLocationChange}
          />
          <button className="my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SearchBar;
