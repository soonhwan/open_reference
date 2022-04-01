import React, { memo, useMemo, useState, FC, useCallback } from 'react';
import { IconWrap } from './IconStyles';
import utils from 'utils';

interface IProps {
  type?: string;
  children?: string;
}

const Icon: FC<IProps> = ({ type, children = '' }) => {
  const param = {
    type: type,
    className: useMemo(() => {
      return ['icon-base', type ? ('icon-' + type) : ''].join(' ')
    }, [type])
  }

  return (
    <IconWrap {...param} />
  );
}

export default memo(Icon);