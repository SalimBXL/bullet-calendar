import React from 'react';
import "./Day.css";

function Day({attribut, bullet, content, date}) {
  const altColor = "";
  const color = attribut ? attribut.color : altColor;
  return (
    <div className='Day tooltip' style={{backgroundColor: color}}>
      {bullet && "*"}{content && <span className='tooltiptext'>{content}</span>}
    </div>
  )
}

export default Day;