import React from 'react';
import './Week.css';

function Week({weekTask, days}) {
  return (
    <div className='Week' >
      {days.map(day => "**")}
    </div>
  )
}

export default Week;