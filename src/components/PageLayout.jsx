import React from 'react';
import Navbar from './Navbar';

const PageLayout = ({ page }) => {
  return (
    <div className='container-fluid h-100 p-0'>
      {/* Header section containing the Navbar component */}
      <div className="row g-0">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      {/* Main content section */}
      <div className="row g-0">
        <div className="col-12 d-flex justify-content-center">
          {/* The "page" component is rendered here */}
          {page}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
