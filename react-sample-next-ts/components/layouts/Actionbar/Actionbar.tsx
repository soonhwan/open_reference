import React, { memo, useState, FC, useCallback } from 'react';
import { ActionbarWrap } from './ActionbarStyles';
import { Button, BtnTop, BtnHistory } from "components";
import { IconHome, IconCategory, IconMyheart, IconMy, BtnBnbMen, BtnBnbWomen } from 'styles/svg' 
import Link from 'next/link';

interface IProps {
  mode?: string;
}

const Actionbar: FC<IProps> = ({ mode }) => {
  return (
    <ActionbarWrap id="actionbar">
      <nav className="inner-actionbar">
        <ul>
          <li className="active"><Link href="/" passHref><Button label="home" icon={<IconHome />} /></Link></li>
          <li><Link href="/MyPage/History" passHref><Button label="history" icon={<IconCategory />} /></Link></li>
          <li><Link href="/MyPage/MyHeart" passHref><Button label="my heart" icon={<IconMyheart />} /></Link></li>
          <li><Link href="/MyPage" passHref><Button label="my page" icon={<IconMy />} /></Link></li>
        </ul>
        <div className="area-btn">
          <Button className="btn-gender" label="go men" icon={<BtnBnbMen />} />
          {/* <Button className="btn-gender" label="go women" icon={<BtnBnbWomen />} /> */}
        </div>
        <BtnHistory />
        <BtnTop />
      </nav>
    </ActionbarWrap>
  );
}

export default memo(Actionbar);