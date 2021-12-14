import React, { Fragment, Children } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { PopupCo, LinkRenderer, TextRenderer, Checkbox, Icon } from 'components';
import utils from 'utils';
import { useState, useEffect } from 'hooks';
import styles from './Popup.scss';

const CLICK_POPUP_SHAREBTN = 'click_Popup_shareBtn';

// 다시 보지 않기 -> checkBtnNm
const getTodayCheck = (props) => {
  const param = {
    name: 'aaa',
    checked: false,
    disabled: false,
    readOnly: false,
    onEvent: (eventName, state, event) => {
      // eventNm, onEvent, prevEvent, value, oldValue, event
      utils.triggerEvent('change_Popup_check', props.onEvent, props.prevEvent, state, !state, event)
    }
  }

  return (
    <div className="PopupFooterBtnLeft">
      <Checkbox {...param}>{props.checkBtnNm}</Checkbox>
    </div>
  )
}

const clickPopupOk = (props) => {
  return {
    mode: 'text',
    size: 'B14B',
    color: 'Dark',
    onEvent: (eventName, state, event) => {
      utils.triggerEvent('click_Popup_firstBtn', props.onEvent, props.prevEvent, null, null, event)
    }
  }
}

const clickPopupCacel = (props) => {
  return {
    mode: 'text',
    size: 'B14B',
    color: 'Dark',
    onEvent: (eventName, state, event) => {
      utils.triggerEvent('click_Popup_secondBtn', props.onEvent, props.prevEvent, null, null, event)
    }
  }
}

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

// 상세 내용
const getDetail = (size, color, textClass, text) => {
  const param = {
    size: size,
    color: color,
    textClass: textClass
  }

  const tText = utils.isEmpty(text) || <div className="PopupContentDetail"><TextRenderer {...param}>{text}</TextRenderer></div>

  return (
    <Fragment>
      { tText }
    </Fragment>
  )
}

// Alert 하단 버튼
const getAlertFooterBtn = (props) => {
  const okParam = clickPopupOk(props);
  okParam.btnClass = 'btnLink';
  return (
    <div className="PopupFooterBtn">
      <div className="PopupFooterBtnInner">
        { (props.mode === 'alertToday') && getTodayCheck(props)}
        <div className="PopupFooterBtnRight">
          <LinkRenderer {...okParam}>{props.firstBtnNm}</LinkRenderer>
        </div>
      </div>
    </div>
  );
}

const getConfirmFooterBtn = (props) => {
  const okParam = clickPopupOk(props);
  okParam.color = 'White';
  okParam.btnClass = 'btnPrimary';

  const cancelParam = clickPopupCacel(props);
  cancelParam.btnClass = 'btnLink';

  return (
    <div className="PopupFooterBtn">
      <div className="PopupFooterBtnInner">
        { (props.mode === 'confirmToday' || props.mode === 'confirmBtnStyleToday') && getTodayCheck(props)}
        <div className="PopupFooterBtnRight">
          <LinkRenderer {...cancelParam}>{props.secondBtnNm}</LinkRenderer>
          <LinkRenderer {...okParam}>{props.firstBtnNm}</LinkRenderer>
        </div>
      </div>
    </div>
  );
}

const getConfirmBtnStyleFooterBtn = (props) => {
  const okParam = clickPopupOk(props);
  okParam.color = 'White';
  okParam.btnClass = 'btnPrimary';

  const cancelParam = clickPopupCacel(props);
  cancelParam.btnClass = 'btnLink';

  return (
    <div className="PopupFooterBtn">
      <div className="PopupFooterBtnInner">
        { (props.mode === 'confirmToday' || props.mode === 'confirmBtnStyleToday') && getTodayCheck(props)}
        <div className="PopupFooterBtnRight">
          <LinkRenderer {...okParam}>{props.firstBtnNm}</LinkRenderer>
          <LinkRenderer {...cancelParam}>{props.secondBtnNm}</LinkRenderer>
        </div>
      </div>
    </div>
  );
}

const PopupDetailCover = (props) => {
  const [boxHeightValue, setBoxHeightValue] = useState(false);

  const param = {
    mode: 'icon',
    btnClass: 'PopupContentCoverClose',
    icon: 'closeWhite',
    iconsize: 32,
    onEvent: (eventName, state, event) => {
      utils.triggerEvent('click_Popup_detailCoverClose', props.onEvent, props.prevEvent, null, null, event)
    }
  }

  useEffect(() => {
    const updateSize = () => {
      const numPadding = 80;
      let numMaxHeight = (window.innerHeight * 0.7) + numPadding;
      if (numMaxHeight > window.innerHeight) {
        numMaxHeight = window.innerHeight;
      }
      if (numMaxHeight > (880 + numPadding)) {
        numMaxHeight = 880 + numPadding;
      }
      setBoxHeightValue(numMaxHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
  }, [boxHeightValue])

  const imgParam = {
    src: props.coverPic,
    alt: '',
    style: {
      maxHeight: boxHeightValue + 'px',
    }
  }

  return (
    <div className={'PopupWrap ' + props.mode}>
      <div className="PopupWrapInner">
        <div className="PopupContentWrap">
          <div className="PopupContentCover">
            <LinkRenderer {...param}>닫기</LinkRenderer>
            <img {...imgParam} />
          </div>
        </div>
      </div>
    </div>
  )
}

const getPopupType = ({ mode }) => {
  let WrapClassName;
  if (mode === 'alert' || mode === 'alertToday') {
    WrapClassName = 'alert';
  } else if (mode === 'confirm' || mode === 'confirmToday') {
    WrapClassName = 'confirm';
  } else if (mode === 'confirmBtnStyle' || mode === 'confirmBtnStyleToday') {
    WrapClassName = 'confirmBtnStyle';
  } else {
    WrapClassName = 'alert';
  }

  return WrapClassName;
}

const PopopWrap = {
  alert: (props) => {
    return (
      <div className={'PopupWrap ' + getPopupType(props)}>
        <div className="PopupWrapInner">
          <div className="PopupContentWrap">
            {getTitle('ST16B', 'Drak', 'LineEll2', props.title)}
            <div className="PopupContentCoScroll">
              <div className="PopupContentCo">
                {getDetail('B14', 'Drak', null, props.detail)}
                {props.children}
              </div>
            </div>
            {getAlertFooterBtn(props)}
          </div>
        </div>
      </div>
    );
  },
  confirm: (props) => {
    return (
      <div className={'PopupWrap ' + getPopupType(props)}>
        <div className="PopupWrapInner">
          <div className="PopupContentWrap">
            {getTitle('ST16B', 'Drak', 'LineEll2', props.title)}
            <div className="PopupContentCoScroll">
              <div className="PopupContentCo">
                {getDetail('B14', 'Drak', null, props.detail)}
                {props.children}
              </div>
            </div>
            {getConfirmFooterBtn(props)}
          </div>
        </div>
      </div>
    );
  },
  confirmBtnStyle: (props) => {
    return (
      <div className={'PopupWrap ' + getPopupType(props)}>
        <div className="PopupWrapInner">
          <div className="PopupContentWrap">
            {getTitle('ST16B', 'Drak', 'LineEll2', props.title)}
            <div className="PopupContentCoScroll">
              <div className="PopupContentCo">
                {getDetail('B14', 'Drak', null, props.detail)}
                {props.children}
              </div>
            </div>
            {getConfirmBtnStyleFooterBtn(props)}
          </div>
        </div>
      </div>
    );
  },
  share: (props) => {
    const currentURL = window.document.location.href
    const tShareList = props.snsShares.map((item, index) => {
      const param = {
        className: 'PopupContentShareCell',
        onClick: (event) => {
          utils.triggerEvent(CLICK_POPUP_SHAREBTN, props.onEvent, props.prevEvent, item.snsNm, null, event)
        }
      }
      const imgParam = {
        src: '/static/images/icon/share_' + item.snsNm + '.png',
        alt: item.snsName
      }
      return (
        <a {...param} key={index} value={currentURL} id='ShareUrl'>
          <img {...imgParam} />
        </a>
      )
    })
    return (
      <div className={'PopupWrap ' + props.mode}>
        <div className="PopupWrapInner">
          <div className="PopupContentWrap">
            {getTitle('ST16B', 'Drak', 'LineEll2', props.title)}
            <div className="PopupContentCoScroll">
              <div className="PopupContentCo">
                <div className="PopupContentShare">
                  {tShareList}
                </div>
              </div>
            </div>
            {getAlertFooterBtn(props)}
          </div>
        </div>
      </div>
    )
  },
  detailCover: PopupDetailCover,
  appMove: (props) => {
    return (
      <div className={'PopupWrap confirmBtnStyle ' + props.mode}>
        <div className="PopupWrapInner">
          <div className="PopupContentWrap">
            <div className="PopupContentCo">
              <Icon icon="booksLogo" iconsize="88"></Icon>
              <TextRenderer size="ST18B" color="White">unknown 앱으로<br />편하게 이용하세요</TextRenderer>
            </div>
            {getConfirmBtnStyleFooterBtn(props)}
          </div>
        </div>
      </div>
    )
  }
}


const getPopupTag = (props) => {
  let Renderer;
  if (props.mode === 'alert' || props.mode === 'alertToday') {
    Renderer = PopopWrap.alert;
  } else if (props.mode === 'confirm' || props.mode === 'confirmToday') {
    Renderer = PopopWrap.confirm;
  } else if (props.mode === 'confirmBtnStyle' || props.mode === 'confirmBtnStyleToday') {
    Renderer = PopopWrap.confirmBtnStyle;
  } else if (props.mode === 'share') {
    Renderer = PopopWrap.share;
  } else if (props.mode === 'detailCover') {
    Renderer = PopopWrap.detailCover;
  } else if (props.mode === 'appMove') {
    Renderer = PopopWrap.appMove;
  } else {
    Renderer = PopopWrap.alert;
  }

  return <Renderer {...props}></Renderer>
}

const getMode = (props) => {
  const mode = props.mode
  let newMode;

  if (utils.isEmpty(props.secondBtnNm)) {
    newMode = 'alert'
  } else {
    newMode = 'confirm'
  }

  if (!utils.isEmpty(props.btnStyle)) {
    newMode += 'BtnStyle'
  }

  if (!utils.isEmpty(props.checkBtnNm)) {
    newMode += 'Today'
  }

  if (mode === 'share') {
    newMode = 'share'
  } else if (mode === 'detailCover') {
    newMode = 'detailCover'
  } else if (mode === 'appMove') {
    newMode = 'appMove'
  }

  return newMode
}

const Popup = (props) => {
  // deep copy
  const newProps = Object.assign({}, props) // JSON.parse(JSON.stringify(props))
  newProps.mode = getMode(props)
  return (
    <Fragment>
      {getPopupTag(newProps)}
    </Fragment>
  )
}

export default withStyles(styles)(Popup);

