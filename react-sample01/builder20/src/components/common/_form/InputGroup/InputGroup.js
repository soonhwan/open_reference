import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Input, LinkRenderer, TextRenderer, SubHeader } from 'components';
import styles from './InputGroup.scss';
import utils from 'utils';
import { useState } from 'hooks';

const InputGroup = ({ mode, inputParam, children, inputBtn, authTime }) => {
  const [inputValue, setInputValue] = useState(inputParam.value);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValLength, setInputValLength] = useState(false);

  const inputEventParam = {
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

  const getInput = () => {
    const inputCustomParam = { ...inputParam };
    inputCustomParam.infoType = null;
    inputCustomParam.infoMessage = null;
    const inputEventParam = {
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

    return (
      <div className="formInputGroupBox">
        <Input {...inputCustomParam} {...inputEventParam}>{children}</Input>
      </div>
    );
  }

  const getInputButton = () => {
    if (!utils.isEmpty(inputBtn)) {
      return (
        <div className="formInputGroupBtn">
          <LinkRenderer {...inputBtn}>{inputBtn.text}</LinkRenderer>
        </div>
      );
    }
    return '';
  }

  const getAuthTime = () => {
    const authParam = {
      size: 'B12',
      color: 'Error'
    }
    if (!utils.isEmpty(authTime)) {
      return (
        <div className="formInputGroupAuthTime">
          <TextRenderer {...authParam}>{authTime}</TextRenderer>
        </div>
      );
    }
    return '';
  }

  const getInfo = () => {
    console.log(inputParam.infoType);
    if (utils.isEmpty(inputParam.infoType) !== true) {
      return (
        <div className={'formInputGroupInfo ' + inputParam.infoType} dangerouslySetInnerHTML={{ __html: inputParam.infoMessage }}></div>
      )
    }
    return '';
  }

  const getTelGroup = () => {
    const tTelGroup = inputParam.inputItems.map((item, i) => {
      const inputCustomParam = { ...item };
      return (
        <div className="formInputGroupTelItem" key={i}>
          <Input {...inputCustomParam}>{item.text}</Input>
        </div>
      )
    });

    return tTelGroup;
  }

  if (mode === 'telGroup') {
    return (
      <div className={'formInputGroup ' + mode}>
        <div className="formInputGroupInner">
          <SubHeader mode="contentBasic" title={children} />
          <div className="formInputGroupTel">
            {getTelGroup()}
          </div>
        </div>
        {getInfo()}
      </div>
    )
  } else {
    return (
      <div className={'formInputGroup ' + mode + (inputFocus ? ' focus' : '') + (inputValLength ? ' on' : '') + (inputParam.disabled === 'Y' ? ' disabled' : '')}>
        <div className="formInputGroupInner">
          {getInput()}
          {getInputButton()}
          {getAuthTime()}
        </div>
        {getInfo()}
      </div>
    )
  }
}

export default withStyles(styles)(InputGroup);