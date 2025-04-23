import React, { useState, useEffect } from 'react';
import { DigitBox } from './DigitBox'


export const SecondsCounter = (seconds) => {

  const digits = String(seconds).padStart(6, '0').split('');

  return (
    <div className="d-flex justify-content-center align-items-center">
      <DigitBox text={<i className="fa-regular fa-clock"></i>} />
      {digits.map((digit, index) => (
        <DigitBox key={index} text={digit} />
      ))}
    </div>
  )
}

