import React from 'react';
import "./Day.css";

function Day({attribut, bullet}) {
  const {color} = attribut;
  return (
    <div className='Day' style={{backgroundColor: color}}>
      {bullet && "*"}
    </div>
  )
}

export default Day;