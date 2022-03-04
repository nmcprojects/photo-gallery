import React from 'react'
import './loading.css'

const Loading = (props) => {
  return (
    <div className="loader" style={props.style}></div>
  )
}

export default Loading