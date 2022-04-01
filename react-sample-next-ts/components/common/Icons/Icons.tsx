import React, { memo, useMemo, useState, FC, useCallback } from 'react';
//import { IconWrap } from './IconStyles';
import utils from 'utils';
import { ReactComponent as MySvg } from './ico_search.svg';

const Icons = () => {
  return (
    <MySvg />
  );
}

export default memo(Icons);