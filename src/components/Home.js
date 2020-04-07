import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { BANNER_FILE_ID, CATEGORIES } from '../config';
import SmoothImage from 'react-smooth-image';
import { FOLDERID } from '../config.js';

function Home() {
  
  return (
    <Fragment>
      <div className="row">
        <div className="banner" style={{ backgroundImage: `url(https://drive.google.com/uc?id=${BANNER_FILE_ID})` }}>
          <div style={{marginTop:"220px"}} className="d-flex justify-content-center banner h-100">
            <h1 className="banner-title">Philip Wrigley's Photos</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {CATEGORIES.map( (category) => {
            return (
              <div class="col-md-4">

              <div class="card mb-4 mt-4 box-shadow">
                <SmoothImage src={`https://drive.google.com/uc?id=${category.IMAGEID}`} width="280px" height="150px" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link to={`/category/${category.FOLDERID}`} class="btn btn-sm btn-outline-secondary">View</Link>
                    </div>
                  </div>
              </div>
            </div>
        </div>          
        )
          })}
    </div>
    </div>
    </Fragment>
  );
}

export default Home;