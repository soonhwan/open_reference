import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@lib/share/items/RadioGroup';
import RadioItem from '@lib/share/items/RadioItem';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckColors from '@src/components/common/CheckColors';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars';
import PricingCarInfoitem from './pricingCarInfoItem';

const PricingCarInfo = ({ dataContext, withoutGrade, onValueChange, onOpenGradePopup }) => {
  const [colorPopupShow, setColorPopupShow, openColorPopup, closeColorPopup] = useRodal(false, true);
  const [gradePopupShow, setGradePopupShow, openGradePopup, closeGradePopup] = useRodal(false, true);

  const [carInfo, setCarInfo] = useState(dataContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setCarInfo({ ...dataContext });
  }, [dataContext]);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      if (onValueChange) {
        onValueChange(e, carInfo);
      }
      setIsEditing(false);
    },
    [carInfo, onValueChange]
  );

  const handleValueChange = useCallback(
    (e, deps) => {
      if (isEditing === false) {
        setIsEditing(true);
      }
      setCarInfo(Object.assign({ ...carInfo }, { [deps.name]: deps.value }));
    },
    [carInfo, isEditing]
  );

  const handleColorChange = useCallback(
    (e, deps) => {
      setCarInfo(Object.assign({ ...carInfo }, { clr: deps }));

      handleClickColor(e);
    },
    [carInfo, handleClickColor]
  );

  const handleOpenCarInfoPopUp = useCallback(
    (e) => {
      e.preventDefault();
      setColorPopupShow(true);
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
    },
    [setColorPopupShow]
  );

  const handleClickColor = useCallback(() => {
    setColorPopupShow(false);
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  }, [setColorPopupShow]);

  return (
    <React.Fragment>
      <form className="register-form mt23">
        <fieldset>
          <legend className="away">차량 정보 조회</legend>
          <table summary="차량 기본 정보에 대한 내용" className="table-tp1 input">
            <caption className="away">차량 기본 정보</caption>
            <colgroup>
              <col width="17%" />
              <col width="33%" />
              <col width="17%" />
              <col width="33%" />
            </colgroup>
            <tbody>
              <tr>
                <th>차량번호</th>
                <td>
                  <PricingCarInfoitem name="crNo" value={carInfo.crNo} onValueChange={handleValueChange} />
                </td>
                <th>차량연식</th>
                <td>
                  <PricingCarInfoitem name="noy" value={carInfo.noy} onValueChange={handleValueChange} />
                </td>
              </tr>
              <tr>
                <th>배기량</th>
                <td>
                  <PricingCarInfoitem name="dspl" value={carInfo.dspl} onValueChange={handleValueChange} />
                </td>
                <th>신차출고가</th>
                <td>
                  <PricingCarInfoitem name="rlsPrc" value={carInfo.rlsPrc} isEditingState={isEditing} isEdit={true} onValueChange={handleValueChange} />
                </td>
              </tr>
              <tr>
                <th>연료</th>
                <td>
                  <PricingCarInfoitem name="fuel" value={carInfo.fuel} onValueChange={handleValueChange} />
                </td>
                <th>최초등록일</th>
                <td>
                  <PricingCarInfoitem name="frstRegDt" value={carInfo.frstRegDt} isEditingState={isEditing} isEdit={true} type={'date'} onValueChange={handleValueChange} />
                </td>
              </tr>
              <tr>
                <th>주행거리</th>
                <td>
                  <PricingCarInfoitem name="drvDist" value={carInfo.drvDist} isEditingState={isEditing} isEdit={true} onValueChange={handleValueChange} />
                </td>
                <th>색상</th>
                <td>
                  <PricingCarInfoitem name="clr" value={carInfo.clr} onOpenPopUp={handleOpenCarInfoPopUp} onValueChange={handleValueChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
      {withoutGrade === true && ( // 상세등급 정보가 노출이 안되는 경우
        <div className="grade">
          <p>해당 등급을 선택하세요</p>
          <RadioGroup
            dataList={[
              { id: 'grade1', value: 1, checked: true, disabled: false, title: '스마트' },
              { id: 'grade2', value: 2, checked: false, disabled: false, title: '모던' },
              { id: 'grade3', value: 3, checked: false, disabled: false, title: '프리미엄' },
              { id: 'grade4', value: 4, checked: false, disabled: false, title: '모던 스페셜' },
              { id: 'grade5', value: 5, checked: false, disabled: false, title: '프리미엄 스페셜' }
            ]}
            mode="vertical"
          >
            <RadioItem key={'radio1'}>
              <Button size="mld" line="gray" radius={true} title="상세 사양보기" width={99} height={28} onClick={onOpenGradePopup} />
            </RadioItem>
            <RadioItem key={'radio2'}>
              <Button size="mld" line="gray" radius={true} title="상세 사양보기" width={99} height={28} onClick={onOpenGradePopup} />
            </RadioItem>
            <RadioItem key={'radio3'}>
              <Button size="mld" line="gray" radius={true} title="상세 사양보기" width={99} height={28} onClick={onOpenGradePopup} />
            </RadioItem>
            <RadioItem key={'radio4'}>
              <Button size="mld" line="gray" radius={true} title="상세 사양보기" width={99} height={28} onClick={onOpenGradePopup} />
            </RadioItem>
            <RadioItem key={'radio5'}>
              <Button size="mld" line="gray" radius={true} title="상세 사양보기" width={99} height={28} onClick={onOpenGradePopup} />
            </RadioItem>
          </RadioGroup>
        </div>
      )}
      <Buttons align="center" marginTop={40} marginBottom={20}>
        <Button size="big" background="blue80" title="확인" width={180} height={60} onClick={handleClick} />
      </Buttons>

      <RodalPopup show={colorPopupShow} type={'fade'} closedHandler={closeColorPopup} title="주요색상" mode="normal" width={894}>
        <div className="con-wrap">
          <CheckColors isTitle={false} onClick={handleColorChange} onClose={handleClickColor} />
        </div>
      </RodalPopup>

      <RodalPopup show={gradePopupShow} type={'fade'} closedHandler={closeGradePopup} title="상세 사양보기" mode="normal" size="small">
        <div className="con-wrap popup-grade">
          <p className="fl">스마트</p>
          <p className="fr">
            <span>23,000,000</span>원
          </p>
          <ColoredScrollbars autoHeightMax={253}>
            <ul className="contents">
              <li>&#183; 후륜구동</li>
              <li>&#183; 3.7리터 7단 자동변속기</li>
              <li>&#183; 헤드램프 워서</li>
              <li>&#183; 스크래치 쉴드 페인트</li>
              <li>&#183; 상세 사양</li>
              <li>&#183; 상세 사양</li>
              <li>&#183; 상세 사양</li>
            </ul>
          </ColoredScrollbars>
          <Buttons align="center" marginTop={40}>
            <Button size="big" background="blue80" title="확인" width={180} height={60} />
          </Buttons>
        </div>
      </RodalPopup>
    </React.Fragment>
  );
};

PricingCarInfo.propTypes = {
  dataContext: PropTypes.object,
  withoutGrade: PropTypes.bool,
  onOpenGradePopup: PropTypes.func,
  onValueChange: PropTypes.func
};

export default PricingCarInfo;
