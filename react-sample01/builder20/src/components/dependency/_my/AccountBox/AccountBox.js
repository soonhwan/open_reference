import React, { Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { LinkRenderer, TextRenderer, Icon } from 'components';
import styles from './AccountBox.scss';
import utils from 'utils';
import { useState } from 'hooks';

const AccountBox = ({ mode, accountInfo, notiYn, adultYn, prevEvent, onEvent }) => {
  const [notiValue, setNotiValue] = useState(notiYn);
  const [adultValue, setAdultValue] = useState(adultYn);

  const getAccountInfo = () => {
    let tTag = '';

    if (mode === 'mysnb') {
      tTag = getAccountInfoLink();
    } else if (mode === 'control' || mode === 'cancel') {
      tTag = getAccountInfoControl();
    }

    return (
      <div className="AccountBoxInfo">
        {tTag}
      </div>
    );
  }

  const getAccountInfoControl = () => {
    const param = {
      size: 'ST16',
      color: 'Dark'
    }
    const iconParam = {
      icon: 'sns' + accountInfo.sns,
      iconsize: 16
    }


    return (
      <div className={'AccountBoxInfoText' + (!utils.isEmpty(accountInfo.sns) ? '' : ' no')}>
        <span>
          {!utils.isEmpty(accountInfo.sns) && <Icon {...iconParam}></Icon>}
          <TextRenderer {...param}>{accountInfo.name}</TextRenderer>
        </span>
      </div>
    )
  }

  const getAccountInfoLink = () => {
    const param = {
      mode: 'text',
      btnClass: 'AccountBoxInfoBtn',
      size: 'H24',
      color: 'Dark',
      textClass: 'Ellipsis',
      prevEvent: prevEvent,
      onEvent: (event) => {
        utils.triggerEvent('click_AccountBox_Account', onEvent, prevEvent, null, null, event)
      }
    }

    if (!utils.isEmpty(accountInfo.sns)) {
      param.mode = 'icontext';
      param.icon = 'sns' + accountInfo.sns;
      param.iconsize = 24;
    }

    return (
      <Fragment>
        <LinkRenderer {...param}>{accountInfo.name}</LinkRenderer>
      </Fragment>
    );
  }

  const getAccountUtil = () => {
    const accountParam = {
      mode: 'icontext',
      size: 'B14B',
      color: 'Medium',
      icon: 'set',
      iconsize: 18,
      prevEvent: prevEvent,
      onEvent: (event) => {
        utils.triggerEvent('click_AccountBox_Account', onEvent, prevEvent, null, null, event)
      }
    }
    const notiParam = {
      mode: 'icontext',
      size: 'B14B',
      color: 'Medium',
      icon: notiValue ? 'notiNew' : 'noti',
      iconsize: 18,
      prevEvent: prevEvent,
      onEvent: (event) => {
        setNotiValue(false);
        utils.triggerEvent('click_AccountBox_Noti', onEvent, prevEvent, null, null, event)
      }
    }
    return (
      <div className="AccountBoxBtnCell util">
        <LinkRenderer {...accountParam}>계정관리</LinkRenderer>
        <LinkRenderer {...notiParam}>알림</LinkRenderer>
      </div>
    )
  }

  const getAccountAdult = () => {
    const param = {
      mode: 'icon',
      icon: adultValue ? 'adultToggleSel' : 'adultToggle',
      iconsize: 48,
      prevEvent: prevEvent,
      onEvent: (event) => {
        setAdultValue(!adultValue);
        utils.triggerEvent('click_AccountBox_Adult', onEvent, prevEvent, null, null, event)
      }
    }

    return (
      <div className="AccountBoxBtnCell adult">
        <LinkRenderer {...param}>{accountInfo.name}</LinkRenderer>
      </div>
    )
  }

  const getAccountBtn = () => {
    return (
      <div className="AccountBoxBtn">
        <div className="AccountBoxBtnInner">
          {getAccountUtil()}
          {getAccountAdult()}
        </div>
      </div>
    );
  }

  return (
    <div className={'AccountBoxWrap ' + mode}>
      <div className="AccountBoxInner">
        {getAccountInfo()}
        { mode === 'mysnb' && getAccountBtn()}
      </div>
    </div>
  )
}

export default withStyles(styles)(AccountBox);