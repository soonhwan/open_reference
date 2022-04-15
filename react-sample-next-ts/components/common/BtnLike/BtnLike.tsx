import React, { memo, FC, useCallback, useState, useEffect } from 'react';
import { BtnLikeWrap } from './BtnLikeStyles';
import { Button } from "components";
import { IconHeart } from 'styles/svg' 

const CLICK_BTNLIKE = "click_BtnLike";

interface IProps {
  active: boolean;
  onEvent?: any;
}

const BtnLike: FC<IProps> = ({ active = false, onEvent }) => {
  const [_active, setActive] = useState(active)

  useEffect(() => {
    setActive(active)
  }, [active])

  // EVENT HANDLER : 찜 하기 클릭
  const onClicHeart = useCallback(() => {
    setActive(!_active)
    onEvent(CLICK_BTNLIKE, _active)
  }, [_active, onEvent]);
  
  return <Button mode="like" className={_active ? 'active' : ''} label="찜 하기" icon={<IconHeart />} onClick={onClicHeart} />;
}

export default memo(BtnLike);