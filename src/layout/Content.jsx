import React from 'react';

const Content = ({children}) => (
  <div className='content'>
    <div className="topFade" />
    { children }
    <div className="bottomFade" />
  </div>
)

export default Content;