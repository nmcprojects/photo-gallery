import React from 'react'
import {motion} from 'framer-motion'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Image = ({url}) => {
  return (
    <div>
        <motion.a
            href={url} 
            download
            onClick={(e) => {
                console.log(1)
                e.stopPropagation();
            }}
            className="download-image"
            whileHover={{ opacity: 1 }}
        >
            <AiOutlineCloudDownload />
        </motion.a>
        <motion.img src={url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        />
    </div>
  )
}

export default Image
