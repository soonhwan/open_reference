import React, { memo, useState, FC, useCallback } from 'react';
import { useRouter } from 'next/router'
import { HeaderWrap } from './HeaderStyles';
import { Button, Count } from "components";
import { IconSearch, IconAlarm, IconCart, LogoW, LogoDSTANCE } from 'styles/svg'


interface IProps {
  mode?: string;
}

const Header: FC<IProps> = ({ mode = 'main' }) => {
  const [count, setCount] = useState<number>(999)
  const router = useRouter()

  // EVENT HANDLER : logo 클릭
  const onClickLogo = useCallback(() => {
    router.replace('/')
  }, [router]);

  // EVENT HANDLER : 검색 클릭
  const onClickSearch = useCallback(() => {
    router.replace('/Search/SearchInit')
  }, [router]);

  // EVENT HANDLER : 장바구니 클릭
  const onClicCart = useCallback(() => {
    router.replace('/Basket')
  }, [router]);

  // ITEM RENDERER : getHeaderMain
  const getHeaderMain = useCallback(() => {
    return (
      <div className="header-main">
        <Button className="btn-logo" label="W컨셉" icon={<LogoW />} onClick={onClickLogo} />
        {/* <Button className="btn-logo-ds" label="D_STANCE" icon={<LogoDSTANCE />} onClick={onClickLogo} /> */}
        <div className="area-right">
          <Button className="btn-serach" label="검색" icon={<IconSearch />} onClick={onClickSearch} />
          <Button className="btn-cart" label="장바구니 바로가기" icon={<IconCart />} onClick={onClicCart}>
            <Count label={`${count}개의 상품이 담겨 있습니다.`} count={count} />
          </Button>
        </div>
      </div>
    )
  }, [onClickLogo, onClickSearch, onClicCart, count]);

  return (
    <HeaderWrap id="header">
      <div className="inner-header">
        {mode === 'main' && getHeaderMain()}
      </div>
    </HeaderWrap>
  );
}

export default memo(Header);