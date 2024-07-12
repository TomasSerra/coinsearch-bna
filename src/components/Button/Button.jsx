import React from 'react'
import './Button.scss'

function Button({text, functionWhenPress}) {
  return (
    <div className='button-border'>
      <div className='button' onClick={functionWhenPress}>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default Button