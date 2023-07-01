import React, { Component } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [business, setBusiness] = useSTate('');
  const [location, setLocation] = useSTate('');


const handleBusiness = event => {
  setBusiness(event.target.value);
}
const handleLocation = event => {
  setLocation(event.target.value);
}


const handleSubmit = async event => {
  event.preventDefault();
  const data = {};
  data.business = business;
  data.location = location;

  const getURL = 'https://api.yelp.com/v3/businesses/search?location=Anaheim,%20CA&term=Mexican%20Food/';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx',
    },
  };


  const response = await fetch(getURL, options);
  if (!response.ok) {
    setBusiness('');
    setLocation('');
    throw new Error('Something went wrong');
  }
};
;

  //   this.state = {
  //     term: '',
  //     location: '',
  //     sortBy: 'best_match'
  //   };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

  //   this.sortByOptions = {
  //     'Best Match': 'best_match',
  //     'Highest Rated': 'rating',
  //     'Most Reviewed': 'review_count'
  //   };


  // getSortByClass(sortByOption) {
  //   if (this.state.sortBy === sortByOption) {
  //     return 'active';
  //   }
  //   return '';
  // }


  // renderSortByOptions() {
  //   return Object.keys(this.sortByOptions).map((sortByOption) => {
  //     let sortByOptionValue = this.sortByOptions[sortByOption];
  //     return (
  //       <li
  //         className={this.getSortByClass(sortByOptionValue)}
  //         key={sortByOptionValue}
  //         onClick={() => this.handleSortByChange(sortByOptionValue)}
  //       >
  //         {sortByOption}
  //       </li>
  //     );
  //   });
  // }
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }

export default SearchBar;
