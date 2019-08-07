import React, { Fragment } from 'react';
import Gallery from './Gallery.js';
import { FOLDERID } from '../config.js';

function Category1() {
  return (
    <Fragment>
      <div className="container mt-4 mb-4">
        <Gallery folderId={FOLDERID} />
      </div>
    </Fragment>
  );
}

export default Category1;
