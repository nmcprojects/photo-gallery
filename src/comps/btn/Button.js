import React from 'react'
import './button.css'

const Button = ({children, ...props}) => {
  return (
    <div className="btn" onClick={props.onClick}>
        {children}
    </div>
  )
}

export default Button