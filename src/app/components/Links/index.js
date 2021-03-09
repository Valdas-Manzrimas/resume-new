import React from 'react';
import './index.scss';

function Links({ src, alt, href, children }) {
  return (
    <div className="Links">
      <img src={src} alt={alt}></img>
      <a href={href}>{children}</a>
      <br></br>
    </div>
  );
}
export default Links;
