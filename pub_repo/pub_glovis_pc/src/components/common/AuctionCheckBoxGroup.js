import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '@lib/share/items/CheckBox';
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars';
import { CheckContext } from '@lib/share/items/CheckBoxGroup';

const AuctionCheckBoxGroup = ({ title, id, agree_list, agree_term }) => {
  let checkArray = [];
  for (let i = 0; i < agree_list.length; i++) {
    checkArray.push(agree_list[i].checked)
  }
  let allState = checkArray.every(i => i === true);

  const [isAgreeChecked, setIsAgreeChecked] = useState(checkArray)
  const [allAgreeChecked, setAllAgreeChecked] = useState(allState)

  const value = useMemo(() => ({ isAgreeChecked, allAgreeChecked, setIsAgreeChecked, setAllAgreeChecked, agree_list }), [isAgreeChecked, allAgreeChecked])

  return (
    <div className="terms-agree-wrap">
      <CheckContext.Provider value={value}>
        <CheckBox id={id} title={title} checked={allAgreeChecked} agreeType={true} agreeAll={true} />
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
      </CheckContext.Provider>
    </div>
  )
}

AuctionCheckBoxGroup.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  agree_list: PropTypes.array,
  agree_term: PropTypes.array,
}

export default AuctionCheckBoxGroup;