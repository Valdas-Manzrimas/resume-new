import React from 'react';
import './index.scss';
import Title from '../Title';

function ContentBlock({ children, title, className }) {
  const classes = `ContentBlock ${className}`;

  return (
    <div className={classes}>
      <Title level="3">{title}</Title>
      {children}
    </div>
  );
}
export default ContentBlock;
