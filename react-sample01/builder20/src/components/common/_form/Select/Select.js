import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { TextRenderer } from 'components';
import styles from './Select.scss';
import utils from 'utils';
import { useState } from 'hooks';

const Select = ({ optionValue, selectedValue, requiredYn, formClass, placeholder, disabled, readOnly, children, onFocus, onBlur, onChange, infoType, infoMessage, labelHiddenYn }) => {
  const [inputValue, setInputValue] = useState(selectedValue);

  const _id = utils.getAutoGenId();

  const tFormClass = utils.isEmpty(formClass) ? '' : ' ' + formClass;
  const tLabelHiddenClass = labelHiddenYn === 'Y' ? ' formLabelHidden' : '';
  const tRequired = (requiredYn === 'Y') ? 'required' : '';
  let tInputValue = inputValue;

  const param = {
    id: _id,
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    autoComplete: 'off',
    defaultValue: inputValue,
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
      setInputValue(e.target.value);
      tInputValue = e.target.value;
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

  const getOption = optionValue.map((item, index) => {
    return (
      <option key={index} value={item.value}>{item.text}</option>
    );
  })

  const getInfo = () => {
    if (utils.isEmpty(infoType) !== true) {
      return (
        <div className={'formSelectInfo ' + infoType} dangerouslySetInnerHTML={{ __html: infoMessage }}></div>
      )
    }
    return '';
  }

  return (
    <div className={'formSelect' + tFormClass + tLabelHiddenClass}>
      {getLabel()}
      <div className={'formSelectBox' + (!utils.isEmpty(tInputValue) ? ' on' : '') + (disabled === 'Y' ? ' disabled' : '')}>
        <div className="formSelectControl">
          <select {...param}>
            {utils.isEmpty(placeholder) ? '' : <option value="">{placeholder}</option>}
            {getOption}
          </select>
        </div>
        {getInfo()}
      </div>
    </div>
  )
}

export default withStyles(styles)(Select);