import React from 'react'

export const TimeInput = () => {
    return (
        <>
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
        </>
    )
}
