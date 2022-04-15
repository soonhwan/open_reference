import React, { memo, FC, useMemo } from 'react';
import { LabelWrap } from './LabelStyles';
import utils from 'utils';

interface IProps {
  id: string;
  label: string;
  mode: string;
  color: string;
  size: string;
  className: string;
  style: any;
  icon: any;
  children: any;
}

const Label: FC<IProps> = ({ id, label, mode, color, size, className, style, icon, children }) => {  
  const param = {
    id: id || undefined,
    className: useMemo(() => {
      return utils.classNameBind([
        'label-base',
        mode ? 'label-' + mode : '',
        color ? color : '',
        size ? size : '',
        className ? className : '',
      ])
    }, [className, color, mode, size]),
    'aria-label': label,
    icon: icon,
    style: style,
    color: color,
  }

  return (
    <LabelWrap {...param}>
      {!utils.isEmpty(icon) && icon}
      {!utils.isEmpty(children) && utils.isString(children) ? <span>{children}</span> : children}
    </LabelWrap>
  )
}

export default memo(Label);