import React from 'react'

export const Buttons = () => {
  return (
    <div className="btn-group mb-4" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-info" id='btnPlay'>{<i className="fa-solid fa-play"></i>}</button>
    <button type="button" class="btn btn-outline-info" id='btnPause'>{<i className="fa-solid fa-pause"></i>}</button>
    <button type="button" class="btn btn-outline-info" id='btnStop'>{<i className="fa-solid fa-stop"></i>}</button>
    <button type="button" class="btn btn-outline-info" id='btnReset'>{<i className="fa-solid fa-clock-rotate-left"></i>}</button>
    </div>
  )
}
