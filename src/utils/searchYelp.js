import React, { useState } from 'react';
// import { REACT_APP_API_KEY } from '../../process.env';

const API_KEY = 'bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx'

const API_ENDPOINT = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50";

function Mainpage({ onSearch }) {
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
    console.log(`Searching Yelp with ${term}, ${location}`);
  }

  const Yelp = {
    search(term, location, sortBy) {
      const fetch = require('node-fetch');
      return fetch(
        `${API_ENDPOINT}?location=${location}&term=${term}&sort_by=${sortBy}`,
        { 
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )

      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      })

  //   const response = await fetch(url, fetchOptions);
  //   if (response.ok) {
  //     const data = await response.json();
  //     onSearch(data.businesses);
  //   } else {
  //     console.log('Error', response.status);
  // }

  //   return (
  //     <div className="SearchBar">
  //       <div className="SearchBar-sort-options">
  //       </div>
  //       <form id="search-business-form" onSubmit={handleSubmit}>
  //         <input
  //           className="form-control mr-sm-2"
  //           type="text"
  //           name="term"
  //           placeholder="Business"
  //           aria-label="term"
  //           value={term}
  //           onChange={handleTermChange} />
  //         <input
  //           className="form-control mr-sm-2"
  //           type="text"
  //           name="location"
  //           placeholder="Location"
  //           aria-label="location"
  //           value={location}
  //           onChange={handleLocationChange} />
  //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
  //           Search
  //         </button>
  //       </form>
  //     </div>
  //     );
    }
  }
}
  export default Mainpage