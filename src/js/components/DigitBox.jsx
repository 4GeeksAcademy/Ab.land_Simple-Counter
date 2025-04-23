import React from 'react'

export const DigitBox = (props) => {
  return (
    <div 
    className='card border-secondary text-bg-dark m-3 text-center'
    style={{maxWidth: '100%', 
        width: 'auto', 
        aspectRatio: '1 / 1.5', 
        fontSize: 'clamp(10px, 5vw, 100px)'}}>
        <div className='card-body d-flex justify-content-center align-items-center'>
            {props.text}
        </div>
        </div>
  )
}
