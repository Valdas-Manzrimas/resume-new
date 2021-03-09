import React from 'react';
import './index.scss';
import Title from '../Title';

function Contacts({ title, className, children }) {
  const classes = `Contacts ${className}`;

  return (
    <div className={classes}>
      <Title level="3">{title}</Title>

      {children}
    </div>
  );
}
export default Contacts;
