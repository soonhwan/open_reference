import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '@lib/share/items/CheckBox';
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars';
import { CheckContext } from '@lib/share/items/CheckBoxGroup';

const SignUpCheckBoxGroup = ({ title, id, sub_title, sub_id, agree_list, agree_term }) => {
  let checkArray = [];
  let isEssentialChecked = [];
  for (let i = 0; i < agree_list.length; i++) {
    checkArray.push(agree_list[i].checked);
    isEssentialChecked.push(agree_list[i].essential);
  }
  let allState = checkArray.every(i => i === true);

  const [isAgreeChecked, setIsAgreeChecked] = useState(checkArray);
  const [allAgreeChecked, setAllAgreeChecked] = useState(allState);
  const [essentialChecked, setEssentialChecked] = useState(JSON.stringify(checkArray) === JSON.stringify(isEssentialChecked) || allState);

  const value = useMemo(() => ({ 
    isAgreeChecked, allAgreeChecked,
    setIsAgreeChecked, setAllAgreeChecked,
    essentialChecked, setEssentialChecked,
    agree_list
  }), [isAgreeChecked, allAgreeChecked, essentialChecked])

  return (
    <div className="terms-agree-wrap">
      <CheckContext.Provider value={value}>
        <ul className="terms-content-list">
          {agree_list.map((v, i) => {
            return (
              <li key={i}>
                <CheckBox id={v.id} title={v.title} checked={isAgreeChecked[i]} agreeType={true} />
                <div className="terms-box">
                  <ColoredScrollbars autoHeightMax={160}>
                    <div className="frminbox">{agree_term[i]}</div>
                  </ColoredScrollbars>
                </div>
              </li>
              )
          })}
        </ul>
        <div className="terms-agree-all">
          <CheckBox id={sub_id} title={sub_title} checked={essentialChecked} agreeType={true} agreeEssential={true} />
          <CheckBox id={id} title={title} checked={allAgreeChecked} agreeType={true} agreeAll={true} />
        </div>
      </CheckContext.Provider>
    </div>
  )
}

SignUpCheckBoxGroup.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  sub_title: PropTypes.string,
  sub_id: PropTypes.string,
  agree_list: PropTypes.array,
  agree_term: PropTypes.array,
}

export default SignUpCheckBoxGroup;