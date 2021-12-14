import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './Textarea.scss';
import utils from 'utils';
import { useState } from 'hooks';

const Textarea = ({ type, name, value, requiredYn, formClass, placeholder, disabled, readOnly, children, onFocus, onBlur, onChange, infoType, infoMessage, labelHiddenYn }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputValLength, setInputValLength] = useState(inputValue.length);

  const _id = utils.getAutoGenId()

  const tFormClass = utils.isEmpty(formClass) ? '' : ' ' + formClass;
  const tLabelHiddenClass = labelHiddenYn === 'Y' ? ' formLabelHidden' : '';
  const tRequired = (requiredYn === 'Y') ? 'required' : '';

  const param = {
    type: type,
    id: _id,
    value: inputValue,
    name: name,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    autoComplete: 'off',
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

  const getInfo = () => {
    if (utils.isEmpty(infoType) !== true) {
      return (
        <div className={'formTextareaInfo ' + infoType} dangerouslySetInnerHTML={{ __html: infoMessage }}></div>
      )
    }
    return '';
  }

  return (
    <div className={'formTextarea' + tFormClass + tLabelHiddenClass}>
      {getLabel()}
      <div className={'formTextareaBox' + (inputValLength > 0 ? ' on' : '')}>
        <textarea {...param} />
        {getInfo()}
      </div>
    </div>
  )
}

export default withStyles(styles)(Textarea);