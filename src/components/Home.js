import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { BANNER_FILE_ID, CATEGORY1_ID, CATEGORY2_ID, CATEGORY3_ID } from '../config';
import SmoothImage from 'react-smooth-image';

function Home() {
  
  return (
    <Fragment>
      <div className="row">
        <div className="banner" style={{ backgroundImage: `url(https://drive.google.com/uc?id=${BANNER_FILE_ID})` }}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <h1 className="banner-title">Philip Wrigley's Photos</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-5">
          <div className="col-sm-6 col-md-4">
            <div className="border border-primary rounded image-border p-2">
              <div className="thumbnail">
                <SmoothImage src={`https://drive.google.com/uc?id=${CATEGORY1_ID}`} width="280px" height="200px" />
                <div className="caption">
                  <h3>Category 1</h3>
                  <p><Link to="/category1" className="btn btn-primary" role="button">View More</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="border border-primary rounded image-border p-2">
              <div className="thumbnail">
              <SmoothImage src={`https://drive.google.com/uc?id=${CATEGORY1_ID}`} width="280px" height="200px"/>
                <div className="caption">
                  <h3>Category 2</h3>
                  <p><Link to="/category1" className="btn btn-primary" role="button">View More</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="border border-primary rounded image-border p-2">
              <div className="thumbnail">
              <SmoothImage src={`https://drive.google.com/uc?id=${CATEGORY1_ID}`} width="280px" height="200px"/>
                <div className="caption">
                  <h3>Category 3</h3>
                  <p><Link to="/category1" className="btn btn-primary" role="button">View More</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;