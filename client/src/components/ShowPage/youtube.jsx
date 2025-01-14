import React, { useState } from 'react';
import axios from 'axios';
import ModalVideo from 'react-modal-video';
import './modal-video.css';


const Youtube = ({show}) => {
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState();
  const prepTrailer = (title) => {
    setOpen(true);
    getTrailer(title);
  };
  const getTrailer = (title) => {
    axios.get(`/trailer/${title}`)
      .then(({data}) => {
        setTrailer(data);
        console.log('DATA FROM Youtube request', data);
      })
      .catch();
  };
  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
      <button className="trailer-button" onClick={()=> prepTrailer(show.media_type === 'tv' ? show.name : show.title)}>View Trailer</button>
    </React.Fragment>
  );
};
export default Youtube;
