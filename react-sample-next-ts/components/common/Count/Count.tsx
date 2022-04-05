/* eslint-disable react/display-name */
import React, { memo, useMemo, useState, FC, useCallback, useRef, forwardRef, useEffect } from 'react';
import { CountWrap } from './CountStyles';


interface IProps {
  count: number;
}

const Button: FC<IProps> = ({ count = 0 }) => {
  return (
    <CountWrap className="count">{count}</CountWrap>
  );
}

export default memo(Button);