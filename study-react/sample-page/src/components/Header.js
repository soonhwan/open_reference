import React from 'react';
import TopArea from './TopArea';
import HeaderArea from './HeaderArea';

const Header = () => {
  return (
    <div className="commonHeaderObject o-CHO-full">
      <div className="o-CHO-inner">
        <TopArea></TopArea>
        <HeaderArea></HeaderArea>
      </div>
    </div>
  );
};
  
  export default Header; 