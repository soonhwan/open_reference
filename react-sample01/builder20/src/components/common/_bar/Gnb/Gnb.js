import React, { memo } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { CategoryBar, GnbSearch, LinkRenderer } from 'components';
import styles from './Gnb.scss';
import utils from 'utils';
import { logConfig } from '_constants'
import PropTypes from 'prop-types'

const CHANGE_GNB_MAIN = 'change_Gnb_main'
const CHANGE_GNB_CATEGORY = 'change_Gnb_category';
const CLICK_GNB_MY = 'click_Gnb_my'
const CLICK_GNBSEARCH = 'click_GnbSearch'
const CLICK_GNBSEARCH_CLOSE = 'click_GnbSearch_close'

const Gnb = (props) => {

  //마이메뉴
  const clickMy = (eventName, state, event) => {
    if (typeof props.onEvent === 'function') {
      props.onEvent(CLICK_GNB_MY, state, event)
    } 
  } 
  
  const getHeaderLogo = ({ mode, mainOptions, mainValue, prevEvent, onEvent }) => {
    return (
      <div className={'GnbHeaderLogo ' + mode}>
        {mainOptions.map((mainOption, index) => {
          const tLogo = mainValue === mainOption.value ? 'logo' + mainOption.value + 'Sel' : 'logo' + mainOption.value;
          const param = {
            mode: 'icon',
            btnClass: 'linkFullIcon',
            icon: tLogo,
            onEvent: (eventName, state, event) => {
              // eventNm, onEvent, prevEvent, value, oldValue, event
              utils.triggerEvent(CHANGE_GNB_MAIN, onEvent, prevEvent, mainOption.value, mainValue, event)
            }
          }
          return <LinkRenderer key={index} {...param}>{mainOption.text}</LinkRenderer>
        })}
      </div>
    )
  }
  const getCategory = ({ mode, categoryOptions, categoryValue, prevEvent, onEvent }) => {
    const param = {
      mainValue: props.mainValue,
      categoryOptions: categoryOptions,
      categoryValue: categoryValue,
      prevEvent: prevEvent,
      onEvent: (eventName, state, event) => {
        // eventNm, onEvent, prevEvent, value, oldValue, event
        utils.triggerEvent(CHANGE_GNB_CATEGORY, onEvent, prevEvent, state, categoryValue, event)
      }
    }
    return (
      <CategoryBar {...param}></CategoryBar>
    )
  }
  const getGnbSearchClose = (props) => {
    const param = {
      size: 'ST16',
      color: 'Dark',
      textClass: 'GnbBackBtn',
      onEvent: (eventName, state, event) => { 
        if (typeof props.onEvent === 'function') {
          props.onEvent(CLICK_GNBSEARCH_CLOSE)
        }
      } 
    }
    return (props.mode === 'search') && <div className="GnbHeaderSearchBack"><LinkRenderer {...param}>닫기</LinkRenderer></div>
  }
  const getGnbSearch = (props) => {
    const clickSearch = (eventName, state, event) => {
      if (typeof props.onEvent === 'function') {
        props.onEvent(CLICK_GNBSEARCH, state, event)
      }
    } 

    const changeGnbSearchinput = (eventName, state) => {
      if (typeof props.onEvent === 'function') {
        props.onEvent(eventName, state)
      }
    }

    const param = {
      name: 'aaa',
      placeholder: props.mainValue === 'books' ? '작품명, 작가로 검색해보세요.' : '북패스 작품명, 작가 검색',
      disabled: false,
      readOnly: false,
      keyword: props.keyword,
      onEvent: (eventName, state, event) => { 
        if (eventName === 'click_GnbSearch') {
          clickSearch(eventName, state, event)
        } else {
          changeGnbSearchinput(eventName, state)
        }
      } 
    }
    return (
      <div className="GnbHeaderSearch">
        <div className="GnbHeaderSearchBox">
          <GnbSearch {...param}></GnbSearch>
          {getGnbSearchClose(props)}
        </div>
        <div className="GnbHeaderSearchBtn">
          <LinkRenderer mode="icon" icon="search" iconsize="24" onEvent={clickSearch}>검색</LinkRenderer>
        </div>
      </div>
    )
  }
  const getCategoryNav = (props) => {
    return props.mode === 'main' && <div className="GnbNav">{getCategory(props)}</div>;
  }
  
  logConfig.render && console.log('%r Gnb')
  return (
    <div id="Gnb" className={props.mode}>
      <div className="GnbInner">
        <div className="GnbHeader">
          {getHeaderLogo(props)}
          <div className="GnbHeaderNav">
            {getCategory(props)}
          </div>
          <div className="GnbHeaderUtil">
            {getGnbSearch(props)}
            <div className="GnbHeaderMy">
              <LinkRenderer mode="icon" icon="my" iconsize="24" onEvent={clickMy}>마이페이지</LinkRenderer>
            </div>
          </div>
        </div>
        {getCategoryNav(props)}
      </div>
    </div>
  );
}

Gnb.propTypes = {
  mode: PropTypes.string.isRequired,
  mainOptions: PropTypes.array,
  mainValue: PropTypes.string,
  categoryOptions: PropTypes.array,
  categoryValue: PropTypes.string,
  keyword: PropTypes.string,
  historyOptions: PropTypes.array,
  autosOptions: PropTypes.array,
  prevEvent: PropTypes.func,
  onEvent: PropTypes.func,
}

Gnb.defaultProps = {
  mode: 'main',
  keyword: '',
}

export default withStyles(styles)(memo(Gnb));