import './Toggle.css'
import React from 'react'

function Toggle() {
  return (
    <div>
        <label className='switch'>
            <input type="checkbox" />
            <span className='slider round'></span>

        </label>
    </div>
  )
}

export default Toggle