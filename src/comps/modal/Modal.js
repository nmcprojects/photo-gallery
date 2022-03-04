import React from 'react';
import { motion } from 'framer-motion';

import './modal.css';
import ImageZoomHover from '../img_zoomable/ImageZoomHover';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="backdrop-img"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <ImageZoomHover url={selectedImg} zoom={5} />
      </motion.div>
    </motion.div>
  )
}

export default Modal;