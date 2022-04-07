/* eslint-disable react/display-name */
import React, { memo, useMemo, useState, FC, useCallback, useRef, forwardRef, useEffect } from 'react';
import { CountWrap } from './CountStyles';


interface IProps {
  count: number;
  label: string;
}

const Button: FC<IProps> = ({ count = 0, label }) => {
  return (
    <CountWrap className="count" aria-label={label}>{count}</CountWrap>
  );
}

export default memo(Button);