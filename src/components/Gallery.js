import React, { useEffect, useState, Fragment } from 'react';
import { API_KEY, DRIVE_API } from '../config';
import SmoothImage from 'react-smooth-image';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';

function Footer(props) {

    const [images, setImages] = useState([]);

    useEffect(() => {
      axios.get(DRIVE_API, {
        params: {
          q: `'${props.folderId}' in parents`,
          key: API_KEY,
          fields: "files(id,thumbnailLink)"
        }
      }).then((res) => {
        setImages(res.data.files);
      }).catch(err => {
        console.log(err);
      })
    }, [])

  return (
    <Fragment>
    <div className="row">
        {images.map((image) => {
          return  ( <div className="col-sm-6 col-md-4 border border-primary rounded image-border pt-2 pb-2">
                        <LazyLoad debounce={false} offsetVertical={500} once>
                            <SmoothImage src={image.thumbnailLink} containerStyles={{paddingBottom: "0", height: "200px"}}imageStyles={{className: "w-100 mb-1"}}/>
                        </LazyLoad>
                    </div>
                  )
        })}
      </div>
      </Fragment>

  );
}

export default Footer;
