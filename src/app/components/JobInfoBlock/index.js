import React from 'react';
import './index.scss';
import Title from '../Title';

function JobInfoBlock({ jobPosition, company, years, children }) {
  return (
    <div className="JobInfoBlock">
      <div className="year-cont">
        <span>{years}</span>
      </div>
      <div className="data-cont">
        <span>{jobPosition}</span>
        <p className="data-cont__company">{company}</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
export default JobInfoBlock;
