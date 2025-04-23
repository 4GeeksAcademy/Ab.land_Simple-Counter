import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


import { SecondsCounter } from './components/SecondsCounter';
import { DigitBox } from './components/DigitBox';
import { Buttons } from './components/Buttons';
import { TimeInput } from './components/TimeInput';



let seconds = 0;
let pause = true;


setInterval(function () {
  seconds++;

  let digits = String(seconds).padStart(6, '0').split('');
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center">
          <DigitBox text={<i className="fa-regular fa-clock"></i>} />
          {digits.map((digit) => <DigitBox text={digit} />)}
        </div>
        <Buttons />
        <TimeInput/>

      </div>
    </React.StrictMode>,
  )
}, 1000);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)*/
