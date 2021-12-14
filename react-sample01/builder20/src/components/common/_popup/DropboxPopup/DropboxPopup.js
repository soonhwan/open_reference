import React, { Fragment, Children } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './DropboxPopup.scss';
import { LinkRenderer, TextRenderer } from 'components';
import { useState } from 'hooks';
import utils from 'utils';

// 타이틀
const getTitle = (size, color, textClass, text) => {
  const param = {
    size: size,
    color: color,
    textClass: textClass
  }

  const tText = utils.isEmpty(text) || <div className="PopupContentTitle"><TextRenderer {...param}>{text}</TextRenderer></div>

  return (
    <Fragment>
      { tText }
    </Fragment>
  )
}

const DropboxPopupWrapOption = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.optionValue);

  // 옵션
  const getOption = (props) => {
    const tOption = props.options.map((option, index) => {
      console.log()
      const param = {
        mode: 'texticon',
        size: 'B14',
        color: 'Dark',
        textClass: 'Ellipsis',
        btnClass: option.value !== selectedValue ? 'optionLink' : 'optionLink optionLinkSel',
        icon: option.value !== selectedValue ? 'option' : 'option optionSel',
        iconsize: 24,
        onEvent: (eventName, state, event) => {
          if (utils.triggerEvent('click_DropboxPopup', props.onEvent, props.prevEvent, option.value, selectedValue, event)) {
            setSelectedValue(option.value)
          }
        }
      }

      return (<li key={index}>
        <LinkRenderer {...param}>{option.text}</LinkRenderer>
      </li>)
    });

    return tOption;
  }

  return (
    <div className={'DropboxPopupWrap ' + props.mode}>
      <div className="PopupWrapInner">
        <div className="PopupContentWrap">
          {getTitle('ST16B', 'Drak', 'LineEll2', props.title)}
          <div className="PopupContentCoScroll">
            <div className="PopupContentCoOption">
              <ul>
                {getOption(props)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DropboxPopup = (props) => {
  const getPopupTag = (props) => {
    let Renderer;
    if (props.mode === 'option') {
      Renderer = DropboxPopupWrapOption;
    } else {
      Renderer = DropboxPopupWrapOption;
    }

    return <Renderer {...props}></Renderer>
  }

  return (
    <Fragment>
      {getPopupTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(DropboxPopup);

