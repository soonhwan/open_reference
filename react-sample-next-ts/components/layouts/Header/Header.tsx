import React, { memo, useState, FC, useCallback } from 'react';
import { HeaderWrap } from './HeaderStyles';
import { Button, Count } from "components";
import { IconSearch, IconAlarm, IconCart, LogoW, LogoDSTANCE } from 'styles/svg'
import { useRouter } from 'next/router'


interface IProps {
  mode?: string;
}

const Header: FC<IProps> = ({ mode }) => {
  const [count, setCount] = useState<number>(999)
  const router = useRouter()

  // EVENT HANDLER : logo 클릭
  const onClickLogo = useCallback(() => {
    //console.log('onClickLogo');
    router.replace('/')
  }, [router]);

  // EVENT HANDLER : 검색 클릭
  const onClickSearch = useCallback(() => {
    //console.log('onClickSearch');
    router.replace('/Search/SearchInit')
  }, [router]);

  // EVENT HANDLER : 장바구니 클릭
  const onClicCart = useCallback(() => {
    //console.log('onClicCart');
    router.replace('/Basket')
  }, [router]);

  return (
    <HeaderWrap id="header">
      <div className="inner-header">
        <Button className="btn-logo" label="W컨셉" icon={<LogoW />} onClick={onClickLogo} />
        {/* <Button className="btn-logo-ds" label="D_STANCE" icon={<LogoDSTANCE />} onClick={onClickLogo} /> */}
        <div className="area-right">
          <Button className="btn-serach" label="검색" icon={<IconSearch />} onClick={onClickSearch} />
          <Button className="btn-cart" label="장바구니 바로가기" icon={<IconCart />} onClick={onClicCart}>
            <Count count={count} />
          </Button>
        </div>
      </div>
    </HeaderWrap>
  );
}

export default memo(Header);