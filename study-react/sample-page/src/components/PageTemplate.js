import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({children}) => {
  return (
    <div>
      <div id="wrap">
      <Header></Header>
      <div id="contents">
        {children}
      </div>
      <Footer></Footer>
      </div> 
    </div>
  );
};
  
export default PageTemplate; 
