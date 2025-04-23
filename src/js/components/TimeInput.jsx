import React from 'react'

export const TimeInput = () => {
    return (
        <>
        <div className="input-group mb-4 outline-info " style={{maxWidth:'400px'}}>
            <span className='input-group-text outline-info'> set countdown </span>
            <input type="text" className="form-control outline-info" placeholder="10s" id="countdown" />
            <button type="button" class="btn btn-outline-info" id='btnCountdown'>{<i className="fa-solid fa-stopwatch"></i>}</button>
        </div>
        <div className="input-group mb-4 outline-info " style={{maxWidth:'400px'}}>
            <span className='input-group-text outline-info'> set timer target </span>
            <input type="text" className="form-control outline-info" placeholder="10s" id="timeTarget" />
            <button type="button" class="btn btn-outline-info" id='btnTimeTarget'>{<i className="fa-solid fa-stopwatch"></i>}</button>
        </div>
        </>
    )
}
