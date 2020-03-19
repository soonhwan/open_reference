import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBox from '@lib/share/items/CheckBox';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_SELL } from '@src/actions/types';
import { select1_list } from '@src/dummy'

const VisitApply = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [term3, setTerm3] = useState(false);
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  const [rodalShow3, setRodalShow3, rodalPopupHandler3, modalCloseHandler3] = useRodal(false, true);
  const [rodalShow4, setRodalShow4, rodalPopupHandler4, modalCloseHandler4] = useRodal(false, true);

  const handleChangeTerm1 = useCallback((e) => {
    setTerm1(prevTerm => !prevTerm);
    if (term1 === false) {
      rodalPopupHandler1(e, "fade");
    }
  }, [term1]);
  const handleChangeTerm2 = useCallback((e) => {
    setTerm2(prevTerm => !prevTerm);
    if (term2 === false) {
      rodalPopupHandler2(e, "fade");
    }
  }, [term2]);
  const handleChangeTerm3 = useCallback((e) => {
    setTerm3(prevTerm => !prevTerm);
    if (term3 === false) {
      rodalPopupHandler3(e, "fade");
    }
  }, [term3]);

  return (
    <AppLayout>
      <div className="content-wrap visit-apply-wrap">
        <div className="visit-img-sec">
          <i class="ico-sell-01"></i>
        </div>
        <div className="visit-apply-sec">
          <div className="apply-tit">
            <h3>방문평가판매</h3>
            <p>클릭 한 번이면 끝! 견적부터 판매까지 내 집 앞에서 편하게!</p>
          </div>
          <form className="apply-form">
            <fieldset>
              <legend className="away">방문 신청</legend>
              <h4>방문 신청</h4>
              <ul className="register-tp1">
                <li>
                  <label htmlFor="userName">이름</label>
                  <Input type="text" placeHolder="" id="userName" />
                  <p className="tx-exp-tp4">이름을 입력해주세요</p>
                </li>
                <li>
                  <label htmlFor="user-phone">휴대 전화 번호</label>
                  <span className="bridge">
                    <SelectBox id="user-phone" className="items-sbox" options={select1_list} width={157} height={48} />
                  </span>
                  <Input type="text" placeHolder="" id="user-phone2" width={333} />
                </li>
                <li>
                  <label htmlFor="address">거주 지역 <span className="select-option">(선택항목)</span></label>
                  <span className="bridge">
                    <SelectBox id="address" className="items-sbox" placeHolder="시/도 선택" options={select1_list} width={245} height={48} />
                  </span>
                  <SelectBox id="address2" className="items-sbox" placeHolder="시군구 선택" options={select1_list} width={245} height={48} />
                </li>
              </ul>
              <div className="register-agree mt40">
                <CheckBox id='chk-collect' title='개인정보 수집 및 이용에 대한 동의' sub='(필수)' isSelf={false} checked={term1} onChange={handleChangeTerm1} />
                <CheckBox id='chk-provide' title='제 3자 정보 제공 동의' sub='(필수)' isSelf={false} checked={term2} onChange={handleChangeTerm2} />
                <CheckBox id='chk-marketing' title='마케팅 활동 동의' sub='(선택)' isSelf={false} checked={term3} onChange={handleChangeTerm3} />
              </div>
            </fieldset>
          </form>
          <Buttons align="center" marginTop={30}>
            <Button size="big" background="blue80" title="신청하기" width={245} height={60} onClick={(e) => rodalPopupHandler4(e, "fade")} />
          </Buttons>
        </div>
      </div>
      <RodalPopup show={rodalShow1} type={'fade'} closedHandler={modalCloseHandler1} title="개인정보 수집 및 이용에 대한 동의(필수)" mode="normal" size="medium">
        <div className="con-wrap">

        </div>
      </RodalPopup>
      <RodalPopup show={rodalShow2} type={'fade'} closedHandler={modalCloseHandler2} title="제 3자 정보 제공 동의(필수)" mode="normal" size="medium">
        <div className="con-wrap">

        </div>
      </RodalPopup>
      <RodalPopup show={rodalShow3} type={'fade'} closedHandler={modalCloseHandler3} title="마케팅 활동 동의(선택)" mode="normal" size="medium">
        <div className="con-wrap">

        </div>
      </RodalPopup>
      <RodalPopup show={rodalShow4} type={'fade'} closedHandler={modalCloseHandler4} mode="normal" size="xs">
        <div className='con-wrap'>
          <p className="mb33">입력하신 내용으로 방문평가 판매를 신청하시겠습니까?</p>
          <table summary="방문평가 신청에 대한 내용" className="table-tp1">
            <caption className="away">방문평가</caption>
            <colgroup>
              <col width="40%" />
              <col width="60%" />
            </colgroup>
            <tbody>
              <tr>
                <th>이름</th>
                <td>김현대</td>
              </tr>
              <tr>
                <th>휴대전화번호</th>
                <td>010-2873-7263</td>
              </tr>
              <tr>
                <th>거주지역</th>
                <td>서울시 강남구</td>
              </tr>
            </tbody>
          </table>
          <Buttons align="center" marginTop={40}>
            <Button size="big" background="gray" title="취소" width={109} />
            <Button size="big" background="blue80" title="확인" width={109} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default VisitApply