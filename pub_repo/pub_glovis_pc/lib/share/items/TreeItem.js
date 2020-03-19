import { useState, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { numberFormat } from '@src/utils/CommonUtil';
import SlideAnimate from "./SlideAnimate";

const TreeItem = ({data, children, type='default', onClick}) => {
  const {label, description, count, defaultChecked} = data;
  const [isChecked, setIsChecked] = useState(defaultChecked === true ? true : false);
  const inputEl = useRef(null);

  let tc = ''
  if(type === 'default'){
    tc += 'chk-box chk-basic'
  }  

  const span_style = classNames(
    tc,
    { "on": isChecked }
  )

  const inputTrigger = useCallback(() => {
    inputEl.current.click();
  }, []);

  const handleChange = useCallback((e) => {
    setIsChecked(!isChecked);
    console.log(data)
    if (onClick) onClick(e, data);
  }, [isChecked]);

  const makeDescription = useCallback((value) => { 
    let str = ""
    if(value !== "" && value !== undefined) {
      str = " (" + value + ")"
    }
    return str
  }, [])

  return (
    <li>
      <div className="desc" onClick={inputTrigger}>
        <span className={span_style}>
          { type === 'chk-color2' && <><i className="bg-l"></i><i className="bg-r"></i></> }
          <input type="checkbox" checked={isChecked} onChange={handleChange} ref={inputEl} />
          <label>{label}</label>
          <em>{makeDescription(description)}</em>
        </span>
        <span className="count">{numberFormat(count)}</span>
      </div>
      {
        children.length !== 0 &&
        <SlideAnimate toggle={isChecked}>
          <ul className="tree">{children}</ul>
        </SlideAnimate>
      }
    </li>
  )
}

TreeItem.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node
}

export default TreeItem