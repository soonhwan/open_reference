import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import moment from 'moment';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import CarInfo from '@src/components/common/CarInfo';
import CarStatus from '@src/components/common/CarStatus';
import CarHistory from '@src/components/common/CarHistory';
import CarDetails from '@src/components/common/CarDetails';
import CarPicture from '@src/components/common/CarPicture';
import CarSignature from '@src/components/common/CarSignature';
import CarAddOption from '@src/components/common/CarAddOption';
import MypageSellPrice from '@src/components/common/MypageSellPrice';
import MypageMortgage from '@src/components/common/MypageMortgage';
import MypageAcidentRecord from '@src/components/common/MypageAcidentRecord';
import MypageMovieUrl from '@src/components/common/MypageMovieUrl';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckBox from '@lib/share/items/CheckBox';
import CheckBoxItem from '@lib/share/items/CheckBoxItem';
import RadioGroup from '@lib/share/items/RadioGroup';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import Textarea from '@lib/share/items/Textarea';
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const now = moment();
  // 팝업
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  const [rodalShow3, setRodalShow3, rodalPopupHandler3, modalCloseHandler3] = useRodal(false, true);
  const [rodalShow4, setRodalShow4, rodalPopupHandler4, modalCloseHandler4] = useRodal(false, true);
  const [rodalShow5, setRodalShow5, rodalPopupHandler5, modalCloseHandler5] = useRodal(false, true);
  const [rodalShow6, setRodalShow6, rodalPopupHandler6, modalCloseHandler6] = useRodal(false, true);
  const [rodalShow7, setRodalShow7, rodalPopupHandler7, modalCloseHandler7] = useRodal(false, true);
  const [rodalShow8, setRodalShow8, rodalPopupHandler8, modalCloseHandler8] = useRodal(false, true);
  const [rodalShow9, setRodalShow9, rodalPopupHandler9, modalCloseHandler9] = useRodal(false, true);
  const [rodalShow10, setRodalShow10, rodalPopupHandler10, modalCloseHandler10] = useRodal(false, true);
  const [rodalShow11, setRodalShow11, rodalPopupHandler11, modalCloseHandler11] = useRodal(false, true);
  const [rodalShow11_1, setRodalShow11_1, rodalPopupHandler11_1, modalCloseHandler11_1] = useRodal(false, true);
  const [rodalShow12, setRodalShow12, rodalPopupHandler12, modalCloseHandler12] = useRodal(false, true);
  const [rodalShow13, setRodalShow13, rodalPopupHandler13, modalCloseHandler13] = useRodal(false, true);
  const [rodalShow13_1, setRodalShow13_1, rodalPopupHandler13_1, modalCloseHandler13_1] = useRodal(false, true);
  const [rodalShow14, setRodalShow14, rodalPopupHandler14, modalCloseHandler14] = useRodal(false, true);
  const [rodalShow15, setRodalShow15, rodalPopupHandler15, modalCloseHandler15] = useRodal(false, true);

  const [textareaDisabled1, setTextareaDisabled1] = useState(true)
  const [textareaDisabled2, setTextareaDisabled2] = useState(true)
  const [textareaDisabled3, setTextareaDisabled3] = useState(true)
  const [textareaDisabled4, setTextareaDisabled4] = useState(true)
  const [textareaDisabled5, setTextareaDisabled5] = useState(true)

  // 체크박스 텍스트어리어 활성
  const handleTextarea1 = useCallback(() => {
    setTextareaDisabled1(!textareaDisabled1)
  }, [textareaDisabled1]);

  const handleTextarea2 = useCallback(() => {
    setTextareaDisabled2(!textareaDisabled2)
  }, [textareaDisabled2]);

  const handleTextarea3 = useCallback(() => {
    setTextareaDisabled3(!textareaDisabled3)
  }, [textareaDisabled3]);

  const handleTextarea4 = useCallback(() => {
    setTextareaDisabled4(!textareaDisabled4)
  }, [textareaDisabled4]);

  const handleTextarea5 = useCallback(() => {
    setTextareaDisabled5(!textareaDisabled5)
  }, [textareaDisabled5]);

  // 옵션 더보기
  const [carOptionMore1, setCarOptionMore1] = useState(false)
  const [carOptionMore2, setCarOptionMore2] = useState(false)
  const [carOptionMore3, setCarOptionMore3] = useState(false)
  const [carOptionMore4, setCarOptionMore4] = useState(false)
  const [colorOptionMore, setColorOptionMore] = useState(false)
  const handleCarOption1 = (e) => {
    e.preventDefault()
    setCarOptionMore1(!carOptionMore1)
  }
  const handleCarOption2 = (e) => {
    e.preventDefault()
    setCarOptionMore2(!carOptionMore2)
  }
  const handleCarOption3 = (e) => {
    e.preventDefault()
    setCarOptionMore3(!carOptionMore3)
  }
  const handleCarOption4 = (e) => {
    e.preventDefault()
    setCarOptionMore4(!carOptionMore3)
  }
  const handleColorOption = (e) => {
    e.preventDefault()
    setColorOptionMore(!colorOptionMore)
  }

  const textareaChange = (e) => {
    console.log('textareaChange');
    console.log(e);
  }
  const textareaBlur = (e) => {
    console.log('textareaBlur');
    console.log(e);
  }
  const textareaFocus = (e) => {
    console.log('textareaFocus');
    console.log(e);
  }

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <TabMenu type="type1" mount={false}>
            <TabCont tabTitle="등록차량 관리(전체:50)" id="tab1-1" index={0}>
              {/* <TabMenu type="type1" mount={false}>
                  <TabCont tabTitle="15" id="tab2-1" index={0}>
                  Content1
                  </TabCont>
                  <TabCont tabTitle="2" id="tab2-2" index={1}>
                  Content2
                  </TabCont>
                  <TabCont tabTitle="1" id="tab2-3" index={2}>
                  Content3
                  </TabCont>
                  <TabCont tabTitle="7" id="tab2-4" index={3}>
                  Content3
                  </TabCont>
                  <TabCont tabTitle="10" id="tab2-5" index={4}>
                  Content3
                  </TabCont>
                  <TabCont tabTitle="3" id="tab2-6" index={5}>
                  Content3
                  </TabCont>
              </TabMenu> */}
              <ul className="register-admin-tab">
                <li className="state-green"><a href="#" title="정산 판매중">15</a>정상 판매중</li>
                <li className="state-red"><a href="#" title="관리필요">2</a>관리필요</li>
                <li className="state-yellow"><a href="#" title="판단보류">1</a>판단보류</li>
                <li className="state-blue"><a href="#" title="대기차량">7</a>대기차량</li>
                <li className="state-sky"><a href="#" title="판매완료">10</a>판매완료</li>
                <li className="state-purple"><a href="#" title="삭제차량">3</a>삭제차량</li>
              </ul>
              {/* 등록차량 관리 : 정상 판매중 */}
              <div className="register-admin-sec">
                <ul className="float-wrap">
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="제조사" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="모델" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="등록순" />
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler5(e, "slideUp")} width="139" />
                  </li>
                </ul>
                <ul className="register-img-list">
                  <li>
                    <div className="admin-list tp1">
                      <div className="content-top">
                        <CheckBox id='register-car-chk' />
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6">7760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>판매기간:53일</li>
                          <li>조회수(일평균):20회</li>
                          <li>관심고객(최근2주):13명</li>
                          <li>동급매물(최근4주):4주</li>
                          <li>검색자수(최근4주):13대</li>
                          <li>시세대비 판매가:88.0%</li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <p className="state tx-blue80">정상<span>(만료 00일 전)</span></p>
                        <ul>
                          <li><span>광고상품 정보</span></li>
                          <li><span>상품명</span></li>
                          <li>등록일:2019-08-01 (최종수정일:2019-09-01)</li>
                          <li>
                            <div className="tooltip-content">
                              <p className="tx-exp-tp1">업데이트(자동): 09:00~23:00</p>
                              <Tooltip placement="top" width={511} >
                                <TooltipItem>
                                  <i className="ico-question"></i>
                                </TooltipItem>
                                <TooltipCont>
                                  <div className="admin-update-time">
                                    <p>업데이트 시간</p>
                                    <ul>
                                      <li>09:10</li>
                                      <li>10:10</li>
                                      <li>11:10</li>
                                      <li>12:10</li>
                                      <li>13:10</li>
                                      <li>14:10</li>
                                      <li>15:10</li>
                                      <li>16:10</li>
                                      <li>17:10</li>
                                      <li>18:10</li>
                                      <li>19:10</li>
                                      <li>20:10</li>
                                      <li>21:10</li>
                                      <li>22:10</li>
                                      <li>23:10</li>
                                    </ul>
                                  </div>
                                </TooltipCont>
                              </Tooltip>
                            </div>
                          </li>
                          <li>최종:2019-09-30 23:10 (6/15회)</li>
                        </ul>
                        <div className="btn-wrap">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="광고상품 관리" onClick={(e) => rodalPopupHandler6(e, "slideUp")} width={129} marginBottom={8} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler7(e, "slideUp")} width={129} />
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <div className="btn-left">
                          <Button size="mid" background="blue80" radius={true} title="중고차 시세" width={100} />
                        </div>
                        <div className="btn-right">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="가격 수정" onClick={(e) => rodalPopupHandler8(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량정보 수정" onClick={(e) => rodalPopupHandler9(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량사진 수정" onClick={(e) => rodalPopupHandler10(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="성능기록부 수정" onClick={(e) => rodalPopupHandler11(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="판매완료 신고" onClick={(e) => rodalPopupHandler12(e, "slideUp")} width={121} />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                </ul>
              </div>
              {/* 등록차량 관리 : 관리필요 */}
              <div className="register-admin-sec">
                <ul className="float-wrap">
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="제조사" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="모델" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="등록순" />
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler5(e, "slideUp")} width="139" />
                  </li>
                </ul>
                <ul className="register-img-list">
                  <li>
                    <div className="admin-list tp1">
                      <div className="content-top">
                        <CheckBox id='register-car-chk' />
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6">7760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>판매기간:53일</li>
                          <li>조회수(일평균):20회</li>
                          <li>관심고객(최근2주):13명</li>
                          <li>동급매물(최근4주):4주</li>
                          <li>검색자수(최근4주):13대</li>
                          <li>시세대비 판매가:88.0%</li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <p className="state tx-red80">관리필요<span>(만료 00일 전)</span></p>
                        <ul>
                          <li><span>광고상품 정보</span></li>
                          <li><span>상품명</span></li>
                          <li>등록일:2019-08-01 (최종수정일:2019-09-01)</li>
                          <li>
                            <div className="tooltip-content">
                              <p className="tx-exp-tp1">업데이트(자동): 09:00~23:00</p>
                              <Tooltip placement="top" width={511} >
                                <TooltipItem>
                                  <i className="ico-question"></i>
                                </TooltipItem>
                                <TooltipCont>
                                  <div className="admin-update-time">
                                    <p>업데이트 시간</p>
                                    <ul>
                                      <li>09:10</li>
                                      <li>10:10</li>
                                      <li>11:10</li>
                                      <li>12:10</li>
                                      <li>13:10</li>
                                      <li>14:10</li>
                                      <li>15:10</li>
                                      <li>16:10</li>
                                      <li>17:10</li>
                                      <li>18:10</li>
                                      <li>19:10</li>
                                      <li>20:10</li>
                                      <li>21:10</li>
                                      <li>22:10</li>
                                      <li>23:10</li>
                                    </ul>
                                  </div>
                                </TooltipCont>
                              </Tooltip>
                            </div>
                          </li>
                          <li>최종:2019-09-30 23:10 (6/15회)</li>
                        </ul>
                        <div className="btn-wrap">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="광고상품 관리" onClick={(e) => rodalPopupHandler6(e, "slideUp")} width={129} marginBottom={8} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler7(e, "slideUp")} width={129} />
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <div className="btn-left">
                          <Button size="mid" background="blue80" radius={true} title="중고차 시세" width={100} />
                        </div>
                        <div className="btn-right">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="가격 수정" onClick={(e) => rodalPopupHandler8(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량정보 수정" onClick={(e) => rodalPopupHandler9(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량사진 수정" onClick={(e) => rodalPopupHandler10(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="성능기록부 수정" onClick={(e) => rodalPopupHandler11(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="판매완료 신고" onClick={(e) => rodalPopupHandler12(e, "slideUp")} width={121} />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                </ul>
              </div>
              {/* 등록차량 관리 : 판단보류 */}
              <div className="register-admin-sec">
                <ul className="float-wrap">
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="제조사" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="모델" />
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="등록순" />
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler5(e, "slideUp")} width="139" />
                  </li>
                </ul>
                <ul className="register-img-list">
                  <li>

                    <div className="admin-list tp1">
                      <div className="content-top">
                        <CheckBox id='register-car-chk' />
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6">7760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>판매기간:53일</li>
                          <li>조회수(일평균):20회</li>
                          <li>관심고객(최근2주):13명</li>
                          <li>동급매물(최근4주):4주</li>
                          <li>검색자수(최근4주):13대</li>
                          <li>시세대비 판매가:88.0%</li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <p className="state tx-gray">판단보류<span>(만료 00일 전)</span></p>
                        <ul>
                          <li><span>광고상품 정보</span></li>
                          <li><span>상품명</span></li>
                          <li>등록일:2019-08-01 (최종수정일:2019-09-01)</li>
                          <li>
                            <div className="tooltip-content">
                              <p className="tx-exp-tp1">업데이트(자동): 09:00~23:00</p>
                              <Tooltip placement="top" width={511} >
                                <TooltipItem>
                                  <i className="ico-question"></i>
                                </TooltipItem>
                                <TooltipCont>
                                  <div className="admin-update-time">
                                    <p>업데이트 시간</p>
                                    <ul>
                                      <li>09:10</li>
                                      <li>10:10</li>
                                      <li>11:10</li>
                                      <li>12:10</li>
                                      <li>13:10</li>
                                      <li>14:10</li>
                                      <li>15:10</li>
                                      <li>16:10</li>
                                      <li>17:10</li>
                                      <li>18:10</li>
                                      <li>19:10</li>
                                      <li>20:10</li>
                                      <li>21:10</li>
                                      <li>22:10</li>
                                      <li>23:10</li>
                                    </ul>
                                  </div>
                                </TooltipCont>
                              </Tooltip>
                            </div>
                          </li>
                          <li>최종:2019-09-30 23:10 (6/15회)</li>
                        </ul>
                        <div className="btn-wrap">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="광고상품 관리" onClick={(e) => rodalPopupHandler6(e, "slideUp")} width={129} marginBottom={8} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="업데이트 시간변경" onClick={(e) => rodalPopupHandler7(e, "slideUp")} width={129} />
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <div className="btn-left">
                          <Button size="mid" background="blue80" radius={true} title="중고차 시세" width={100} />
                        </div>
                        <div className="btn-right">
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="가격 수정" onClick={(e) => rodalPopupHandler8(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량정보 수정" onClick={(e) => rodalPopupHandler9(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="차량사진 수정" onClick={(e) => rodalPopupHandler10(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="성능기록부 수정" onClick={(e) => rodalPopupHandler11(e, "slideUp")} width={121} />
                          <Button size="mid" line="blue80" color="blue80" radius={true} title="판매완료 신고" onClick={(e) => rodalPopupHandler12(e, "slideUp")} width={121} />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="register-state-modify">
                  <li>
                    <CheckBox id='chk-all' title='' />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 구입" onClick={(e) => rodalPopupHandler1(e, "slideUp")} width="193" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 프리미엄광고 내용관리" onClick={(e) => rodalPopupHandler2(e, "slideUp")} width="219" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 삭제" onClick={(e) => rodalPopupHandler3(e, "slideUp")} width="113" />
                  </li>
                  <li>
                    <Button size="mid" line="gray" color="black" radius={true} title="선택차량 업데이트" onClick={(e) => rodalPopupHandler4(e, "slideUp")} width="139" />
                  </li>
                </ul>
              </div>
              {/* 등록차량 관리 : 대기차량 */}
              <div className="register-admin-sec">
                <TabMenu type="type7">
                  <TabCont tabTitle="전체(7)" id="tab7-1" index={0}>
                    <ul className="prepare-img-list">
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-blue80">낙찰차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-gray">대기차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-green">프랜차이즈</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-blue80">낙찰차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabCont>
                  <TabCont tabTitle="낙찰차량(7)" id="tab7-2" index={1}>
                    <ul className="prepare-img-list">
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-blue80">낙찰차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-blue80">낙찰차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabCont>
                  <TabCont tabTitle="대기차량(7)" id="tab7-3" index={2}>
                    <ul className="prepare-img-list">
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-gray">대기차량</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabCont>
                  <TabCont tabTitle="프랜차이즈(7)" id="tab7-4" index={3}>
                    <ul className="prepare-img-list">
                      <li>
                        <div className="admin-list tp3">
                          <div className="content-top">
                            <CheckBox id='register-car-chk' />
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <span className="option-tp4 bg-green">프랜차이즈</span>
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                            </div>
                            <p className="price-tp7"><em>낙찰금액</em>1,890<span className="won">만원</span></p>
                            <div className="btn-wrap">
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="차량등록" width={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabCont>
                </TabMenu>
              </div>
              {/* 등록차량 관리 : 판매완료 */}
              <div className="register-admin-sec">
                <div className="admin-inquire-sec">
                  <ul className="inquire-search">
                    <li>차량검색</li>
                    <li className="mr16"><SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="제조사" /></li>
                    <li><SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="모델" /></li>
                  </ul>
                  <ul className="inquire-period">
                    <li>기간</li>
                    <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                    <li className="period-mark">~</li>
                    <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                    <li className="period-chk">
                      <Button size="mid" line="gray" color="black" title="3개월" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="1개월" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="15일" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="1주일" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="오늘" width={50} height={40} />
                    </li>
                    <li>
                      <Button size="mid" background="blue80" title="조회" width={114} height={40} />
                    </li>
                  </ul>
                  <p className="tx-exp-tp5">(* 최대 [00기간]까지 조회 가능합니다.)</p>
                </div>
                <ul className="float-wrap">
                  <li>
                    <p className="inquire-num">판매완료차량 : 총00대</p>
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="등록순" />
                  </li>
                </ul>
                <ul className="sellco-img-list">
                  <li>
                    <div className="admin-list tp2">
                      <div className="content-top">
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h5 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h5>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6"><span className="price-label">판매가 :</span>7,760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>등록일 : 2019-00-00</li>
                          <li>판매일 : 2019-00-00</li>
                          <li>소요일 : 00일</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* 등록차량 관리 : 삭제차량 */}
              <div className="register-admin-sec">
                <div className="admin-inquire-sec">
                  <ul className="inquire-search">
                    <li>차량검색</li>
                    <li className="mr16"><SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="제조사" /></li>
                    <li><SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="모델" /></li>
                  </ul>
                  <ul className="inquire-delete">
                    <li>삭제사유</li>
                    <li><CheckBox id='chk-delete01' title='기간만료' /></li>
                    <li><CheckBox id='chk-delete02' title='직접삭제' /></li>
                    <li><CheckBox id='chk-delete03' title='관리자 삭제' /></li>
                  </ul>
                  <ul className="inquire-period">
                    <li>기간</li>
                    <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                    <li className="period-mark">~</li>
                    <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                    <li className="period-chk">
                      <Button size="mid" line="gray" color="black" title="3개월" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="1개월" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="15일" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="1주일" width={50} height={40} />
                      <Button size="mid" line="gray" color="black" title="오늘" width={50} height={40} />
                    </li>
                    <li>
                      <Button size="mid" background="blue80" title="조회" width={114} height={40} />
                    </li>
                  </ul>
                  <p className="tx-exp-tp5">(* 최대 [00기간]까지 조회 가능합니다.)</p>
                </div>
                <ul className="float-wrap">
                  <li>
                    <p className="inquire-num">삭제차량 : 총00대</p>
                  </li>
                  <li>
                    <SelectBox id="select1" className="items-sbox" options={select1_list} width={176} height={40} placeHolder="삭제일순" />
                  </li>
                </ul>
                <ul className="img-list">
                  <li>
                    <div className="admin-list tp2">
                      <div className="content-top">
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h5 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h5>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6">7,760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>등록일 : 2019-00-00</li>
                          <li>판매일 : 2019-00-00</li>
                          <li>삭제사유 : 직접삭제</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="admin-list tp2">
                      <div className="content-top">
                        <div className="img-cover">
                          <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                        </div>
                        <div className="summary">
                          <h5 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h5>
                          <ul className="info">
                            <li>00가0000</li>
                            <li>09/12식(10년형)</li>
                            <li>84,761km</li>
                            <li>오토</li>
                            <li>디젤</li>
                          </ul>
                          <p className="price-tp6">7,760<span className="won">만원</span></p>
                        </div>
                        <ul className="numerical">
                          <li>등록일 : 2019-00-00</li>
                          <li>판매일 : 2019-00-00</li>
                          <li>삭제사유 : 직접삭제</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </TabCont>
            <TabCont tabTitle="프리미엄광고 관리" id="tab1-2" index={1}>
              <div className="advertise-admin-tab">
                <TabMenu type="type5" defaultTab={1} mount={false}>
                  <TabCont tabTitle="광고이용권 안내" id="tab5-1" index={0}>
                    광고상품 정책확인 필요
                  </TabCont>
                  <TabCont tabTitle="결제내역" id="tab5-2" index={1}>
                    <div className="admin-inquire-sec">
                      <ul className="inquire-pay">
                        <li>결제수단</li>
                        <li><CheckBox id='chk-credit-card' title='신용카드' /></li>
                        <li><CheckBox id='chk-phone' title='휴대전화' /></li>
                        <li><CheckBox id='chk-bank-account' title='무통장입금' /></li>
                        <li><CheckBox id='chk-coupon' title='쿠폰/포인트' /></li>
                        <li><CheckBox id='chk-simple-pay' title='간편결제' /></li>
                      </ul>
                      <ul className="inquire-service">
                        <li>서비스</li>
                        <li><CheckBox id='chk-service01' title='서비스' /></li>
                        <li><CheckBox id='chk-service02' title='서비스' /></li>
                        <li><CheckBox id='chk-service03' title='서비스' /></li>
                        <li><CheckBox id='chk-service04' title='서비스' /></li>
                      </ul>
                      <ul className="inquire-period">
                        <li>기간</li>
                        <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                        <li className="period-mark">~</li>
                        <li><DatePicker defaultValue={now} inputWidth={160} inputHeight={40} /></li>
                        <li className="period-chk">
                          <Button size="mid" line="gray" color="black" title="3개월" width={50} height={40} />
                          <Button size="mid" line="gray" color="black" title="1개월" width={50} height={40} />
                          <Button size="mid" line="gray" color="black" title="15일" width={50} height={40} />
                          <Button size="mid" line="gray" color="black" title="1주일" width={50} height={40} />
                          <Button size="mid" line="gray" color="black" title="오늘" width={50} height={40} />
                        </li>
                        <li>
                          <Button size="mid" background="blue80" title="조회" width={114} height={40} />
                        </li>
                      </ul>
                      <p className="tx-exp-tp5">(* 최대 1년까지 조회 가능합니다.)</p>
                    </div>
                    <div className="ad-tx-list">
                      <p className="inquire-num">결제완료건 수 : 총00건</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="12%" />
                          <col width="12%" />
                          <col width="34%" />
                          <col width="16%" />
                          <col width="13%" />
                          <col width="13%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>결제일</th>
                            <th>결제번호</th>
                            <th>결제내용</th>
                            <th>결제금액</th>
                            <th>결제수단</th>
                            <th>영수증/증빙</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" onClick={(e) => rodalPopupHandler13(e, "slideUp")} />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" onClick={(e) => rodalPopupHandler14(e, "slideUp")} />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" onClick={(e) => rodalPopupHandler13(e, "slideUp")} />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" onClick={(e) => rodalPopupHandler15(e, "slideUp")} />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="현금영수증" />
                            </td>
                          </tr>
                          <tr>
                            <td>2019/08/16</td>
                            <td>12373404</td>
                            <td>
                              <Button color="gray" title="파워팩 대당이용권 1대 외 1건" />
                            </td>
                            <td>230,000원</td>
                            <td>무통장입금</td>
                            <td>
                              <Button color="gray" title="세금계산서" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ad-tx-list">
                      <p className="inquire-num">결제완료건 수 : 총00건</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="12%" />
                          <col width="12%" />
                          <col width="34%" />
                          <col width="16%" />
                          <col width="13%" />
                          <col width="13%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>결제일</th>
                            <th>결제번호</th>
                            <th>결제내용</th>
                            <th>결제금액</th>
                            <th>결제수단</th>
                            <th>영수증/증빙</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="6" className="list-state-none">결제내역이 없습니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="essential-point">
                      <p>꼭 알아두세요!</p>
                      <ul>
                        <li><i className="ico-dot mid"></i> 신용카드로 결제 시 카드매출전표가 발급되며, 세금계산서 대용으로 매입세액공제를 받으실 수 있습니다.</li>
                        <li><i className="ico-dot mid"></i> 휴대전화로 결제 후 다음 달, 휴대전화 요금을 납부하면 명의자의 주민등록 번호로 현금영수증이 자동발행됩니다.<span className="add-exp">- 단, 휴대전화 결제금액을 신용카드로 납부 시에는 발행되지 않습니다.</span></li>
                        <li><i className="ico-dot mid"></i> 무통장입금 완료 후 현금영수증 또는 세금계산서 중 1개만 증빙자료로 신청하실 수 있습니다. (결제 후 다음 달 5일까지)</li>
                        <li><i className="ico-dot mid"></i> 현금영수증 신청 시 세금계산서 대용으로 매입세액공제를 받으시려면 지출증빙용으로 신청해 주세요.</li>
                        <li><i className="ico-dot mid"></i> 세금계산서 신청 시 기재하신 이메일로 전자 세금계산서를 발송해 드립니다. (우편 발송은 불가)</li>
                        <li><i className="ico-dot mid"></i> 세금계산서 문의 : 고객센터 ()</li>
                      </ul>
                    </div>
                  </TabCont>
                  <TabCont tabTitle="입금대기 내역" id="tab5-3" index={2}>
                    <div className="tx-list">
                      <p className="inquire-num">입금대기건 수 : 총00건 (입금액 00원)</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="12%" />
                          <col width="12%" />
                          <col width="20%" />
                          <col width="21%" />
                          <col width="21%" />
                          <col width="14%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>결제일</th>
                            <th>입금액</th>
                            <th>은행명</th>
                            <th>계좌번호</th>
                            <th>품목</th>
                            <th>상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tx-list">
                      <p className="inquire-num">입금대기건 수 : 총00건 (입금액 00원)</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="12%" />
                          <col width="12%" />
                          <col width="20%" />
                          <col width="21%" />
                          <col width="21%" />
                          <col width="14%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>결제일</th>
                            <th>입금액</th>
                            <th>은행명</th>
                            <th>계좌번호</th>
                            <th>품목</th>
                            <th>상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="6" className="list-state-none">입금대기 내역이 없습니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="essential-point">
                      <p>꼭 알아두세요!</p>
                      <ul>
                        <li><i className="ico-dot mid"></i> 입금대기 내역은 무통장 결제 시 입금확인이 되지 않은 내역입니다.</li>
                        <li><i className="ico-dot mid"></i> 입금확인이 되면 바로 결제내역으로 자동 이동되며, 입금예정일이 지난 내역은 자동 삭제됩니다.</li>
                      </ul>
                    </div>
                  </TabCont>
                  <TabCont tabTitle="자동연장 이용내역" id="tab5-4" index={3}>
                    <div className="tx-list">
                      <p className="inquire-num">총00건</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="19%" />
                          <col width="15%" />
                          <col width="22%" />
                          <col width="22%" />
                          <col width="22%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>이용권명</th>
                            <th>사용현황</th>
                            <th>만료/자동연장일</th>
                            <th>결제예정금액</th>
                            <th>관리(자동연장취소)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tx-list">
                      <p className="inquire-num">총00건</p>
                      <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                        <caption className="away">결제내역</caption>
                        <colgroup>
                          <col width="19%" />
                          <col width="15%" />
                          <col width="22%" />
                          <col width="22%" />
                          <col width="22%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>이용권명</th>
                            <th>사용현황</th>
                            <th>만료/자동연장일</th>
                            <th>결제예정금액</th>
                            <th>관리(자동연장취소)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="6" className="list-state-none">이용중인 내역이 없습니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="essential-point">
                      <p>꼭 알아두세요!</p>
                      <ul>
                        <li><i className="ico-dot mid"></i> 입금대기 내역은 무통장 결제 시 입금확인이 되지 않은 내역입니다.</li>
                        <li><i className="ico-dot mid"></i> 입금확인이 되면 바로 결제내역으로 자동 이동되며, 입금예정일이 지난 내역은 자동 삭제됩니다.</li>
                      </ul>
                    </div>
                  </TabCont>
                  <TabCont tabTitle="광고효과 분석" id="tab5-5" index={4}>
                    <ul className="adeffect-img-list">
                      <li>
                        <div className="admin-list tp4">
                          <div className="content-top">
                            <div className="img-cover">
                              <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                            </div>
                            <div className="summary">
                              <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                              <ul className="info">
                                <li>00가0000</li>
                                <li>09/12식(10년형)</li>
                                <li>84,761km</li>
                                <li>오토</li>
                                <li>디젤</li>
                              </ul>
                              <p className="price-tp6">7,760<span className="won">만원</span></p>
                            </div>
                            <div className="admin-update">
                              <p>21분 전 업데이트</p>
                              <Button size="mid" line="blue80" color="blue80" radius={true} title="업데이트 시간변경" width={129} />
                            </div>
                          </div>
                        </div>
                        <div className="adeffect-point">
                          <p>
                            광고상품 정보<br />
                            상품명 : 상품명 노출 (3/21페이지 광고중)
                                            </p>
                          <Tooltip placement="bottom" width={300} >
                            <TooltipItem>
                              <i className="ico-question"></i>
                            </TooltipItem>
                            <TooltipCont>
                              <div></div>
                            </TooltipCont>
                          </Tooltip>
                        </div>
                      </li>
                    </ul>
                  </TabCont>
                  <TabCont tabTitle="취소 및 환불안내" id="tab5-6" index={5}>
                    컨첸트 수급필요
                  </TabCont>
                </TabMenu>
              </div>
            </TabCont>
          </TabMenu>
        </div>
      </div>

      <RodalPopup show={rodalShow1} type={'slideUp'} width={500} closedHandler={modalCloseHandler1} mode={'no-padding'}>
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow2} type={'slideUp'} closedHandler={modalCloseHandler2} title="프리미엄광고 내용 관리" mode="normal" size="large">
        <div className="con-wrap">
          <ul className="ad-content-admin">
            <li>
              <p>사진우대<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>우대등록<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>핫마크<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>모바일 프리미엄<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>파워텍<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>사진우대<br />+모바일 프리미엄<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>우대등록<br />+모바일 프리미엄<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
            <li>
              <p>파워팩<br />+모바일 프리미엄<span>0대</span></p>
              <Button size="mid" line="blue80" color="blue80" radius={true} title="구매하기" width="132" />
            </li>
          </ul>
          <ul className="ad-content-chk">
            <li>
              <div className="admin-list tp5">
                <div className="content-top">
                  <CheckBox id='register-car-chk' />
                  <div className="img-cover">
                    <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                  </div>
                  <div className="summary">
                    <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                    <ul className="info">
                      <li>00가0000</li>
                      <li>09/12식(10년형)</li>
                      <li>84,761km</li>
                      <li>오토</li>
                      <li>디젤</li>
                    </ul>
                  </div>
                  <p className="price-tp7">1,890<span className="won">만원</span></p>
                  <p className="use-chk">미사용</p>
                </div>
              </div>
            </li>
            <li>
              <p className="chk-tit">부가서비스</p>
              <CheckBox id='chk-auto-change' title='오토체인지' />
            </li>
            <li>
              <p className="chk-tit">프리미엄 광고</p>
              <ul className="chk-premium-ad">
                <li><CheckBox id='chk-photo' title='사진우대' /></li>
                <li><CheckBox id='chk-treat' title='우대등록' /></li>
                <li><CheckBox id='chk-hotmark' title='핫마크' /></li>
                <li><CheckBox id='chk-premium' title='모바일 프리미엄' /></li>
                <li><CheckBox id='chk-update' title='자동업데이트' /></li>
                <li><CheckBox id='chk-mobile' title='모바일 우대' /></li>
              </ul>
            </li>
            <li>
              <p className="chk-tit">결합 상품</p>
              <ul className="chk-combine-goods">
                <li><CheckBox id='chk-power' title='파워팩' /></li>
                <li><CheckBox id='chk-photo-premium' title='사진우대+모바일 프리미엄' /></li>
                <li><CheckBox id='chk-treat-premium' title='우대등록+모바일 프리미엄' /></li>
                <li><CheckBox id='chk-power-permium' title='파워팩+모바일 프리미엄' /></li>
              </ul>
            </li>
          </ul>
          <div className="essential-point">
            <p>꼭 알아두세요!</p>
            <ul>
              <li><i className="ico-dot mid"></i> 프리미엄광고는 <span className="tx-blue80">판매중으로 등록되어 있는 차량에만 이용</span>하실 수 있습니다.</li>
              <li className="tx-btn-wrap"><i className="ico-dot mid"></i> 프리미엄광고는 <span className="tx-blue80">자유이용권 또는 대당이용권을 구입</span>하여 이용하실 수 있습니다.<Button size="sml" background="blue80" radius={true} title="프리미엄광고 구입하기" width="165" /></li>
              <li><i className="ico-dot mid"></i> 모바일 프리미엄 광고는 <span className="tx-blue80">앞측면, 정면, 후면, 실내 사진</span>이 있어야만 이용하실 수 있습니다.</li>
              <li><i className="ico-dot mid"></i> 각 차량의 좌측에 있는 체크박스를 체크하시고 프리미엄광고의 등록, 변경, 해제 등을 하실 수 있습니다.</li>
              <li><i className="ico-dot mid"></i> <span className="tx-blue80">광고 등록 해제 후 3시간 이내</span>에는 <span className="tx-blue80">동일 차량에 대해 동일한 광고 등록이 제한</span>됩니다.</li>
            </ul>
          </div>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={172} height={60} />
            <Button size="big" background="blue80" title="확인" width={172} height={60} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow3} type={'slideUp'} closedHandler={modalCloseHandler3} title="차량 삭제" mode="normal" size="large">
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow4} type={'slideUp'} closedHandler={modalCloseHandler4} title="차량 업데이트" mode="normal" size="medium">
        <div className="popup-update">
          <div className="top">
            <p>해당 차량을 업데이트 하시겠습니까?<br /><span>(업데이트 횟수를 모두 사용한 차량 및 자동업데이트 차량은 제외됩니다.)</span></p>
          </div>
          <div className="bot">
            <p className="tx-btn-wrap">더 많은 횟수와 자동으로 되는 업데이트가 필요하세요?<Button size="mid" background="blue80" radius={true} title="자세히 보기" width="104" /><br /><span>뒤로 밀린 차량을 리스트 가장 앞으로 매시간 자동 이동해주는 신규 상품 출시!</span></p>
            <div className="update-consult">
              <i className="ico-ad"></i>
              <p>혹시 지금 구매자들이 많은 시간대가 아닌데 업데이트 하시나요?<br />
                광고노출이 가장 효과적인 시간에 업데이트 하세요.<br /><span>1577-9789</span>(무료 컨설팅)</p>
            </div>
            <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={172} height={60} />
              <Button size="big" background="blue80" title="확인" width={172} height={60} />
            </Buttons>
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow5} type={'slideUp'} width={500} closedHandler={modalCloseHandler5} mode={'no-padding'}>
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow6} type={'slideUp'} width={500} closedHandler={modalCloseHandler6} mode={'no-padding'}>
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow7} type={'slideUp'} width={500} closedHandler={modalCloseHandler7} mode={'no-padding'}>
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow8} type={'slideUp'} closedHandler={modalCloseHandler8} title="가격 수정" mode="normal" size="large">
        <div className="con-wrap price-modify">

          <div className="align-wrap">
            <h4>노출유형</h4>
            <RadioGroup dataList={[
              { id: 'exposure1', value: 1, checked: true, disabled: false, title: '프랜차이즈' },
              { id: 'exposure2', value: 2, checked: false, disabled: false, title: '일반' }
            ]} />
          </div>

          {/* 판매가격 */}
          <MypageSellPrice />

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={172} height={60}/>
            <Button size="big" background="blue80" title="수정완료" width={172} height={60}/>
          </Buttons>

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow9} type={'slideUp'} closedHandler={modalCloseHandler9} title="차량정보 수정" mode="normal" size="large">
        <div className="con-wrap car-info-modify">
          <div>
            <h4 className="mb33">기본 옵션</h4>
            <div className="car-option-tp2 chk mb80">
              <ul className="cate-ico">
                <CheckBoxItem id="chk-sunroof" checked={true} size="small">
                  <i className="ico-sunroof"></i>
                  <span className="ico-exp">썬루프</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-hid" checked={false} size="small">
                  <i className="ico-hid"></i>
                  <span className="ico-exp">헤드램프(HID)</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-led" checked={false} size="small">
                  <i className="ico-led"></i>
                  <span className="ico-exp">헤드램프(LED)</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-parking-sensor" checked={false} size="small">
                  <i className="ico-parking-sensor"></i>
                  <span className="ico-exp">주차감지센서</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-back-camera" checked={false} size="small">
                  <i className="ico-back-camera"></i>
                  <span className="ico-exp">후방카메라</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-smart-key" checked={false} size="small">
                  <i className="ico-smart-key"></i>
                  <span className="ico-exp">스마트키</span>
                </CheckBoxItem>
                <CheckBoxItem id="chk-navigation" checked={false} size="small">
                  <i className="ico-navigation"></i>
                  <span className="ico-exp">네비게이션</span>
                </CheckBoxItem>
              </ul>
              <CSSTransition
                in={carOptionMore4}
                timeout={300}
                classNames={'fade'}
                unmountOnExit
              >
                <ul className="cate-list">
                  <li>
                    <p>카테고리1</p>
                    <ul className="cate-list-detail">
                      <li className="on">
                        <CheckBox id='chk-navigation-3' title='네비게이션(매립)' />
                      </li>
                      <li>
                        <CheckBox id='chk-back-camera-3' title='후방카메라' />
                      </li>
                      <li>
                        <CheckBox id='chk-smart-key-3' title='스마트키' />
                      </li>
                      <li>
                        <CheckBox id='chk-sunroof-3' title='파노라마 썬루프' />
                      </li>
                      <li>
                        <CheckBox id='chk-button-start-3' title='버튼시동/스마트키' />
                      </li>
                      <li>
                        <CheckBox id='chk-blackbox-3' title='블랙박스' />
                      </li>
                      <li>
                        <CheckBox id='chk-fourwheel-3' title='4WD(4륜구동)' />
                      </li>
                      <li>
                        <CheckBox id='chk-isg-3' title='스톱앤고(ISG)' />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>카테고리2</p>
                    <ul className="cate-list-detail">
                      <li className="on">
                        <CheckBox id='chk-air-3' title='전자동 에어컨' />
                      </li>
                      <li>
                        <CheckBox id='chk-al-wheel-3' title='알루미늄휠' />
                      </li>
                      <li>
                        <CheckBox id='chk-hid-led-3' title='HID/LED헤드램프' />
                      </li>
                      <li>
                        <CheckBox id='chk-leather-sheet-3' title='가죽시트' />
                      </li>
                      <li>
                        <CheckBox id='chk-auto-sheet-3' title='전동시트' />
                      </li>
                      <li>
                        <CheckBox id='chk-heat-sheet-3' title='열선시트' />
                      </li>
                      <li>
                        <CheckBox id='chk-vent-sheet-3' title='통풍시트' />
                      </li>
                      <li>
                        <CheckBox id='chk-mp3-3' title='CD/MP3플레이어' />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>카테고리3</p>
                    <ul className="cate-list-detail">
                      <li className="on">
                        <CheckBox id='chk-airback-d-3' title='에어백(운전석)' />
                      </li>
                      <li>
                        <CheckBox id='chk-airback-p-3' title='에어백(동반석)' />
                      </li>
                      <li>
                        <CheckBox id='chk-airback-s-3' title='에어백(사이드)' />
                      </li>
                      <li>
                        <CheckBox id='chk-airback-c-3' title='에어백(커튼)' />
                      </li>
                      <li>
                        <CheckBox id='chk-abs-3' title='ABS' />
                      </li>
                      <li>
                        <CheckBox id='chk-tcs-3' title='TCS' />
                      </li>
                      <li>
                        <CheckBox id='chk-esp-vdc-3' title='ESP/VDC' />
                      </li>
                      <li>
                        <CheckBox id='chk-tpms-3' title='TPMS(타이어공기압)' />
                      </li>
                    </ul>
                  </li>
                  <li>
                  <p>카테고리4</p>
                    <ul className="cate-list-detail">
                      <li className="on">
                        <CheckBox id='chk-heat-handle-3' title='열선핸들' />
                      </li>
                      <li>
                        <CheckBox id='chk-back-tv-3' title='뒷자석TV' />
                      </li>
                      <li>
                        <CheckBox id='chk-auto-door-3' title='오토 슬라이딩도어' />
                      </li>
                      <li>
                        <CheckBox id='chk-power-trunk-3' title='파워 트렁크' />
                      </li>
                      <li>
                        <CheckBox id='chk-side-step-3' title='사이드스텝' />
                      </li>
                      <li>
                        <CheckBox id='chk-hud-3' title='HUD(헤드업디스플레이)' />
                      </li>
                      <li>
                        <CheckBox id='chk-lane-departure-3' title='차선이탈 경보시스템' />
                      </li>
                      <li>
                        <CheckBox id='chk-bsd-3' title='후측방 경보시스템(BSD)' />
                      </li>
                    </ul>
                  </li>
                </ul>
              </CSSTransition>
              <div className={carOptionMore4 ? "cate-list-btn active" : "cate-list-btn"}>
                <button onClick={handleCarOption4}>{carOptionMore4 ? "닫기" : "24개의 옵션 더보기"}</button>
              </div>
            </div>
          </div>

          {/* 추가옵션 */}
          <CarAddOption />

          {/* 압류/저당 입력 */}
          <MypageMortgage />

          {/* 사고이력정보 */}
          <MypageAcidentRecord />

          {/* 동영상 */}
          <MypageMovieUrl />

          <div className="register-car-ex">
            <h4 className="mb33">차량 설명글 입력</h4>
            <div className="ex-option-wrap">
              <RadioGroup dataList={[
                {id:'car_ex1', value:1, checked:true, disabled:false, title:'직접입력'},
                {id:'car_ex2', value:2, checked:false, disabled:false, title:'샘플보기'},
                {id:'car_ex3', value:3, checked:false, disabled:false, title:'나의 설명글 사용'}
              ]} />
              <SelectBox id="mortgage3" className="items-sbox" placeHolder="선택하세요"
              options={[
                  { value: '소형차 설명글', label: '소형차 설명글' },
                  { value: '신차 설명글', label: '신차 설명글' }
                ]} width={318} height={40} />
              <Button color="blue80" title="내용 초기화" width={90} height={40} marginLeft={10} />
              <Button color="blue80" title="미리보기" width={60} height={40} />
            </div>
            <div className="key-point-wrap">
              <CheckBox id='chk-key-point' title='Key Point' onChange={handleTextarea1} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled1} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="scratch-photo-wrap">
              <CheckBox id='chk-scratch-photo' title='흠집사진' onChange={handleTextarea2} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled2} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="history-wrap">
              <CheckBox id='chk-history' title='이 차의 History' onChange={handleTextarea3} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled3} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="diagnosis-wrap">
              <CheckBox id='chk-diagnosis' title='진단소견' onChange={handleTextarea4} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled4} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="other-wrap">
              <CheckBox id='chk-other' title='기타' onChange={handleTextarea5} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled5} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
          </div>

          <Buttons align="right">
            <Button size="big" background="blue80" title="나의 설명글로 저장하기" width={221} />
            <Button size="big" background="light-gray" color="white" title="다른 이름으로 저장" width={204} />
          </Buttons>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={172} />
            <Button size="big" background="blue80" title="수정완료" width={172} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow10} type={'slideUp'} closedHandler={modalCloseHandler10} title="차량사진 수정" mode="normal" size="large">
        <div className="con-wrap">

        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow11} type={'slideUp'} closedHandler={modalCloseHandler11} title="성능기록부 수정" mode="normal" size="large">
        <div className="con-wrap">
          <form className="register-form">
            <CarInfo />
            <CarStatus />
            <CarHistory />
            <CarDetails />
            <CarPicture />
            <CarSignature />
          </form>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="닫기" width={172} height={60} />
            <Button size="big" background="blue80" title="등록완료" width={172} height={60} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow11_1} type={'slideUp'} closedHandler={modalCloseHandler11_1} title="제휴 성능장 전체 보기" mode="normal" size="large">
        <div className="con-wrap">
          <table summary="제휴 성능장 전체 보기에 대한 내용" className="table-tp1 input th-c td-c">
            <caption className="away">제휴 성능장 전체 보기</caption>
            <colgroup>
              <col width="20%" />
              <col width="28%" />
              <col width="16%" />
              <col width="36%" />
            </colgroup>
            <thead>
              <tr>
                <th>지역</th>
                <th>성능장</th>
                <th>연락처</th>
                <th>주소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3">서울특별시</td>
                <td className="lh">한양자동차정비 성능장<br />(성능정비소)</td>
                <td>02-903-3900</td>
                <td>서울특별시 도봉구 도봉로 136다길 32(창동)</td>
              </tr>
              <tr>
                <td className="lh">강남 진단평가 성능장<br />(진단보증협회)</td>
                <td>02-3411-0611</td>
                <td>서울특별시 강남구 헌릉로 745길 25(율현동)</td>
              </tr>
              <tr>
                <td className="lh">웰퓨쳐 강남성능장<br />(진단보증협회)</td>
                <td>02-903-3900</td>
                <td>서울특별시 강남구 헌릉로 745길 27(율현동)</td>
              </tr>
              <tr>
                <td>경기</td>
                <td className="lh">양재 기술인협회 성능장<br />(성능정비소)</td>
                <td></td>
                <td>서울특별시 서초구 양재대로 11길 36(양재동)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow12} type={'slideUp'} closedHandler={modalCloseHandler12} title="판매완료 신고" mode="normal" size="medium">
        <div className="con-wrap popup-declare">
          <div className="admin-list tp4">
            <div className="content-top">
              <div className="img-cover">
                <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
              </div>
              <div className="summary">
                <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                <ul className="info">
                  <li>00가0000</li>
                  <li>09/12식(10년형)</li>
                  <li>84,761km</li>
                  <li>오토</li>
                  <li>디젤</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sell-declare">
            <label htmlFor="sell-price">실제판매가격</label>
            <Input type="text" id="sell-price" value="4,050" width={282} height={64} />
            <em>만원</em>
          </div>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={172} height={60} />
            <Button size="big" background="blue80" title="판매완료" width={172} height={60} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow13} type={'slideUp'} closedHandler={modalCloseHandler13} title="결제내역 상세보기" mode="normal" size="small">
        <div className="con-wrap popup-payment">
          <h4>상세 결제내역</h4>
          <table summary="상세 결제내역에 대한 내용" className="table-tp1">
            <caption className="away">상세 결제내역</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>결제번호</th>
                <td>20190916-0003426</td>
              </tr>
              <tr>
                <th>결제일</th>
                <td>2019-08-16</td>
              </tr>
              <tr>
                <th>결제내용</th>
                <td>상품명</td>
              </tr>
              <tr>
                <th>상품금액</th>
                <td>230,000원</td>
              </tr>
              <tr>
                <th>자동연장 할인</th>
                <td>-0원</td>
              </tr>
              <tr>
                <th>쿠폰 할인</th>
                <td>-0원</td>
              </tr>
              <tr>
                <th>포인트 사용</th>
                <td>-0원</td>
              </tr>
              <tr>
                <th>결제금액</th>
                <td className="tx-blue80">230,000원</td>
              </tr>
              <tr>
                <th>결제수단</th>
                <td className="td-btn-fr"><span className="tx">무통장</span><Button size="mid" background="blue80" title="영수증 출력" onClick={(e) => rodalPopupHandler13_1(e, "slideUp")} width={120} height={40} /></td>
              </tr>
              <tr>
                <th>세금계산서 발행</th>
                <td>기간만료</td>
              </tr>
            </tbody>
          </table>
          <h4 className="mt80">차량정보</h4>
          <table summary="차량정보에 대한 내용" className="table-tp1">
            <caption className="away">차량정보</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>번호</th>
                <td className="td-btn-fr"><span className="tx">00000000</span><Button size="mid" background="blue80" title="등록차량 보기" onClick={(e) => rodalPopupHandler13_1(e, "slideUp")} width={120} height={40} /></td>
              </tr>
              <tr>
                <th>제조사</th>
                <td>현대 투싼 ix 디젤 2WD LX20 럭셔리</td>
              </tr>
              <tr>
                <th>차량번호</th>
                <td>00가0000</td>
              </tr>
              <tr>
                <th>차량상태</th>
                <td>등록차량</td>
              </tr>
            </tbody>
          </table>
          <Buttons align="center" marginTop={48}>
            <Button size="big" color="blue80" line="blue80" title="인쇄하기" width={172} />
            <Button size="big" background="blue80" title="확인" width={172} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow13_1} type={'slideUp'} closedHandler={modalCloseHandler13_1} title="무통장거래명세서 이력조회" mode="normal" size="small">
        <div className="con-wrap">
          <table summary="무통장거래명세서 이력조회에 대한 내용" className="table-tp1">
            <caption className="away">무통장거래명세서 이력조회</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>주문번호</th>
                <td>1234345</td>
              </tr>
              <tr>
                <th>은행</th>
                <td>농협</td>
              </tr>
              <tr>
                <th>입금액</th>
                <td>230,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow14} type={'slideUp'} closedHandler={modalCloseHandler14} title="영수증/증빙" mode="normal" size="small">
        <div className="con-wrap popup-payment">
          <h4>결제정보</h4>
          <table summary="결제정보에 대한 내용" className="table-tp1">
            <caption className="away">결재정보</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>결제번호</th>
                <td>20190916-0003426</td>
              </tr>
              <tr>
                <th>결제일</th>
                <td>2019-08-16</td>
              </tr>
              <tr>
                <th>결제내용</th>
                <td>상품명</td>
              </tr>
              <tr>
                <th>상품금액</th>
                <td>230,000원</td>
              </tr>
              <tr>
                <th>결제수단</th>
                <td>무통장</td>
              </tr>
              <tr>
                <th>영수증/증빙</th>
                <td>현금영수중</td>
              </tr>
            </tbody>
          </table>
          <p>
            발급영수증 선택(결제후 다음달 5일까지)<br />
            * 현금영수증/세금계산서 중 <b>1개</b>만 증빙자료로 신청이 가능합니다.
          </p>
          <div className="receipt-apply">
            <RadioGroup dataList={[
              { id: 'cash-receipt', value: 1, checked: true, disabled: false, title: '현금영수증 신청' },
              { id: 'tax-invoice', value: 2, checked: false, disabled: false, title: '세금계산서 신청' }
            ]} />
          </div>
          <p>현금영수증 신청내역(신청일: 2019-09-09)</p>
          <table summary="현금영수증 신청내역에 대한 내용" className="table-tp1">
            <caption className="away">현금영수증 신청내역</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>구분</th>
                <td>지출증빙용</td>
              </tr>
              <tr>
                <th>발급내역</th>
                <td>현금영수증 보기</td>
              </tr>
            </tbody>
          </table>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="확인" width={245} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow15} type={'slideUp'} closedHandler={modalCloseHandler15} title="영수증/증빙" mode="normal" size="small">
        <div className="con-wrap popup-payment">
          <h4>결제정보</h4>
          <table summary="결제정보에 대한 내용" className="table-tp1">
            <caption className="away">결재정보</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>결제번호</th>
                <td>20190916-0003426</td>
              </tr>
              <tr>
                <th>결제일</th>
                <td>2019-08-16</td>
              </tr>
              <tr>
                <th>결제내용</th>
                <td>상품명</td>
              </tr>
              <tr>
                <th>상품금액</th>
                <td>230,000원</td>
              </tr>
              <tr>
                <th>결제수단</th>
                <td>무통장</td>
              </tr>
              <tr>
                <th>영수증/증빙</th>
                <td>세금계산서</td>
              </tr>
            </tbody>
          </table>
          <p>
            발급영수증 선택(결제후 다음달 5일까지)<br />
            * 현금영수증/세금계산서 중 <b>1개</b>만 증빙자료로 신청이 가능합니다.
          </p>
          <div className="receipt-apply">
            <RadioGroup dataList={[
              { id: 'cash-receipt', value: 1, checked: false, disabled: false, title: '현금영수증 신청' },
              { id: 'tax-invoice', value: 2, checked: true, disabled: false, title: '세금계산서 신청' }
            ]} />
          </div>
          <p>세금계산서 신청내역(신청일: 2019-09-09)</p>
          <table summary="세금계산서 신청내역에 대한 내용" className="table-tp1">
            <caption className="away">세금계산서 신청내역</caption>
            <colgroup>
              <col width="35%" />
              <col width="65%" />
            </colgroup>
            <tbody>
              <tr>
                <th>발급번호</th>
                <td>2019092103233428</td>
              </tr>
              <tr>
                <th>상호</th>
                <td>(주)글로비스</td>
              </tr>
              <tr>
                <th>상호</th>
                <td>김대표</td>
              </tr>
              <tr>
                <th>담당자명</th>
                <td>김직원</td>
              </tr>
              <tr>
                <th>업태</th>
                <td>도매 및 소매업</td>
              </tr>
              <tr>
                <th>종목</th>
                <td>중고자동차판매</td>
              </tr>
              <tr>
                <th>사업자등록번호</th>
                <td>0123456</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>010-0000-0000</td>
              </tr>
              <tr>
                <th>이메일주소</th>
                <td>00112233@glovis.com</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>서울 강남구 논현동 1234</td>
              </tr>
            </tbody>
          </table>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="확인" width={245} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerSell01
