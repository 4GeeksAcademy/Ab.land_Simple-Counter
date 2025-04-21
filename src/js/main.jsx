import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

/*
import { SecondsCounter } from './components/SecondsCounter';
import { Highlight } from './components/Highlight';



let seconds = 0;
setInterval( function (){
  seconds++;
  if( seconds=== 10){seconds = 0};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="d-flex justify-content-center align-items-center">
    <Highlight num = {seconds}/>
    </div>
  </React.StrictMode>,
)}, 1000); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
