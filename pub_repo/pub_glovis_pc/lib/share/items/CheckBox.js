import { useState, useContext } from 'react'
import classNames from "classnames/bind"
import PropTypes from 'prop-types'
import { CheckContext } from './CheckBoxGroup'

const CheckBox = ({id, className, title, sub, checked=false, disabled=false, onChange, type='default', size="large", isSelf=true, agreeType=false, agreeAll=false, agreeEssential=false, name}) => {
  let tc = '';
  if (type === 'default') {
    tc += 'chk-box chk-basic';
  } else if (type === 'chk-color2') {
    tc += 'chk-box chk-color2';
  }
  if(className !== undefined) tc += ' ' + className;
  
  if (agreeType === false) {
    // 일반 체크
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (e) => {
      if(isSelf === true) setIsChecked(!isChecked);
      if(onChange) onChange(e);
    };

    const span_style = classNames(
      tc,
      { "on": isSelf === true ? isChecked : checked },
      { "disabled": disabled },
      { "sml": size === "small" },
      { "noborder": size === "noborder" }
    )

    return (
      <span className={span_style}>
        { type === 'chk-color2' && <><i className="bg-l"></i><i className="bg-r"></i></> }
        <input type="checkbox" id={id} checked={isSelf === true ? isChecked : checked} disabled={disabled} onChange={handleChange} name={name} />
        <label htmlFor={id}>{title} <em>{sub}</em></label>
      </span>
    )
  } else {
    // 모두 체크
    const {
      isAgreeChecked, allAgreeChecked, 
      setIsAgreeChecked, setAllAgreeChecked, 
      essentialChecked, setEssentialChecked, 
      agree_list
    } = useContext(CheckContext);

    let isEssentialChecked = [];
    for (let i = 0; i < agree_list.length; i++) {
      isEssentialChecked.push(agree_list[i].essential);
    }

    const handleChangeAgree = (e) => {
      let checkArray = [];      
      if (agreeAll) { // 약관 전체 동의 클릭 시
        agree_list.map(v => checkArray.push(allAgreeChecked === false ? true : false));
      } else { // 그 밖의 체크박스 클릭 시
        if (agreeEssential) { // 필수 약관 동의 클릭 시
          if (essentialChecked === false) checkArray = [...isEssentialChecked];
        } else {
          let checkIndex = agree_list.findIndex(agree => agree.id === e.target.id)
          checkArray = [...isAgreeChecked]
          checkArray[checkIndex] = !checkArray[checkIndex];
        }
      }
      let checkAll = checkArray.every(i => i === true);
      setIsAgreeChecked(checkArray);
      setAllAgreeChecked(checkAll);
      setEssentialChecked(
        JSON.stringify(checkArray) === JSON.stringify(isEssentialChecked) || checkAll
      );
      if (onChange) {
        if (!checked) onChange(e);
      }
    };

    const span_style = classNames(
      tc,
      { "on": checked },
      { "disabled": disabled },
      { "sml": size === "small" },
      { "noborder": size === "noborder" }
    )

    return (
      <span className={span_style}>
        { type === 'chk-color2' && <><i className="bg-l"></i><i className="bg-r"></i></> }
        <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={handleChangeAgree} />
        <label htmlFor={id}>{title}</label>
      </span>
    )
  }
}

CheckBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  sub: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  isSelf: PropTypes.bool,
  agreeType: PropTypes.bool,
  agreeAll: PropTypes.bool,
  agreeEssential: PropTypes.bool,
}

export default React.memo(CheckBox)