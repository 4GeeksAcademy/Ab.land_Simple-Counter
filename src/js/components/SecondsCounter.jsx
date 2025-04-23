import React, { useState, useEffect } from 'react';
import { DigitBox } from './DigitBox'


export const SecondsCounter = ({seconds}) => {

  //let digits = String(seconds).padStart(6, '0').split('');
  let formatTime = (totalSeconds) => {
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  let digits = formatTime(seconds).split('');

  return (
    <div className="d-flex justify-content-center align-items-center">
      <DigitBox text={<i className="fa-regular fa-clock"></i>} />
      {digits.map((digit) => (
        <DigitBox text={digit} />
      ))}
    </div>
  )
}

