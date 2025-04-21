import React from 'react'
import { Highlight } from './Highlight'


export const SecondsCounter = () => {

  let seconds = 0
  

  return (
    <div className="d-flex justify-content-center align-items-center">
                <Highlight text= {<i className="fa-regular fa-clock"></i>} />
                <Highlight text='0' />
                <Highlight text='0' />
                <Highlight text='0' />
                <Highlight text='0' />
                <Highlight text='0' />
                <Highlight text={seconds}/>
            </div>
  )
}

