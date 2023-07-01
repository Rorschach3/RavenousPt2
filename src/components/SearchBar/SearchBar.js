import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');


const handleTerm = (e) => {
  setTerm(event.target.value);
}

const handleLocation = (e) => {
  setLocation(event.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  onSearch(term, location);
}

return (
  <div id='navBar' className='Container'>
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Ravenous</a>
      <form id="search-business-form" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Business"
          aria-label="Business"
          value={term}
          onChange={handleTerm}
        />
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Location"
          aria-label="Location"
          value={location}
          onChange={handleLocation}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  </div>
);
};

export default SearchBar;
