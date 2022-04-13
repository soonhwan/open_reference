import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { SelectWrap } from './SelectStyles';
import { IconSelArrow } from 'styles/svg'
import utils from 'utils';

const CHANGE_SELECT = "change_Select";

interface IProps {
  id: string;
  name: string;
  mode: string;
  label: string,
  disabled: boolean;
  readOnly: boolean;
  selectedValue: string;
  className: string;
  style: any;
  data?: any;
  onFocus: any;
  onBlur: any;
  onChange: any;
  onEvent: any;
}

const Select: FC<IProps> = ({ id, name, mode, label, disabled, readOnly, data, selectedValue, style, className, onFocus, onBlur, onChange, onEvent }) => {
  const [inputValue, setInputValue] = useState(selectedValue);

  useEffect(() => {
    setInputValue(selectedValue)
  }, [selectedValue])

  const _className = useMemo(() => {
    return utils.setClassNameBind([
      'select-base', 
      disabled ? 'disabled' : '',
      readOnly ? 'readOnly' : '',
      mode ? mode : '',
      className ? className : '',
    ])
  }, [className, disabled, mode, readOnly])

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
            selected={v.value === inputValue}
          >{v.text}</option>
        </>
      )
    })
  }, [data, inputValue])

  // ITEM RENDERER : getLabel  
  const getLabel = useCallback(() => {
    return (
      <label className="label">
        <span className="txt">{label || data.find((v: any) => v['value'] === inputValue).text}</span>
        <span className="arrow">{mode === 'sorting' && <IconSelArrow />}</span>
      </label>
    )
  }, [data, inputValue, label, mode])

  return (
    <SelectWrap className={_className} mode={mode} style={style}>
      <select {...param}>
        {getOption()}
      </select>
      {getLabel()}
    </SelectWrap>
  );
}

export default memo(Select);