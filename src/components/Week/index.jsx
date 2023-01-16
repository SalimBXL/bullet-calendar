import React from 'react';
import './Week.css';

function Week({weekTask, days}) {
  return (
    <div className='Week' style={weekTask && {borderColor: "orange"}}>
      {days.map(day => day)}
    </div>
  )
}

export default Week;