import React from "react";
import Business from "../Business/Business";
import { MDBCard, MDBCardImage, MDBCardBody } from "mdb-react-ui-kit";
import styles from './BusinessList.module.css';

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.BusinessList}>
      <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='bottom' />
        <MDBCardBody>
          {businesses.map((business) => (
            <Business key={business.id} business={business} />
          ))}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default BusinessList;
