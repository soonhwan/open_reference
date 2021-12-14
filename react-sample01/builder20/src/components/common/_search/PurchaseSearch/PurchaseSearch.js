import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Input, LinkRenderer } from 'components';
import styles from './PurchaseSearch.scss';
import { useState } from 'hooks';

const PurchaseSearch = ({ name, placeholder, disabled, readOnly }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValLength, setInputValLength] = useState(false);

  const getInput = () => {
    const param = {
      type: 'search',
      name: name,
      value: inputValue,
      placeholder: placeholder,
      disabled: disabled,
      readOnly: readOnly,
      onFocus: () => {
        setInputFocus(true);
      },
      onBlur: () => {
        setInputFocus(false);
      },
      onChange: (val) => {
        if (val.length > 0) {
          setInputValLength(true);
        } else {
          setInputValLength(false);
        }
        setInputValue(val);
      }
    }
    return (<Input {...param}>구매내역 검색</Input>)
  }

  const getValInit = () => {
    setInputValue('');
    setInputValLength(false);
  }

  const getSearchDel = () => {
    return (<div className="PurchaseSearchDel">
      <LinkRenderer mode="icon" icon="searchdel" iconsize="20" onEvent={() => getValInit() }>삭제</LinkRenderer>
    </div>)
  }

  const getSearchSubmit = () => {
    return (<div className="PurchaseSearchSubmit">
      <LinkRenderer mode="icon" icon="search" iconsize="20" >검색</LinkRenderer>
    </div>)
  }
  return (
    <div className={'PurchaseSearch' + (inputFocus ? ' focus' : '') + (inputValLength ? ' on' : '')}>
      <div className="PurchaseSearchInner">
        <div className="PurchaseSearchInput">
          {getInput()}
        </div>
        {getSearchDel()}
        {getSearchSubmit()}
      </div>
    </div>
  )
}

export default withStyles(styles)(PurchaseSearch);