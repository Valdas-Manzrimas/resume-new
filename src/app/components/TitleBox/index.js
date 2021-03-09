import React from 'react';
import './index.scss';

function TitleBox({ children, className }) {
  const classes = `TitleBox ${className}`;

  return <div className={classes}>{children}</div>;
}
export default TitleBox;
