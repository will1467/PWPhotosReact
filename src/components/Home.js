import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { BANNER_FILE_ID, CATEGORIES } from '../config';
import SmoothImage from 'react-smooth-image';

function Home() {

  const rows = [...Array(Math.ceil(CATEGORIES.length / 2))];
  const categoryRows = rows.map( (row, index) => CATEGORIES.slice(index * 2, index * 2 + 2));
  
  return (
    <Fragment>
      <div className="row">
        <div className="banner" style={{ backgroundImage: `url(https://drive.google.com/uc?id=${BANNER_FILE_ID})`, backgroundColor: "black" }}>
          <div className="banner h-100 d-flex flex-column justify-content-center">
            <h1 className="banner-title text-center">Philip Wrigley's Photos</h1>
            <br></br>
            <h4 className="text-center banner-subtitle">A Photographic Collection of Railway Photos <br></br> by Railway Enthusiast Philip Wrigley</h4>
          </div>
        </div>
      </div>
      <div className="container">
          {categoryRows.map((row, index) => {
            return (
              <div className="row" key={index}>
                {row.map((category, index) => {
                  return (
                    <div className="col" key={index}>
                    <div className="card mb-4 mt-4 box-shadow">
                      <SmoothImage src={`https://drive.google.com/uc?id=${category.IMAGEID}`} imageStyles={{width: "100%", height: "60%"}} />
                      <div className="card-body">
                        <h3 style={{fontSize: "2rem"}} className="card-title">{category.NAME}</h3>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link to={`/category/${category.FOLDERID}`} className="btn btn-lg btn-outline-secondary">View</Link>
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