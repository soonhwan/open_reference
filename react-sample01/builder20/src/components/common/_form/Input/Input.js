import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer, Icon } from 'components';
import styles from './Input.scss';
import utils from 'utils';
import { useState, useEffect, useMemo } from 'hooks';
import PropTypes from 'prop-types'

const Input = ({ type, name, value, requiredYn, formClass, placeholder, disabled, readOnly, children, onFocus, onBlur, onChange, onKeyPress, infoType, infoMessage, labelHiddenYn, maxLength }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputValLength, setInputValLength] = useState(inputValue.length);

  // const _id = utils.getAutoGenId() // id 값이 랜더링 할때마다 생성함
  const _id = useMemo(() => utils.getAutoGenId(), []); // _id 값이 갱신되야 하면 의존성 배열로 utils.getAutoGenId() 넣으면 됨

  const tFormClass = utils.isEmpty(formClass) ? '' : ' ' + formClass;
  const tLabelHiddenClass = labelHiddenYn === 'Y' ? ' formLabelHidden' : '';
  const tRequired = (requiredYn === 'Y') ? 'required' : '';
  
  //value 초기화
  useEffect(() => {
    if (value === '') {
      setInputValue('')
      setInputValLength(0);
    } else {
      setInputValue(value)
      setInputValLength(value.length)
    }
  }, [value]);

  const param = {
    type: type,
    id: _id,
    value: inputValue,
    name: name,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    autoComplete: 'off',
    maxLength: maxLength,
    onFocus: () => { 
      if (typeof onFocus === 'function') {
        onFocus();
      }
    },
    onBlur: () => {
      if (typeof onBlur === 'function') {
        onBlur();
      }
    },
    onChange: (e) => {
      setInputValLength(e.target.value.length);
      setInputValue(e.target.value);
      if (typeof onChange === 'function') {
        onChange(e.target.value);
      }
    },
    onKeyPress: (e) => {
      if (e.key === 'Enter' && typeof onKeyPress === 'function') {
          onKeyPress();
      }
    }
  }

  const getLabel = () => {
    const labelParam = {
      htmlFor: _id,
      className: tRequired
    }

    const textParam = {
      size: 'B14B',
      color: 'Dark'
    }

    return (
      <label {...labelParam}>
        <TextRenderer {...textParam}>{children}</TextRenderer>
      </label>
    )
  }

  const getRequiredCheck = () => {
    const tCheck = infoMessage.map((item, index) => {
      const iconParam = {
        icon: 'requiredCheck',
        iconsize: 12
      }
      const requiredIcon = (item.checkYn === 'Y' ? <Icon {...iconParam}></Icon> : '');
      return (
        <div className={'formInputInfoCheck ' + (item.checkYn === 'Y' ? 'check' : '')} key={index}>
          {requiredIcon}
          {item.text}
        </div>
      )
    })
    return (
      <div className="formInputInfo">
        {tCheck}
      </div>
    )
  }

  const getInfo = () => {
    if (utils.isEmpty(infoType) !== true) {
      if (infoType === 'required') {
        return (
          <Fragment>
            {getRequiredCheck()}
          </Fragment>
        )
      } else {
        return (
          <div className={'formInputInfo ' + infoType} dangerouslySetInnerHTML={{ __html: infoMessage }}></div>
        )
      }
    }
    return '';
  }

  return (
    <div className={'formInput' + tFormClass + tLabelHiddenClass}>
      {getLabel()}
      <div className={'formInputBox' + (inputValLength > 0 ? ' on' : '')}>
        <input {...param} />
        {getInfo()}
      </div>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  requiredYn: PropTypes.string,
  formClass: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  children: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  infoType: PropTypes.string,
  infoMessage: PropTypes.string,
  labelHiddenYn: PropTypes.string,
  maxLength: PropTypes.number,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  disabled: false,
  readOnly: false,
}

export default withStyles(styles)(Input);