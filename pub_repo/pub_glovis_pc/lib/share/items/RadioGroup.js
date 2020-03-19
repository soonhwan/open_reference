import { memo, useState, useCallback } from 'react'
import classNames from "classnames/bind"
import Radio from "./Radio"
import PropTypes from 'prop-types'

const RadioGroup = memo(({dataList, defaultValue=1, className, size="large", children, boxType=false, mode="horizon", onChange}) => {
  
  const [isValue, setIsValue] = useState(dataList.length !== 1 ? defaultValue : 0)
  const handleRadioChange = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsValue(Number(e.target.value))
    if (onChange) onChange(e);
  }, []);
  const handleRadioClick = useCallback((mode, onClick) => (e) => {
    e.stopPropagation();
    setIsValue(Number(e.currentTarget.dataset.id))
    if (mode === 'onClick') onClick(e);
    if (onChange) onChange(e);
  }, []);
  
  const createRadioList = (arg) => {
    let arr = []
    if (arg === undefined) {
      dataList.map((v, i) => {
        if (mode === 'horizon') {
          arr.push(<Radio key={v.id} id={v.id} title={v.title} checked={isValue} value={v.value} disabled={v.disabled} size={size} onChange={handleRadioChange} />)
        } else {
          arr.push(<li key={v.id}><Radio id={v.id} title={v.title} checked={isValue} value={v.value} disabled={v.disabled} size={size} onChange={handleRadioChange} /></li>)
        }
      })
    } else {
      dataList.map((v, i) => {
        if (mode === 'horizon') {
          arr.push(<Radio key={v.id} id={v.id} title={v.title} checked={isValue} value={v.value} disabled={v.disabled} size={size} children={arg[i]} onChange={handleRadioChange} onClick={arg[i].props.onClick === undefined ? handleRadioClick() : handleRadioClick('onClick', arg[i].props.onClick)} />)
        } else {
          arr.push(<li key={v.id}><Radio id={v.id} title={v.title} checked={isValue} value={v.value} disabled={v.disabled} size={size} children={arg[i]} onChange={handleRadioChange} onClick={handleRadioClick()} /></li>)
        }
      })
    }
    return arr
  }

  if (boxType === false) {
    return (
      <div className={className !== undefined ? `radio-group ${className}` : `radio-group`}>
        {
          mode === "vertical" ? <ul className="vertical">{createRadioList(children)}</ul> : createRadioList()
        }
      </div>
    )
  } else {
    return (
      <div className={className !== undefined ? `radio-chk-wrap list${children.length} ${className}` : `radio-chk-wrap list${children.length}`}>
        {createRadioList(children)}
      </div>
    )
  }
});

RadioGroup.propTypes = {
  dataList: PropTypes.array,
  defaultValue: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  boxType: PropTypes.bool,
  mode: PropTypes.string,
}

export default RadioGroup