import React from 'react';
import "./Year.css";

function Year({months}) {
    const _months = months ? months : [];
  return (
    <div className='Year'>
      <p className='Year-year'>YEAR 20..</p>
      <div className='Year-calendar'>
        {_months.map((month, idx) => <div key={idx}>{month}</div>)}
      </div>
    </div>
  )
}

export default Year;