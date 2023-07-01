import React, { useState } from 'react';
import './mainpage.css';

const API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';

const Mainpage = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${API_ENDPOINT}?location=${encodeURIComponent(
        location
      )}&term=${encodeURIComponent(term)}`;

      const fetchConfig = {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx',
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id='navBar' className='Container'>
      <nav className='navbar navbar-light bg-light justify-content-between'>
        <a className='navbar-brand'>Ravenous</a>
        <form id='search-business-form' onSubmit={handleSubmit}>
          <input
            className='form-control mr-sm-2'
            type='text'
            name='term'
            placeholder='Search Term'
            aria-label='Term'
            value={term}
            onChange={handleTermChange}
          />
          <input
            className='form-control mr-sm-2'
            type='text'
            name='location'
            placeholder='Location'
            aria-label='Location'
            value={location}
            onChange={handleLocationChange}
          />

          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Mainpage;
