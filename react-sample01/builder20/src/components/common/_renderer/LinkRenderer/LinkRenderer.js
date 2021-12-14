import React, { Fragment, memo } from 'react';
import { useRef } from 'hooks';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './LinkRenderer.scss';

const getTextParam = (size, color, textClass) => {
  const param = {};
  param.size = size;
  param.color = color;
  param.textClass = textClass;

  return param;
}

const getIconParam = (mode, icon, iconsize, children) => {
  const param = {};
  param.icon = icon;
  param.iconsize = iconsize;

  if (mode === 'icon') {
    param.text = children;
  }

  return param;
}

const Link = {
  Text: ({ btnClass, size, color, textClass, children, onEvent }) => {
    const textParam = getTextParam(size, color, textClass);
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const linkParam = {
      className: 'linkSt' + tBtnClass
    }
    if (onEvent) {
      linkParam.onClick = (e) => {
        e.preventDefault();
        onEvent('click_TextButton', null, e); // eventName, state, event
      }
    }
    return (
      <a {...linkParam}>
        <span><TextRenderer {...textParam}>{children}</TextRenderer></span>
      </a>
    )
  },
  Icon: ({ btnClass, mode, icon, iconsize, children, onEvent }) => {
    const target = useRef(null);
    const iconParam = getIconParam(mode, icon, iconsize, children);
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const tIconSize = iconsize ? iconsize : '';
    const linkParam = {
      className: 'linkSt linkIcon' + tIconSize + tBtnClass
    }
    if (onEvent) {      
      linkParam.onClick = (e) => {
        e.preventDefault();
        onEvent('click_TextButton', null, e); // eventName, state, event
      }
    }
    return (
      <a {...linkParam} ref={target}>
        <span><Icon {...iconParam} /></span>
      </a>
    )
  },
  IconText: ({ btnClass, mode, size, color, textClass, icon, iconsize, children, multiEvent = false, onEvent }) => {
    const textParam = getTextParam(size, color, textClass);
    const iconParam = getIconParam(mode, icon, iconsize, children);
    const tSize = size ? ' link' + size : ' ';
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const tIconSize = iconsize ? iconsize : '';
    const linkParam = {
      className: 'linkSt linkIconText' + tSize + ' linkIcon' + tIconSize + tBtnClass
    }
    if (onEvent) {
      linkParam.onClick = (e) => {
        e.preventDefault();
        if (!multiEvent) {
          onEvent('click_TextButton', null, e); // eventName, state, event
        } else {
          onEvent(`click_TextButton_${icon}`, null, e); // 여러개의 이벤트가 있을 경우 icon의 이름을 따라간다.
        }
      }
    }
    return (
      <a {...linkParam}>
        <span>
          <Icon {...iconParam} />
          <TextRenderer {...textParam}>{children}</TextRenderer>
        </span>
      </a>
    )
  },
  TextIcon: ({ btnClass, mode, size, color, textClass, icon, iconsize, children, onEvent }) => {
    const textParam = getTextParam(size, color, textClass);
    const iconParam = getIconParam(mode, icon, iconsize, children);
    const tSize = size ? ' link' + size : ' ';
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const tIconSize = iconsize ? iconsize : '';
    const linkParam = {
      className: 'linkSt linkTextIcon' + tSize + ' linkIcon' + tIconSize + tBtnClass
    }
    if (onEvent) {
      linkParam.onClick = (e) => {
        e.preventDefault();
        onEvent('click_TextButton', null, e); // eventName, state, event
      }
    }
    return (
      <a {...linkParam}>
        <span>
          <TextRenderer {...textParam}>{children}</TextRenderer>
          <Icon {...iconParam} />
        </span>
      </a>
    )
  },
  TextNo: ({ btnClass, size, color, textClass, children, onEvent }) => {
    const textParam = getTextParam(size, color, textClass);
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const linkParam = {
      className: 'linkSt' + tBtnClass
    }
    return (
      <div {...linkParam}>
        <span><TextRenderer {...textParam}>{children}</TextRenderer></span>
      </div>
    )
  },
  IconTextNo: ({ btnClass, mode, size, color, textClass, icon, iconsize, children }) => {
    const textParam = getTextParam(size, color, textClass);
    const iconParam = getIconParam(mode, icon, iconsize, children);
    const tSize = size ? ' link' + size : ' ';
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const tIconSize = iconsize ? iconsize : '';
    const linkParam = {
      className: 'linkSt linkIconText' + tSize + ' linkIcon' + tIconSize + tBtnClass
    }
    return (
      <div {...linkParam}>
        <span>
          <Icon {...iconParam} />
          <TextRenderer {...textParam}>{children}</TextRenderer>
        </span>
      </div>
    )
  },
  TextIconNo: ({ btnClass, mode, size, color, textClass, icon, iconsize, children }) => {
    const textParam = getTextParam(size, color, textClass);
    const iconParam = getIconParam(mode, icon, iconsize, children);
    const tSize = size ? ' link' + size : ' ';
    const tBtnClass = btnClass ? ' ' + btnClass : '';
    const tIconSize = iconsize ? iconsize : '';
    const linkParam = {
      className: 'linkSt linkTextIcon' + tSize + ' linkIcon' + tIconSize + tBtnClass
    }
    return (
      <div {...linkParam}>
        <span>
          <TextRenderer {...textParam}>{children}</TextRenderer>
          <Icon {...iconParam} />
        </span>
      </div>
    )
  },
}

const LinkRenderer = (props) => {
  const getLinkTag = (props) => {
    let linkTag;
    // if (props.mode === 'text') {
    //   linkTag = <Link.Text {...props}>{props.children}</Link.Text>;
    // } else if (props.mode === 'icon') {
    //   linkTag = <Link.Icon {...props}>{props.children}</Link.Icon>;
    // } else if (props.mode === 'icontext') {
    //   linkTag = <Link.IconText {...props}>{props.children}</Link.IconText>;
    // } else if (props.mode === 'texticon') {
    //   linkTag = <Link.TextIcon {...props}>{props.children}</Link.TextIcon>;
    // } else if (props.mode === 'icontextno') {
    //   linkTag = <Link.IconTextNo {...props}>{props.children}</Link.IconTextNo>;
    // } else if (props.mode === 'texticonno') {
    //   linkTag = <Link.TextIconNo {...props}>{props.children}</Link.TextIconNo>;
    // } else {
    //   linkTag = <Link.Text {...props}>{props.children}</Link.Text>;
    // }
    // return linkTag;

    let Renderer;
    if (props.mode === 'text') {
      Renderer = Link.Text
    } else if (props.mode === 'textno') {
      Renderer = Link.TextNo
    } else if (props.mode === 'icon') {
      Renderer = Link.Icon
    } else if (props.mode === 'icontext') {
      Renderer = Link.IconText
    } else if (props.mode === 'texticon') {
      Renderer = Link.TextIcon
    } else if (props.mode === 'icontextno') {
      Renderer = Link.IconTextNo
    } else if (props.mode === 'texticonno') {
      Renderer = Link.TextIconNo
    } else {
      Renderer = Link.Text
    }

    return <Renderer {...props}>{props.children}</Renderer>
  }

  return (
    <Fragment>
      {getLinkTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(memo(LinkRenderer));