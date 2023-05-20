import React from 'react'
import './Button.scss'
function Button(props) {
  return (
    <button className={props.class}>
        <p>{props.text}</p>
    </button>
  )
}

export default Button