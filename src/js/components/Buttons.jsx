import React from 'react'

export const Buttons = () => {
  return (
    <div className="btn-group mb-4" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-info" id='btnPlay' onClick={starCount}><i className="fa-solid fa-play"></i></button>
          <button type="button" className="btn btn-outline-info" id='btnPause' onClick={pauseCount}><i className="fa-solid fa-pause"></i></button>
          <button type="button" className="btn btn-outline-info" id='btnReset' onClick={resetCount}><i className="fa-solid fa-clock-rotate-left"></i></button>
        </div>
  )
}
