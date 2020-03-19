import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBox from '@lib/share/items/CheckBox';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Steps from '@lib/share/items/Steps';
import useToggle from '@lib/share/custom/useToggle';
import AppLayout from '@src/components/layouts/AppLayout';
import CarOptions from '@src/components/common/CarOptions';
import CarAddOption from '@src/components/common/CarAddOption';

import { SECTION_SELL } from '@src/actions/types';
import { select1_list } from '@src/dummy';

const FreeStep02_01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  const now = moment()
  // 옵션 더보기
  const [carOptionMore, setCarOptionMore] = useState(false)

  // 차량 기본 정보
  const [toggle1, onToggle1] = useToggle(false)
  const [toggle2, onToggle2] = useToggle(false)
  const [toggle3, onToggle3] = useToggle(false)
  const [toggle4, onToggle4] = useToggle(false)
  const [toggle5, onToggle5] = useToggle(false)
  const [toggle6, onToggle6] = useToggle(false)
  const [toggle7, onToggle7] = useToggle(false)
  const [toggle8, onToggle8] = useToggle(false)
  const [toggle9, onToggle9] = useToggle(false)

  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [term3, setTerm3] = useState(false);
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  const [rodalShow3, setRodalShow3, rodalPopupHandler3, modalCloseHandler3] = useRodal(false, true);
  const [rodalShow4, setRodalShow4, rodalPopupHandler4, modalCloseHandler4] = useRodal(false, true);

  // 알러트 팝업
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, false);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, false);
  const [alertPop2_1, setAlertPop2_1, openAlertPop2_1, closeAlertPop2_1] = useRodal(false, false);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, false);
  const [alertPop4, setAlertPop4, openAlertPop4, closeAlertPop4] = useRodal(false, true);

  const handleCarOption = (e) => {
    e.preventDefault()
    setCarOptionMore(!carOptionMore)
  }

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
  const closeAlertPopup4 = useCallback((e) => {
    e.preventDefault();
    setAlertPop4(false);
  }, []);

  const textareaChange = (e) => console.log('textareaChange: ', e);
  const textareaBlur = (e) => console.log('textareaBlur: ', e);
  const textareaFocus = (e) => console.log('textareaFocus: ', e);

  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>무평가 판매 Step2</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
          <Steps
            type={2}
            contents={['차량 정보 조회', '차량 정보 입력', '신청 완료']}
            active={2}
            mode="hasLink"
            links={['/1', '/2', '/3']}
            onClickArr={[openAlertPop1, openAlertPop2, openAlertPop3]}
          />
        </div>
      </div>
      <div className="content-wrap sell-register-wrap">
        <form className="register-form">
          <fieldset>
            <legend className="away">차량 정보 조회</legend>
            <table summary="차량 기본 정보에 대한 내용" className="table-tp1 input mt0">
              <caption>차량 기본 정보</caption>
              <colgroup>
                <col width="13%" />
                <col width="27%" />
                <col width="13%" />
                <col width="47%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>차량 번호</th>
                  <td>
                    01가1234
                  </td>
                  <th>차량명</th>
                  <td>
                    <span className="car-name">
                      기아 K3 쿱 1.6 터보 GDI 프레스티지
                        <span>K3 2DR 1.6T / GDI 프레스티지 M/T</span>
                      <i className="ico-pencil" onClick={(e) => rodalPopupHandler4(e, "fade")}></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>최초 등록일</th>
                  <td>
                    {
                      toggle2 === false
                        ? <span>
                          2017-05-07
                          <i className="ico-pencil" onClick={onToggle2}></i>
                        </span>
                        : <DatePicker defaultValue={now} inputWidth={160} inputHeight={40} />
                    }
                  </td>
                  <th>형식 년도</th>
                  <td>
                    {
                      toggle3 === false
                        ? <span>
                          2018
                          <i className="ico-pencil" onClick={onToggle3}></i>
                        </span>
                        : <SelectBox id="form-date" className="items-sbox" options={select1_list} width={160} height={40} />
                    }
                  </td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>
                    {
                      toggle4 === false
                        ? <span>
                          검정
                        <i className="ico-pencil" onClick={onToggle4}></i>
                        </span>
                        : <SelectBox id="car-color" className="items-sbox" options={select1_list} width={160} height={40} />
                    }
                  </td>
                  <th>연료</th>
                  <td>
                    {
                      toggle5 === false
                        ? <span>
                          가솔린
                        <i className="ico-pencil" onClick={onToggle5}></i>
                        </span>
                        : <SelectBox id="car-fuel" className="items-sbox" options={select1_list} width={160} height={40} />
                    }
                  </td>
                </tr>
                <tr>
                  <th>배기량</th>
                  <td>
                    {
                      toggle6 === false
                        ? <span>
                          1,591cc
                          <i className="ico-pencil" onClick={onToggle6}></i>
                        </span>
                        : <>
                          <label htmlFor="engine-cc" className="hide">배기량</label>
                          <Input type="text" placeHolder="" id="engine-cc" width={160} height={40} />
                          <em>cc</em>
                        </>
                    }
                  </td>
                  <th>차종</th>
                  <td>
                    {
                      toggle7 === false
                        ? <span>
                          준중형차
                          <i className="ico-pencil" onClick={onToggle7}></i>
                        </span>
                        : <SelectBox id="car-type" className="items-sbox" options={select1_list} width={160} height={40} />
                    }
                  </td>
                </tr>
                <tr>
                  <th>용도</th>
                  <td>
                    {
                      toggle8 === false
                        ? <span>
                          일반
                          <i className="ico-pencil" onClick={onToggle8}></i>
                        </span>
                        : <SelectBox id="car-use" className="items-sbox" options={select1_list} width={160} height={40} />
                    }
                  </td>
                  <th>출고 가격</th>
                  <td>
                    {
                      toggle9 === false
                        ? <span>
                          20,700,000원
                          <i className="ico-pencil" onClick={onToggle9}></i>
                        </span>
                        : <>
                          <label htmlFor="fac-price" className="hide">출고가격</label>
                          <Input type="text" placeHolder="" id="fac-price" width={160} height={40} />
                          <em>원</em>
                        </>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
            <CarOptions title="차량 옵션" more="false" type={2} mode="check" />

            <CarAddOption />

            <ul className="float-wrap mt64">
              <li><h4 className="mb33">추가 상세 정보</h4></li>
              <li><p>실제 차량 정보를 정확하게 입력해주세요. 실제 차량 정보와 상이할 경우 추후 견적이 달라질 수 있습니다.</p></li>
            </ul>
            <table summary="추가 상세 정보에 대한 내용" className="table-tp1 input mt0">
              <caption className="away">추가 상세 정보</caption>
              <colgroup>
                <col width="16%" />
                <col width="84%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>주행 거리(현재기준)</th>
                  <td>
                    <label htmlFor="mileage" className="hide">주행거리</label>
                    <Input type="text" placeHolder="주행거리를 입력해주세요." id="mileage" width={160} height={40} />
                    <em>km</em>
                  </td>
                </tr>
                <tr>
                  <th>차량 설명<em>(선택)</em></th>
                  <td className="pd8-12">
                    <Textarea countLimit={1000} type="tp1" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} placeHolder="차량에 관한 기타 설명 및 사고 정보를 입력해주세요." />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="img-upload main">
              <h4 className="mb33">대표 사진 등록</h4>
              <div className="app-down">
                <i className="ico-app-blue"></i>
                <Button size="sml" line="blue80" color="blue60" title="모바일로 편리하게! 오토벨앱 다운로드" href="#" />
              </div>
              <ul>
                <li className="on">
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 전면</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 후면</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 좌측</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 우측</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>계기판</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="img-upload detail">
              <h4 className="mb33">상세 사진 등록</h4>
              <p>옵션, 하자 부분이 잘 나오게 등록하시면 더 정확한 견적을 받으실 수 있습니다.</p>
              <ul>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>휠&amp;타이어</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>엔진룸</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>내부(앞) 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>센터페시아 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>룸미러 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 상단</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>트렁크</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>기어 박스</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>후방 카메라</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>스크래치</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
              </ul>
            </div>
            <table summary="판매자 정보에 대한 내용" className="table-tp1 input">
              <caption>판매자 정보</caption>
              <colgroup>
                <col width="16%" />
                <col width="84%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <label htmlFor="userName" className="hide">이름</label>
                    <Input type="text" placeHolder="" id="userName" width={160} height={40} />
                  </td>
                </tr>
                <tr>
                  <th>휴대 전화 번호</th>
                  <td>
                    <label htmlFor="user-phone" className="hide">휴대 전화 번호</label>
                    <span className="bridge"><SelectBox id="user-phone" className="items-sbox" options={select1_list} width={105} height={40} /></span>
                    <span className="bridge"><Input type="text" placeHolder="" id="user-phone2" width={105} height={40} /></span>
                    <span className="mr20"><Input type="text" placeHolder="" id="user-phone3" width={105} height={40} /></span>
                    <Button color="blue80" title="휴대전화번호 변경" iconType='next-blue' />
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td className="pd8-12">
                    <label htmlFor="postcode" className="hide">주소</label>
                    <span className="bridge bridge2"><Input type="text" placeHolder="" id="postcode" width={145} height={40} /></span>
                    <Button size="sml" background="blue80" radius={true} title="우편번호" width={80} height={29} /><br />
                    <label htmlFor="address" className="hide">주소</label>
                    <span className="bridge"><Input type="text" placeHolder="" id="address" width={270} height={40} /></span>
                    <Input type="text" placeHolder="" id="address2" width={270} height={40} />
                  </td>
                </tr>
                <tr>
                  <th>계좌 번호</th>
                  <td>
                    <label htmlFor="account-num" className="hide">계좌 번호</label>
                    <span className="bridge"><SelectBox id="bank-name" className="items-sbox" options={select1_list} width={145} height={40} /></span>
                    <span className="bridge"><Input type="text" placeHolder="계좌번호(' - ‘없이 숫자만 입력)" id="account-num" width={245} height={40} /></span>
                    <span className="bridge"><Input type="text" placeHolder="예금주" id="account-holder" width={100} height={40} /></span>
                    <Button size="sml" background="blue80" radius={true} title="계좌인증" width={80} height={29} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="register-agree">
              <CheckBox id='chk-collect' title='개인정보 수집 및 이용에 대한 동의' isSelf={false} checked={term1} onChange={handleChangeTerm1} />
              <CheckBox id='chk-provide' title='제 3자 정보 제공 동의' isSelf={false} checked={term2} onChange={handleChangeTerm2} />
              <CheckBox id='chk-marketing' title='마케팅 활동 동의' sub='(선택항목)' isSelf={false} checked={term3} onChange={handleChangeTerm3} />
            </div>
          </fieldset>
        </form>
        <Buttons align="right" marginTop={48}>
          <Button size="big" background="gray" title="임시 저장" width={125} height={60} onClick={(e) => openAlertPop4(e, "fade")} />
          <Button size="big" background="blue80" title="다음 단계" width={127} height={60} onClick={(e) => openAlertPop2_1(e, "fade")} />
        </Buttons>
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

      <RodalPopup show={rodalShow4} type={'fade'} width={894} closedHandler={modalCloseHandler4} mode={'no-padding'}>
        <div>

        </div>
      </RodalPopup>

      <RodalPopup show={alertPop2_1} type={'fade'} width={380} closedHandler={closeAlertPop2_1} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>저장 후, 다음단계로 이동하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop4} type={'fade'} width={380} closedHandler={closeAlertPop4} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>임시저장 되었습니다.<br />입력하신 내용은 [마이페이지]에서 확인이 가능합니다.</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

    </AppLayout>
  )
}

export default FreeStep02_01
