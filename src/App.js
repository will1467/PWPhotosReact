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
      {images.map((image) => {
        let url = `https://drive.google.com/uc?id=${image.id}`;
        return <img src={url} />
      })}
      <Footer />
    </Fragment>
  );
}

export default App;
