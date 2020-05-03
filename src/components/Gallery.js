import React, { useEffect, useState, Fragment } from 'react';
import { API_KEY, DRIVE_API, CATEGORIES } from '../config';
import SmoothImage from 'react-smooth-image';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';
import ReactModal from 'react-modal';
import Spinner from './Spinner';
import PhotoContentLoader from './PhotoContentLoader';
import { isMobile } from 'react-device-detect';

function Gallery(props) {

  const modalSize = isMobile ? 0 : '40px';
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
      top: modalSize,
      left: modalSize,
      right: modalSize,
      bottom: modalSize,
      background: 'rgba(255, 255, 255, 0.20)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageLoaded, setModalImageLoaded] = useState("none");
  const { folderid } = props.match.params;
  let { NAME } = CATEGORIES.filter( (val) => (val.FOLDERID === folderid))[0];    

  useEffect(() => {
    const { folderid } = props.match.params;
    axios.get(DRIVE_API, {
      params: {
        q: `'${folderid}' in parents`,
        key: API_KEY,
        fields: "files(id,thumbnailLink)"
      }
    }).then((res) => {
      setImages(res.data.files);
    }).catch(err => {
      console.log(err);
    })
  }, [props.match.params])

  setTimeout( () => (setLoaded(true)), 1000);

  const onImageClick = (imageId) => {
    setModalOpen(true);
    setModalImageSrc(imageId);
  };

  const onModalClose = () => {
    setModalOpen(false);
    setModalImageLoaded('none');
  }

  const onModalImageLoad = () => (setModalImageLoaded(""));

  const onArrowClick = (option) => {
    const { folderid } = props.match.params;
    let index = CATEGORIES.findIndex( val => val.FOLDERID === folderid);
    switch(option){
      case 'Left':
        index = index - 1 < 0 ? CATEGORIES.length - 1 : index - 1;
        break;
      case 'Right':
        index = index + 1 === CATEGORIES.length ? 0 : index + 1;
        break;
      default:
        break;
    }
    props.history.push(`/category/${CATEGORIES[index].FOLDERID}`);
  }

  return (

    <Fragment>
      <div className="container mt-4 mb-4">
        <div className="d-flex justify-content-center align-items-center">
        <svg onClick={ () => onArrowClick('Left')} className="bi bi-arrow-left pr-2" width="50px" height="50px" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
        </svg>
        <h2 className="text-center text-black p-4">{NAME}</h2>
        <svg onClick={ () => onArrowClick('Right')} className="bi bi-arrow-right pl-2" width="50px" height="50px" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"/>
        </svg>
        </div>
        <div className="row">
          {loaded && images.map((image) => {
            return (
                <div key={image.id} onClick={() => onImageClick(image.id)} className="col-sm-6 col-md-4" style={{padding: "7px", borderRadius: "4px", border: "1px solid transparent"}}>
                  <LazyLoad debounce={false} offsetVertical={500} once>
                    <SmoothImage src={image.thumbnailLink} containerStyles={{ paddingBottom: "0", height: "180px"}} imageStyles={{ className: "w-100" }} />
                  </LazyLoad>
                 </div>            )
          })}
          {!loaded && <PhotoContentLoader/>}
        </div>
        <ReactModal onRequestClose={onModalClose} isOpen={modalOpen}>
          <button onClick={onModalClose} className="btn btn-danger close-button" >Close</button>
          <div className="container modal-container">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Spinner isVisible={modalImageLoaded} />
              <img onLoad={onModalImageLoad} alt="train" className="image-border image-full" style={{ display: modalImageLoaded }} 
                src={`https://drive.google.com/uc?id=${modalImageSrc}`} width="100%" height="100%" />
            </div>
          </div>
        </ReactModal>
    </div>
    </Fragment>
  );
}

export default Gallery;
