import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Input, LinkRenderer } from 'components';
import styles from './GnbSearch.scss';
import { useState, useEffect } from 'hooks';
import PropTypes from 'prop-types'

const CLICK_GNBSEARCH = 'click_GnbSearch'
const FOCUS_GNBSEARCH_INPUT = 'focus_GnbSearch_input'
const BLUR_GNBSEARCH_INPUT = 'blur_GnbSearch_input'
const KEYPRESS_GNBSEARCH_INPUT = 'keypress_GnbSearch_input'
const CHINGE_GNBSEARCH_INPUTVALUE = 'change_GnbSearch_inputValue'
const DELETE_GNBSEARCH_INPUTVALUE = 'delete_GnbSearch_inputValue'

const GnbSearch = ({ name, placeholder, disabled, readOnly, onEvent, keyword }) => {
  const [inputValue, setInputValue] = useState(keyword);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValLength, setInputValLength] = useState(false);
  
  //keyword 초기화
  useEffect(() => {
    if (keyword !== '') {
      setInputValue(keyword)
      setInputValLength(true)
    }
  }, [keyword]);

  const getInput = () => {
    const param = {
      type: 'search',
      name: name,
      value: inputValue,
      placeholder: placeholder,
      disabled: disabled,
      readOnly: readOnly,
      maxLength: 60,
      onFocus: () => {
        setInputFocus(true);
        if (typeof onEvent === 'function') {
          onEvent(FOCUS_GNBSEARCH_INPUT, inputValue);
        } 
      },
      onBlur: () => {
        setInputFocus(false);
        if (typeof onEvent === 'function') {
          onEvent(BLUR_GNBSEARCH_INPUT, inputValue);
        } 
      },
      onChange: (val) => {
        if (val.length > 0) {
          setInputValLength(true);
        } else {
          setInputValLength(false);
        }
        setInputValue(val);

        if (typeof onEvent === 'function') {
          onEvent(CHINGE_GNBSEARCH_INPUTVALUE, val);
        } 
      },
      onKeyPress: () => {
        if (typeof onEvent === 'function') {
          onEvent(KEYPRESS_GNBSEARCH_INPUT, inputValue);
        } 
      }
    }
    return (<Input {...param}>unknown 검색</Input>)
  }

  const getValInit = () => {
    setInputValue('');
    setInputValLength(false);
    if (typeof onEvent === 'function') {
      onEvent(DELETE_GNBSEARCH_INPUTVALUE);
    } 
  }

  const getSearchDel = () => {
    return (<div className="GnbSearchDel">
      <LinkRenderer mode="icon" icon="searchdel" iconsize="20" onEvent={() => getValInit() }>삭제</LinkRenderer>
    </div>)
  }

  const getSearchSubmit = () => {
    const clickSearch = (eventName, state, event) => {
      if (typeof onEvent === 'function') {
        //inputValue 전달
        onEvent(CLICK_GNBSEARCH, inputValue, event);
      } 
    }
    return (<div className="GnbSearchSubmit">
      <LinkRenderer mode="icon" icon="search" iconsize="24" onEvent={clickSearch}>검색</LinkRenderer>
    </div>)
  }
  return (
    <div className={'GnbSearch' + (inputFocus ? ' focus' : '') + (inputValLength ? ' on' : '')}>
      <div className="GnbSearchInner">
        <div className="GnbSearchBox">
          <div className="GnbSearchInput">
            {getInput()}
          </div>
          {getSearchDel()}
        </div>
        {getSearchSubmit()}
      </div>
    </div>
  )
}

GnbSearch.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  keyword: PropTypes.string,
  prevEvent: PropTypes.func,
  onEvent: PropTypes.func,
}

GnbSearch.defaultProps = {
  disabled: false,
  readOnly: false,
  keyword: '',
}

export default withStyles(styles)(GnbSearch);