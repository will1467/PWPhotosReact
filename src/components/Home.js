import React, { Fragment} from 'react';
import { Link } from "react-router-dom"

function Home() {
  return (
    <Fragment>
       {/* <div className="row contaner-fluid">
        <img height="600px" src={`https://drive.google.com/uc?id=${BANNER_FILE_ID}`}/>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Category 1</h3>
                <p><Link to="/category1" className="btn btn-primary" role="button">View More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Category 2</h3>
                <p><Link to="/category2" className="btn btn-primary" role="button">View More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Category 3</h3>
                <p><Link to="/category3" className="btn btn-primary" role="button">View More</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;