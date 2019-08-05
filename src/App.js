import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { API_KEY, FOLDERID, DRIVE_API } from './config.js';

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(DRIVE_API, {
      params: {
        q: `'${FOLDERID}' in parents`,
        key: API_KEY
      }
    }).then((res) => {
      setImages(res.data.files);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <Fragment>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 border border-primary">
            <div className="thumbnail">
              <img src="..." alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
        </div>
        {images.map((image) => {
          let url = `https://drive.google.com/uc?id=${image.id}`;
          return <img src={url} />
        })}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
