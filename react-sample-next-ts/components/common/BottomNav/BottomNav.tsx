import React, { memo, useState, FC, useCallback } from 'react';
import { BottomNavWrap } from './BottomNavStyles';

interface IProps {
  className?: any;
}

const BottomNav: FC<IProps> = ({ className }) => {

  return (
    <BottomNavWrap>
      <div id="bottom_nav" className="women_nav">
        <div className="bt_shadow"></div>
        <ul className="main">
          <li className="bottom_nav_home">
              <a href="#" title="home" className="nav_item"></a>
          </li>
          <li className="bottom_nav_history">
              <a href="#" title="history" className="nav_item"><span className="notice_label"></span></a>
          </li>
          <li className="bottom_nav_myheart">
              <a href="#" title="my heart" className="nav_item"></a>
          </li>
          <li className="bottom_nav_mypage">
              <a href="#" title="my page" className="nav_item"></a>
          </li>
        </ul>
      
        <div className="bottom_nav_gender bottom_nav_men">
          <a href="#" className="nav_item"></a>
        </div>
      </div>
    </BottomNavWrap>
  );
}

export default memo(BottomNav);