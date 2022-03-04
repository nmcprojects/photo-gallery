import React from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

const ImageGrid = ({ docs, setSelectedImg }) => {
 
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <Image url={doc.url} />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;