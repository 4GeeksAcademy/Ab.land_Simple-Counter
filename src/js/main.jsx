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


let start = null;
let seconds = 0;
let pause = false;
let targetTime = null;

function renderUI() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <Home seconds={seconds} />

        <div className="btn-group mb-4" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-info" id='btnPlay' onClick={starCount}><i className="fa-solid fa-play"></i></button>
          <button type="button" className="btn btn-outline-info" id='btnPause' onClick={pauseCount}><i className="fa-solid fa-pause"></i></button>
          <button type="button" className="btn btn-outline-info" id='btnReset' onClick={resetCount}><i className="fa-solid fa-clock-rotate-left"></i></button>
        </div>

        <div className="input-group mb-4" style={{ maxWidth: '400px' }}>
          <span className='input-group-text'>Set countdown</span>
          <input type="text" min="0" className="form-control" placeholder="10" id="countdownTime" />
          <button type="button" className="btn btn-outline-info" id='btnCountdown' onClick={countDown}><i className="fa-solid fa-stopwatch"></i></button>
        </div>

        <div className="input-group mb-4" style={{ maxWidth: '400px' }}>
          <span className='input-group-text'>Set timer target</span>
          <input type="text" min="0" className="form-control" placeholder="10" id="timeTarget" />
          <button type="button" className="btn btn-outline-info" id='btnTimeTarget' onClick={timeAlert}><i className="fa-solid fa-stopwatch"></i></button>
        </div>
      </div>
    </React.StrictMode>
  );
}


let pauseCount = () => {
  console.log('Pause button was clicked');
  if (!pause) {
    pause = true;
    clearInterval(start);
  }
};

let resetCount = () => {
  console.log('Reset button was clicked');
  pause = true;
  seconds = 0;
  clearInterval(start);
  renderUI();
};

let starCount = function () {
  if (pause) pause = false;
  count();
};

let count = function () {
  start = setInterval(() => {    
    seconds++;

    if (seconds === targetTime) {
      alert('time up');
      targetTime = null; 
    }

    renderUI();
  }, 1000);
};

let countDown = function () {
  console.log('countDown was clicked');

  let input = document.getElementById('countdownTime');
  let value = parseInt(input.value)
  input.value = '';

  if (!isNaN(value) && value > 0) {
    seconds = value;
    pause = false;
    clearInterval(start);
    renderUI();

    start = setInterval(() => { 
      seconds--;     

      if (seconds === targetTime) {
        alert('time up');
        targetTime = null;
      }

      renderUI();      

      if (seconds < 0) {
        pause = true;
        clearInterval(start);
      }
    }, 1000);
  };
}

let timeAlert = function () {
  let input = document.getElementById('timeTarget');
  let value = parseInt(input.value);
  
  

  if (!isNaN(value) && value > 0) {
    targetTime = value;    
  }
};

renderUI(); 