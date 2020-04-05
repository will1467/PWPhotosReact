import React, { useEffect, useState, Fragment } from 'react';
import { API_KEY, DRIVE_API } from '../config';
import SmoothImage from 'react-smooth-image';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';
import ReactModal from 'react-modal';
import Spinner from './Spinner';

function Gallery(props) {

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageLoaded, setModelImageLoaded] = useState("none");


  useEffect(() => {
    axios.get(DRIVE_API, {
      params: {
        q: `'${props.folderId}' in parents`,
        key: API_KEY,
        fields: "files(id,thumbnailLink)"
      }
    }).then((res) => {
      setImages(res.data.files);
      setLoaded(true);
    }).catch(err => {
      console.log(err);
    })
  }, [props.folderId])

  const onImageClick = (imageId) => {
    setModalOpen(true);
    setModalImageSrc(imageId);
  };

  const onModalClose = () => {
    setModalOpen(false);
    setModelImageLoaded('none');
  }

  const onModalImageLoad = () => (setModelImageLoaded(""));

  let modalUrl = `https://drive.google.com/uc?id=${modalImageSrc}`;

  ReactModal.defaultStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      background: 'rgba(255, 255, 255, 0.20)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }

  return (
    <Fragment>
      <div className="row">
        {images.map((image) => {
          return (<div key={image.id} onClick={() => onImageClick(image.id)} className="col-sm-6 col-md-4 thumbnail">
            <LazyLoad debounce={false} offsetVertical={500} once>
              <SmoothImage src={image.thumbnailLink} containerStyles={{ paddingBottom: "0", height: "180px" }} imageStyles={{ className: "w-100" }} />
            </LazyLoad>
          </div>
          )
        })}
      </div>
      <ReactModal onRequestClose={onModalClose} isOpen={modalOpen} contentLabel="Example Modal">
        <button onClick={onModalClose} style={{ paddingLeft: "2rem", paddingRight: "2rem" }} className="btn btn-danger modal-close">Close</button>
        <div className="container modal-container">
          <div className="d-flex align-items-center justify-content-center h-100">
            <Spinner isVisible={modalImageLoaded} />
            <img onLoad={onModalImageLoad} alt="train" className="image-border" style={{ display: modalImageLoaded }} src={modalUrl} width="100%" height="100%" />
          </div>
        </div>
      </ReactModal>
    </Fragment>

  );
}

export default Gallery;
