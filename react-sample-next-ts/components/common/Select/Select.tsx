import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { SelectWrap } from './SelectStyles';
import utils from 'utils';

const CHANGE_SELECT = "change_Select";

interface IProps {
  id: string;
  name: string;
  label: string,
  disabled: boolean;
  readOnly: boolean;
  selectedValue: string;
  className: string;
  data?: any;
  onFocus: any;
  onBlur: any;
  onChange: any;
  onEvent: any;
}

const Select: FC<IProps> = ({ id, name, label, disabled, readOnly, data, selectedValue, className, onFocus, onBlur, onChange, onEvent }) => {
  const [inputValue, setInputValue] = useState(selectedValue);

  useEffect(() => {
    setInputValue(selectedValue)
  }, [selectedValue])

  const _className = useMemo(() => {
    return utils.setClassNameBind([
      'select-base', 
      disabled ? 'disabled' : '',
      readOnly ? 'readOnly' : '',
      className ? className : '',
    ])
  }, [className, disabled, readOnly])

  const param = {
    id: id || undefined,
    disabled: disabled,
    readOnly: readOnly,
    value: inputValue,
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
    onChange: (e: any) => {
      setInputValue(e.target.value);
      if (typeof onChange === 'function') {
        onChange(e.target.value);
      }
      if (typeof onEvent === 'function') {
        onEvent(CHANGE_SELECT, { value: e.target.value, id: param.id }, e);
      }
    }
  }

  // ITEM RENDERER : getOption  
  const getOption = useCallback(() => {
    return data?.map((v: any, i: number) => {      
      return (
        <>
          <option 
            key={i} 
            value={v.value} 
            //{v.value === inputValue ? 'selected' : ''}
          >{v.text}</option>
        </>
      )
    })
  }, [data])

  // ITEM RENDERER : getLabel  
  const getLabel = useCallback(() => {
    return <label className="label">{label}</label>
  }, [label])

  return (
    <SelectWrap className={_className}>
      <select {...param}>
        {getOption()}
      </select>
      {getLabel()}
    </SelectWrap>
  );
}

export default memo(Select);