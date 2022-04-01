import React, { memo, FC } from 'react';
import { NavSkipWrap } from './NavSkipStyles';

const NavSkip: FC = () => {
  return (
    <NavSkipWrap className="nav-skip">
      <dt>skip menu</dt>
      <dd><a href="#container">본문 영역 바로가기(Go to content)</a></dd>
      <dd><a href="#gnb">메인 메뉴 영역 바로가기(Go to main menu)</a></dd>
      <dd><a href="#footer">하단 영역 바로가기(Go to footer)</a></dd>
    </NavSkipWrap>
  );
}

export default memo(NavSkip);