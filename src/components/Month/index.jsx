import React from 'react';
import "./Month.css";

function Month({weeks, monthName}) {
    const monthname = monthName ? monthName.substr(0, 3) : " "
    const _weeks = weeks ? weeks : [];
  return (
    <div className='Month'>
      <p className='monthName'>{monthname}</p>
      <div className='weeks'>
        {_weeks.map((week, idx) => <div key={idx}>{week}</div>)}
      </div>
    </div>
  )
}

export default Month;