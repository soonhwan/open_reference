/* eslint-disable react/display-name */
import React, { memo, useMemo, useState, FC, useCallback, useRef, forwardRef } from 'react';
import { ButtonWrap, LinkWrap } from './ButtonStyles';
import utils from 'utils';

interface IProps {
  id: string;
  type: string;
  href: string;
  children: any;
  label: string;
  className: string;
  disabled: boolean;
  target: string;
  rel: string;
  ref: any;
  onClick: any;
  onEvent: any;
}

const Button: FC<IProps> = forwardRef(({ id, type, href, className, disabled, target, rel, label, onClick, onEvent, children }, ref) => {
  const chkRef = useRef(null);

  const ctarget = {

  }

  const param = {
    id: id,
    type: type,
    href: href,
    target: target,
    disabled: disabled,
    rel: target ? rel : null,
    'aria-label': label,
    ref: ref,
    onClick: (e: any) => {
      if (typeof onClick === 'function') {
        onClick(e);
      }
    },
    onEvent: (e: any) => {
      if (typeof onEvent === 'function') {
        onEvent(e);
      }
    },
    className: useMemo(() => {
      return utils.setClassNameBind([
        'btn-base',
        className ? className : '',
      ])
    }, [className])
  }

  // ITEM RENDERER : getChildrenRender
  const getChildrenRender = () => {
    return (
      <>{children}</>  
    )
  } 

  // ITEM RENDERER : getLinkRender
  const getLinkRender = () => {
    return (
      <LinkWrap {...param}>
        {!utils.isEmpty(children) && getChildrenRender()}
      </LinkWrap>
    );  
  }

  // ITEM RENDERER : getButtonRender
  const getButtonRender = () => {
    return (
      <ButtonWrap {...param}>
        {!utils.isEmpty(children) && getChildrenRender()}
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