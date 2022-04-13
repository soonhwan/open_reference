/* eslint-disable react/display-name */
import React, { memo, useMemo, useState, FC, useCallback, useRef, forwardRef, useEffect } from 'react';
import { ButtonWrap, LinkWrap } from './ButtonStyles';
import utils from 'utils';

interface IProps {
  id: string;
  type: string;
  href: string;
  children: any;
  label: string;
  className: string;
  mode: string;
  style: any;
  disabled: boolean;
  target: string;
  rel: string;
  ref: any;
  icon: any;
  onClick: any;
  onEvent: any;
}

const Button: FC<IProps> = forwardRef(({ id, type = 'button', href, className, mode, style, disabled, target, rel, icon, label, onClick, children }, ref) => {
  const btnRef = useRef<any>(ref || null);
  
  const param = {
    id: id || undefined,
    href: href || undefined,
    ref: btnRef,
    className: useMemo(() => {
      return utils.setClassNameBind([
        'btn-base',
        disabled ? 'disabled' : '',
        mode ? mode : '',
        className ? className : '',
      ])
    }, [disabled, mode, className]),
    type: href ? null : type,
    target: target,
    disabled: disabled,
    rel: target ? rel : null,
    'aria-label': label,
    icon: icon,
    mode: mode,
    style: style,
    onClick: (e: any) => {
      e.param = {
        id: param.id,
        href: param.href,
        className: param.className,
        //target: param.ref.current.target || undefined,
        //disabled: param.ref.current.disabled ? true : false,
      };
      if(typeof onClick === 'function') onClick(e);
    },
  }

  // ITEM RENDERER : getChildrenRender
  const getChildrenRender = () => {
    return (
      <>
        {!utils.isEmpty(icon) && icon}
        {!utils.isEmpty(children) && utils.isString(children) ? <span>{children}</span> : children}
      </>
    )
  } 

  // ITEM RENDERER : getLinkRender
  const getLinkRender = () => {
    return (
      <LinkWrap {...param}>
        {getChildrenRender()}
      </LinkWrap>
    );  
  }

  // ITEM RENDERER : getButtonRender
  const getButtonRender = () => {
    return (
      <ButtonWrap {...param}>
        {getChildrenRender()}
      </ButtonWrap>
    );  
  }

  return (
    <>
      {href ? getLinkRender() : getButtonRender()}
    </>
  );
})

export default memo(Button);