import React, { useState } from 'react';
import styles from './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Mainpage from '../App/Mainpage';
import Yelp from '../../utils/Yelp';


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
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Mainpage onSearch={handleSearch} />} />
    //       <Route path="/main" element={<SearchBar business/>} />
    //       <Route path="/list" element={<BusinessList businesses={businesses} />} />
    //     </Routes>
    // </BrowserRouter>
    <div className={styles.App}>
      <h1>ravenous</h1>
      <div className='sort-by'>
      <SearchBar searchYelp={searchYelp} />
      </div>
      <BusinessList businesses={businesses} />
    </div>
  );
}
export default App;
