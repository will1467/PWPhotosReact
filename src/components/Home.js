import React, { Fragment } from 'react';
import { Link } from "react-router-dom"

function Home() {
  return (
    <Fragment>
      {/* <div className="row contaner-fluid">
        <img height="600px" src={`https://drive.google.com/uc?id=${BANNER_FILE_ID}`}/>
      </div> */}
      <div className="container">
        <div className="row m-5">
          <div className="col-sm-6 col-md-4">
            <div className="border border-primary rounded image-border p-2">
              <div className="thumbnail">
                <img src="https://lh3.googleusercontent.com/S3cV8drWh1f-v0H7AurobBmpwTcFWyi7k_l8l3K8bnw8atImLbLMxylJ4sAEFnuwpABT3cfhwmU=s220" />
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
                <img src="https://lh3.googleusercontent.com/S3cV8drWh1f-v0H7AurobBmpwTcFWyi7k_l8l3K8bnw8atImLbLMxylJ4sAEFnuwpABT3cfhwmU=s220" />
                <div className="caption">
                  <h3>Category 2</h3>
                  <p><Link to="/category2" className="btn btn-primary" role="button">View More</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="border border-primary rounded image-border p-2">
              <div className="thumbnail">
                <img src="https://lh3.googleusercontent.com/S3cV8drWh1f-v0H7AurobBmpwTcFWyi7k_l8l3K8bnw8atImLbLMxylJ4sAEFnuwpABT3cfhwmU=s220" />
                <div className="caption">
                  <h3>Category 3</h3>
                  <p><Link to="/category3" className="btn btn-primary" role="button">View More</Link></p>
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