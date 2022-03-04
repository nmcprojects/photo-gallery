import React, { useEffect, useRef, useState } from 'react'

import './imagezoomhover.css';

export default function ImageZoomHover({url, zoom}) {

  const [isHover, setIsHover] = useState(false);
  const [pos, setPos] = useState({top: 0, left: 0});
  const imgZoom = useRef(null);

  useEffect(() => {
    imgZoom.current.onmouseleave = handleMouseLeave;
    imgZoom.current.onmousemove = handleMouseMove;
  }, [])

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = Math.min(Math.max((offsetX / offsetWidth) * 100, 0), 100) * (zoom - 1) * -1;
    const y = Math.min(Math.max((offsetY / offsetHeight) * 100, 0), 100) * (zoom - 1) * -1;
    
    setIsHover(true);
    setPos({
        top: `${y}%`,
        left: `${x}%`
    })
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const cssItem = {
    backgroundImage: `url('${url}')`,
    transform: `scale(${zoom})`,
    ...pos
  }

  return (
    <div 
        ref = {imgZoom}
        className={"img-zoomable " + (isHover ? "img-zoomable--active" : "")}
    >
        { isHover ? <ImageZoomHoverItem style = { cssItem } /> : null}
        <img src={url} />
    </div>
  )
}

const ImageZoomHoverItem = (props) => {

    return (
        <div 
            className="img-zoomable_item" 
            style={ props.style }
        />
    )
}
