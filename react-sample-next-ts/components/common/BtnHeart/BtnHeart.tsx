import React, { memo, FC, useCallback, useState, useEffect } from 'react';
import { BtnHeartWrap } from './BtnHeartStyles';
import { Button } from "components";
import { IconHeart } from 'styles/svg' 

const CLICK_BTNHEART = "click_BtnHeart";

interface IProps {
  active: boolean;
  onEvent?: any;
}

const BtnHeart: FC<IProps> = ({ active = false, onEvent }) => {
  const [_active, setActive] = useState(active)

  useEffect(() => {
    setActive(active)
  }, [active])

  // EVENT HANDLER : 찜 하기 클릭
  const onClicHeart = useCallback(() => {
    setActive(!_active)
    onEvent(CLICK_BTNHEART, _active)
  }, [_active, onEvent]);
  
  return <Button className={'btn-heart ' + (_active ? 'active' : '')} label="찜 하기" icon={<IconHeart />} onClick={onClicHeart} />;
}

export default memo(BtnHeart);