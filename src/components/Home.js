import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { BANNER_FILE_ID, CATEGORIES } from '../config';
import SmoothImage from 'react-smooth-image';

function Home() {

  const rows = [...Array(Math.ceil(CATEGORIES.length / 3))];
  const categoryRows = rows.map( (row, index) => CATEGORIES.slice(index * 3, index * 3 + 3));
  
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
          {categoryRows.map((row, index) => {
            return (
              <div className="row" key={index}>
                {row.map((category) => {
                  return (
                    <div class="col-md-4">
                    <div class="card mb-4 mt-4 box-shadow">
                      <SmoothImage src={`https://drive.google.com/uc?id=${category.IMAGEID}`} width="280px" height="150px" />
                      <div class="card-body">
                        <h3 class="card-title">{category.NAME}</h3>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <Link to={`/category/${category.FOLDERID}`} class="btn btn-lg btn-outline-secondary">View</Link>
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
                  )
                })}
              </div>
            )
          })}
    </div>
    </Fragment>
  );
}

export default Home;