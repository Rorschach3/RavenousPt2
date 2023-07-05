import React from "react";
import Business from "../Business/Business";
import styles from './BusinessList.module.css';

const BusinessList = ({ businesses }) => {
  return (
    <div>
      <h2 className={styles.title}>Business List</h2>
      <div className={styles.BusinessList}>
        {businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    </div>
  );
};

export default BusinessList;
