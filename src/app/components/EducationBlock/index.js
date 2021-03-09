import React from 'react';
import './index.scss';

function EducationBlock({ schoolName, year, degree }) {
  return (
    <div className="EducationBlock">
      <div className="year-cont">
        <span>{year}</span>
      </div>
      <div className="data-cont">
        <span>{degree}</span>
        <p>{schoolName}</p>
      </div>
    </div>
  );
}
export default EducationBlock;
