import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import CheckBox from '@lib/share/items/CheckBox';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';

const CheckColors = ({ isTitle = true, onClose, onClick }) => {
  const [colorOptionMore, setColorOptionMore] = useState(false);
  const [selectColor, setSelectColor] = useState(false);

  const handleColorOption = useCallback(
    (e) => {
      e.preventDefault();
      setColorOptionMore(!colorOptionMore);
    },
    [colorOptionMore]
  );

  const handleClose = useCallback(
    (e) => {
      e.preventDefault();
      onClose && onClose();
    },
    [onClose]
  );

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      onClick && onClick(e, selectColor);
    },
    [onClick, selectColor]
  );

  const handleChange = useCallback((e) => {
    setSelectColor(e.target.name);
  }, []);

  return (
    <>
      {isTitle && <h4>주요색상</h4>}
      <ul className="color-list">
        <li>
          <CheckBox id="chk-white-02" title="흰색" name="흰색" checked={selectColor === '흰색'} isSelf={false} onChange={handleChange} />
        </li>
        <li>
          <CheckBox id="chk-pearl-02" className="chip-pearl chk-black" title="진주색" name="진주색" checked={selectColor === '진주색'} isSelf={false} onChange={handleChange} />
        </li>
        <li>
          <CheckBox id="chk-black-02" className="chip-black chk-white" title="검정색" name="검정색" checked={selectColor === '검정색'} isSelf={false} onChange={handleChange} />
        </li>
        <li>
          <CheckBox
            id="chk-black2-02"
            type="chk-color2"
            className="chip-black2 chk-white"
            title="검정투톤"
            name="검정투톤"
            checked={selectColor === '검정투톤'}
            isSelf={false}
            onChange={handleChange}
          />
        </li>
        <li>
          <CheckBox id="chk-gray-02" className="chip-gray chk-white" title="쥐색" name="쥐색" checked={selectColor === '쥐색'} isSelf={false} onChange={handleChange} />
        </li>
      </ul>
      <div className={colorOptionMore ? 'cate-list-btn active' : 'cate-list-btn'}>
        <button onClick={handleColorOption}>{colorOptionMore ? '색상전체 닫기' : '색상전체 열기'}</button>
      </div>
      <Transition in={colorOptionMore} timeout={300}>
        {(state) => (
          <ul className={`color-list fade fade-${state}`}>
            <li>
              <CheckBox id="chk-silver-2" className="chip-silver chk-black" title="은색" name="은색" checked={selectColor === '은색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-silvergray-2" className="chip-silvergray chk-white" title="은회색" name="은회색" checked={selectColor === '은회색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox
                id="chk-silver2-2"
                className="chip-silver2 chk-white"
                title="은색투톤"
                type="chk-color2"
                name="은색투톤"
                checked={selectColor === '은색투톤'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox
                id="chk-white2-2"
                className="chip-white2 chk-black"
                title="흰색투톤"
                type="chk-color2"
                name="흰색투톤"
                checked={selectColor === '흰색투톤'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox
                id="chk-pearl2-2"
                className="chip-pearl2 chk-black"
                title="진주투톤"
                type="chk-color2"
                name="진주투톤"
                checked={selectColor === '진주투톤'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox id="chk-galactic-2" className="chip-galactic chk-white" title="은하색" name="은하색" checked={selectColor === '은하색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox
                id="chk-lightsilver-2"
                className="chip-lightsilver chk-black"
                title="명은색"
                type="chk-color2"
                name="명은색"
                checked={selectColor === '명은색'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox id="chk-red-2" className="chip-red chk-white" title="빨간색" name="빨간색" checked={selectColor === '빨간색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-orange-2" className="chip-orange chk-white" title="주황색" name="주황색" checked={selectColor === '주황색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-wine-2" className="chip-wine chk-white" title="자주색" name="자주색" checked={selectColor === '자주색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-purple-2" className="chip-purple chk-white" title="보라색" name="보라색" checked={selectColor === '보라색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-pink-2" className="chip-pink chk-black" title="분홍색" type="chk-color2" name="분홍색" checked={selectColor === '분홍색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-yellow-2" className="chip-yellow chk-black" title="노란색" name="노란색" checked={selectColor === '노란색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-reed-2" className="chip-reed chk-white" title="갈대색" name="갈대색" checked={selectColor === '갈대색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-lightgold-2" className="chip-lightgold chk-white" title="연금색" name="연금색" checked={selectColor === '연금색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-brown-2" className="chip-brown chk-white" title="갈색" name="갈색" checked={selectColor === '갈색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox
                id="chk-brown2-2"
                className="chip-brown2 chk-white"
                title="갈색투톤"
                type="chk-color2"
                name="갈색투톤"
                checked={selectColor === '갈색투톤'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox id="chk-gold-2" className="chip-gold chk-white" title="금색" type="chk-color2" name="금색" checked={selectColor === '금색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox
                id="chk-gold2-2"
                className="chip-gold2 chk-white"
                title="금색투톤"
                type="chk-color2"
                name="금색투톤"
                checked={selectColor === '금색투톤'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox id="chk-blue-2" className="chip-blue chk-white" title="청색" name="청색" checked={selectColor === '청색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-sky-2" className="chip-sky chk-white" title="하늘색" name="하늘색" checked={selectColor === '하늘색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-palegreen-2" className="chip-palegreen chk-white" title="담녹색" name="담녹색" checked={selectColor === '담녹색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-green-2" className="chip-green chk-white" title="녹색" name="녹색" checked={selectColor === '녹색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox
                id="chk-lightgreen-2"
                className="chip-lightgreen chk-white"
                title="연두색"
                type="chk-color2"
                name="연두색"
                checked={selectColor === '연두색'}
                isSelf={false}
                onChange={handleChange}
              />
            </li>
            <li>
              <CheckBox id="chk-bluegreen-2" className="chip-bluegreen chk-white" title="청옥색" name="청옥색" checked={selectColor === '청옥색'} isSelf={false} onChange={handleChange} />
            </li>
            <li>
              <CheckBox id="chk-other-2" title="기타" name="기타" checked={selectColor === '기타'} isSelf={false} onChange={handleChange} />
            </li>
          </ul>
        )}
      </Transition>
      <Buttons align="center" marginTop={40}>
        <Button size="big" marginRight={10} background="gray" title="취소" width={180} onClick={handleClose} />
        <Button size="big" background="blue80" title="검색" width={180} onClick={handleClick} />
      </Buttons>
    </>
  );
};

CheckColors.propTypes = {
  isTitle: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};

export default CheckColors;
