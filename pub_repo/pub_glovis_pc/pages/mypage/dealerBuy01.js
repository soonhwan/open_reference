import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import PageNavigator from '@src/components/common/PageNavigator';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckBox from '@lib/share/items/CheckBox';
import RadioGroup from '@lib/share/items/RadioGroup';
import SelectBox from '@lib/share/items/SelectBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Textarea from '@lib/share/items/Textarea';
import BannerItem from '@src/components/common/banner/BannerItem';
import moment from 'moment';
import { select1_list, auction_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerBuy01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  const [viewOpt, setViewOpt] = useState(false)
  const handleClick = useCallback((e) => {
    e.preventDefault();
    setViewOpt(prev => !prev);
  }, []);
  const now = moment();
  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.\n입찰하기(or입찰가격 수정) 버튼을 클릭했습니다.`);
  }, []);

  // textarea
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
  // 팝업
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <TabMenu type="type1" mount={false}>
            <TabCont tabTitle="셀프평가 차량" id="tab1-1" index={0}>
              <div className="tender-admin-sec">
                <div className="admin-inquire-sec">
                  <ul className="inquire-tender">
                    <li><CheckBox id='chk-internal' title='국산' /></li>
                    <li><CheckBox id='chk-foreign' title='해외' /></li>
                    <li><SelectBox id="select1" className="items-sbox" options={select1_list} width={224} height={40} placeHolder="제조사/모델/등급" /></li>
                    <li><SelectBox id="select1" className="items-sbox" options={select1_list} width={224} height={40} placeHolder="연식" /></li>
                    <li><Button size="mid" line="gray" title={viewOpt ? "- 상세옵션 설정" : "+ 상세옵션 설정"} width={159} height={40} onClick={handleClick} /></li>
                  </ul>
                  <div className="detail-option-set" style={viewOpt ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                      <li className="opt-gearbox">
                        <p>변속기</p>
                        <CheckBox id='chk-all-1' title='전체' />
                        <table summary="상세 옵션 변속기 선택" className="table-tp1 area">
                          <caption className="away">변속기</caption>
                          <tbody>
                            <tr>
                              <td>
                                <CheckBox id='chk-auto' title='오토' />
                                <CheckBox id='chk-stick' title='수동' />
                                <CheckBox id='chk-semi' title='세미' />
                                <CheckBox id='chk-auto-2' title='오토' />
                                <CheckBox id='chk-cvt' title='CVT' />
                                <CheckBox id='chk-ect' title='기타' />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="opt-area">
                        <p>지역</p>
                        <CheckBox id='chk-all-2' title='전체' />
                        <table summary="상세 옵션 지역 선택" className="table-tp1 area">
                          <caption className="away">지역</caption>
                          <colgroup>
                            <col width="12.5%" />
                            <col width="12.5%" />
                            <col width="12.5%" />
                            <col width="12.5%" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>서울/경인</th>
                              <th>충청/강원</th>
                              <th>영남</th>
                              <th>호남/제주</th>
                            </tr>
                            <tr>
                              <td>
                                <CheckBox id='chk-seoul' title='서울' />
                                <CheckBox id='chk-gyeonggi' title='경기' />
                                <CheckBox id='chk-incheon' title='인천' />
                              </td>
                              <td>
                                <CheckBox id='chk-daejeon' title='대전' />
                                <CheckBox id='chk-sejong' title='세종' />
                                <CheckBox id='chk-chungnam' title='충남' />
                                <CheckBox id='chk-chungbuk' title='충북' />
                                <CheckBox id='chk-Gangwon' title='강원' />
                              </td>
                              <td>
                                <CheckBox id='chk-busan' title='부산' />
                                <CheckBox id='chk-daegu' title='대구' />
                                <CheckBox id='chk-ulsan' title='울산' />
                                <CheckBox id='chk-gyeongnam' title='경남' />
                                <CheckBox id='chk-gyeongbuk' title='경북' />
                              </td>
                              <td>
                                <CheckBox id='chk-gwangju' title='광주' />
                                <CheckBox id='chk-Jeonnam' title='전남' />
                                <CheckBox id='chk-Jeonbuk' title='전북' />
                                <CheckBox id='chk-jeju' title='제주' />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                    <Buttons align="center" marginTop={48}>
                      <Button size="big" background="gray" title="취소" width={172} />
                      <Button size="big" background="blue80" title="검색" width={172} />
                    </Buttons>
                  </div>
                </div>
                <ul className="float-wrap">
                  <li><p>총 {auction_list.length}대</p></li>
                  <li><RadioGroup dataList={[
                    { id: 'latest', value: 1, checked: true, disabled: false, title: '최근 등록 순' },
                    { id: 'imminent', value: 2, checked: false, disabled: false, title: '마감 임박 순' }
                  ]} /><CheckBox id='chk-interest-car-1' title='관심차량만' /></li>
                </ul>
                <ul className="goods-list auction">
                  {
                    auction_list.map((v, i) => {
                      return (
                        <BannerItem key={v.id} name={v.name} image={v.image} alt={v.alt} buttonName={v.buttonName} infos={v.infos} auction={true} limitTime={v.limitTime} limitNum={v.limitNum} btnClick={handleBtnClick} btnId={v.id} />
                      )
                    })
                  }
                </ul>
              </div>
            </TabCont>
            <TabCont tabTitle="낙찰 및 입찰차량 관리" id="tab1-2" index={1}>
              <div className="tender-admin-tab">
                <TabMenu type="type6" defaultTab={0} mount={false}>
                  <TabCont tabTitle="낙찰차량 구매관리" id="tab6-1" index={0}>
                    <div className="tender-admin-sec">
                      <div className="admin-inquire-sec">
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
                      <ul className="float-wrap">
                        <li><p>총 35대</p></li>
                        <li><CheckBox id='chk-interest-car-2-1' title='관심차량만' /></li>
                      </ul>
                      <div className="admin-list tp6">
                        <div className="content-top">
                          <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                            <caption className="away">결제내역</caption>
                            <colgroup>
                              <col width="13%" />
                              <col width="59%" />
                              <col width="13%" />
                              <col width="15%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>낙찰일</th>
                                <th>차량정보</th>
                                <th>진행상태</th>
                                <th>수정/확인</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>2019-09-19</td>
                                <td>
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
                                </td>
                                <td>낙찰완료</td>
                                <td>
                                  <Button size="mid" line="blue80" color="blue80" radius={true} title="방문일자 입력" width={129} marginBottom={8} onClick={(e) => rodalPopupHandler1(e, "fade")} />
                                  <Button size="mid" line="blue80" color="blue80" radius={true} title="거래 지연" width={129} onClick={(e) => rodalPopupHandler2(e, "fade")} />
                                </td>
                              </tr>
                              <tr>
                                <td>2019-09-19</td>
                                <td>
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
                                </td>
                                <td>방문예정<br />2019-09-11</td>
                                <td>
                                  <Button size="mid" line="blue80" color="blue80" radius={true} title="방문일자 입력" width={129} marginBottom={8} />
                                  <Button size="mid" line="blue80" color="blue80" radius={true} title="거래 지연" width={129} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <PageNavigator recordCount={50} className="mt32" />
                        </div>
                      </div>
                    </div>
                  </TabCont>
                  <TabCont tabTitle="입찰완료 내역" id="tab6-2" index={1}>
                    <div className="tender-admin-sec tender-co-sec">
                      <div className="admin-inquire-sec">
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
                      <ul className="float-wrap">
                        <li><p>총 35대</p></li>
                        <li><CheckBox id='chk-interest-car-2-2' title='관심차량만' /></li>
                      </ul>
                      <div className="admin-list tp6">
                        <div className="content-top">
                          <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                            <caption className="away">결제내역</caption>
                            <colgroup>
                              <col width="59%" />
                              <col width="7%" />
                              <col width="7%" />
                              <col width="7%" />
                              <col width="20%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>차량정보</th>
                                <th>선택가</th>
                                <th>최고가</th>
                                <th>내견적</th>
                                <th>진행상태</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
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
                                </td>
                                <td><span>4,420</span>만원</td>
                                <td><span>4,420</span>만원</td>
                                <td><span>4,420</span>만원</td>
                                <td>
                                  <span className="tender-co">낙찰되었습니다</span>
                                  ( 관심 21명 | 입찰 45명 )
                                </td>
                              </tr>
                              <tr>
                                <td>
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
                                </td>
                                <td><span>4,420</span>만원</td>
                                <td><span>4,420</span>만원</td>
                                <td><span>4,420</span>만원</td>
                                <td>
                                  <span className="tender-end">입찰 종료</span>
                                  ( 관심 21명 | 입찰 45명 )
                                </td>
                              </tr>
                              <tr>
                                <td>
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
                                </td>
                                <td><span>4,420</span>만원</td>
                                <td>-</td>
                                <td>-</td>
                                <td>
                                  <Button size="mid" background="blue80" title="입찰 가격 수정" width={160} />
                                  ( 관심 21명 | 입찰 45명 )
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <PageNavigator recordCount={50} className="mt32" />
                        </div>
                      </div>
                    </div>
                  </TabCont>
                </TabMenu>
              </div>
            </TabCont>
          </TabMenu>
        </div>
      </div>
      <RodalPopup show={rodalShow1} type={'fade'} closedHandler={modalCloseHandler1} title="방문일자 입력" mode="normal" size="small">
        <div className="con-wrap popup-tender-admin">
          <ul>
            <li>
              <span class="tit">방문일자 선택</span>
              <DatePicker defaultValue={now} inputWidth={276} inputHeight={40} />
            </li>
            <li>
              <span class="tit">방문시간 선택</span>
              <span className="bridge"><SelectBox id="select1" className="items-sbox" options={select1_list} width={134} height={40} placeHolder="00" /></span>
              <SelectBox id="select1" className="items-sbox" options={select1_list} width={134} height={40} placeHolder="00" />
            </li>
            <li>
              <span class="tit">지역 선택</span>
              <span className="bridge"><SelectBox id="select1" className="items-sbox" options={select1_list} width={134} height={40} placeHolder="시/도" /></span>
              <SelectBox id="select1" className="items-sbox" options={select1_list} width={134} height={40} placeHolder="구/군" />
            </li>
          </ul>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={127} />
            <Button size="big" background="blue80" title="입력완료" width={127} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow2} type={'fade'} closedHandler={modalCloseHandler2} title="거래지연 사유 입력" mode="normal" size="small">
        <div className="con-wrap popup-tender-admin">
          <Textarea countLimit={500} type="tp1" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} placeHolder="사유를 입력하세요."/>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={127} />
            <Button size="big" background="blue80" title="입력완료" width={127} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerBuy01
