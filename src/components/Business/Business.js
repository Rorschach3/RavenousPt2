import React from 'react';
import styles from './Business.module.css';

const business = {
  image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/rm7dBf-KDF596F6iWAO6TQ/o.jpg',
  name: "The Penthouse at Mastro's",
  display_address: [
    "246 N Canon Dr",
    "Fl 3",
    "Beverly Hills, CA 90210"],
  display_phone: "(310) 888-8782",
  categories: "steak",
  rating: 4.0,
  };

const Business = ({ business }) => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
          <table>
            <thead>
              <tr>
                <th className='fs-3'>Name</th>
                  <th className='fs-3'>Image</th>
                  <th className='fs-3'>url</th>
                  <th className='fs-3'>rating</th>
                  <th className='fs-3'>Address</th>
                  <th className='fs-3'>phone number</th>
                </tr>
              </thead>
            <tbody>
            {businesses.map(business => {
              return (
                <tr className='fw-normal' key={business.id}>
                  <td className='fs-3'>{ business.name }</td>
                  <td className='fs-3'>{ business.image_url }</td>
                  <td className='fs-3'>{ business.url }</td>
                  <td className='fs-3'>{ business.rating }</td>
                  <td className='fs-3'>{ business.display_address }</td>
                  <td className='fs-3'>{ business.display_phone }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Business;