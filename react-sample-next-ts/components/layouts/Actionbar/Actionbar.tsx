import React, { memo, useState, FC, useCallback } from 'react';
import Link from 'next/link';
import { ActionbarWrap } from './ActionbarStyles';
import { Button, BtnTop, BtnHistory } from "components";
import { IconHome, IconCategory, IconMyheart, IconMy, BtnBnbMen, BtnBnbWomen } from 'styles/svg' 

interface IProps {
  mode?: string;
  gender?: string;
}

const Actionbar: FC<IProps> = ({ mode = 'main', gender = 'women' }) => {
  // EVENT HANDLER : 성별 클릭
  const onClicGender = useCallback(() => {
    console.log('onClicGender')
  }, []);
  
  // EVENT HANDLER : 카테고리 클릭
  const onClicCategory = useCallback(() => {
    console.log('onClicCategory')
  }, []);

  // ITEM RENDERER : getActionbarMain
  const getActionbarMain = useCallback(() => {
    return (
      <div className={'actionbar-main' + (gender === 'women' ? ' is-women' : ' is-men')}>
        <nav>
          <ul>
            <li className="active"><Link href="/" passHref><Button label="홈" icon={<IconHome />} /></Link></li>
            <li><Button label="카테고리" icon={<IconCategory />} onClick={onClicCategory} /></li>
            <li><Link href="/MyPage/MyHeart" passHref><Button label="나의 관심" icon={<IconMyheart />} /></Link></li>
            <li><Link href="/MyPage" passHref><Button label="마이페이지" icon={<IconMy />} /></Link></li>
          </ul>
        </nav>
        <div className="area-btn">
          {gender === 'women' && <Button className="btn-gender" label="go men" icon={<BtnBnbMen />} onClick={onClicCategory} />}
          {gender === 'men' && <Button className="btn-gender" label="go women" icon={<BtnBnbWomen />} onClick={onClicCategory} />}
          
        </div>
        <BtnHistory />
        <BtnTop />
      </div>
    )
  }, [gender]);

  return (
    <ActionbarWrap id="actionbar">
      <div className="inner-actionbar">
        {mode === 'main' && getActionbarMain()}
      </div>
    </ActionbarWrap>
  );
}

export default memo(Actionbar);