import React from 'react';
import Day from "../Day";
import './Week.css';

function Week({weekTask, days}) {
  let _days = days ? days : [];
  if (days.length < 7) {
    const diff = [];
    for (let i = 0; i < (7 - days.length); i++) {
      diff.push(<Day />);
    }
    _days = [...diff, ...days];
  }
  return (
    <div className='Week' style={weekTask && {backgroundColor: "orange"}}>
      {_days.map((day, idx) => <span key={idx}>{day}</span>)}
    </div>
  )
}

export default Week;