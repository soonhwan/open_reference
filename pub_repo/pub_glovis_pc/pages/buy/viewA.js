import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import AppLayout from '@src/components/layouts/AppLayout';
import SlideGallery from '@src/components/common/banner/SlideGallery';
import BannerItem from '@src/components/common/banner/BannerItem';
import CarOptions from '@src/components/common/CarOptions';
import BuyViewCarPrice from '@src/components/common/BuyViewCarPrice';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import CheckBox from '@lib/share/items/CheckBox';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Textarea from '@lib/share/items/Textarea';
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import FilterRange from '@lib/share/items/FilterRange';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import useScroll from '@lib/share/custom/useScroll';
import { car_list, car_gallery } from '@src/dummy';
import { SECTION_BUY } from '@src/actions/types';

const ViewA = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_BUY });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [counselPopupShow, setCounselPopupShow, openCounselPopup, closeCounselPopup] = useRodal(false, true);
  const [notifyPopupShow, setNotifyPopupShow, openNotifyPopup, closeNotifyPopup] = useRodal(true, true);

  // 탭메뉴 스크롤
  const { currentY } = useScroll();
  const calH = 190; // 픽스되는 요소들의 높이 합산된 값
  const [isTab, setIsTab] = useState(null); // 픽스되는 탭의 index
  const [isFix, setIsFix] = useState(false); // 탭 픽스 활성화 유무

  useEffect(() => {
    const getScroll = (el, direction = "top") => {
      const targetScroll = (direction === "top")
        ? document.querySelector(el).getBoundingClientRect().top
        : document.querySelector(el).getBoundingClientRect().bottom;
      return targetScroll + window.scrollY - calH;
    }
    if (currentY < getScroll('#scroll-tab1')) {
      setIsFix(false);
      setIsTab(null);
    } else {
      setIsFix(true);
      if (currentY >= getScroll('#scroll-tab1') && currentY < getScroll('#scroll-tab2')) {
        setIsTab(0);
      } else if (currentY >= getScroll('#scroll-tab2') && currentY < getScroll('#scroll-tab3')) {
        setIsTab(1);
      } else if (currentY >= getScroll('#scroll-tab3') && currentY < getScroll('#scroll-tab3', "bottom")) {
        setIsTab(2);
      } else if (currentY >= getScroll('#scroll-tab3', "bottom")) {
        setIsTab(null);
        setIsFix(false);
      }
    }
  }, [currentY]);

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap view-wrap">
          <ul className="tit-wrap">
            <li className="tit"><h3>제네시스 G80 3.3 Premium 럭셔리</h3></li>
            <li className="fr">
              <CheckBox id='chk-like' />
            </li>
            <li>
              <div className="tag-wrap">
                <em className="tag-tp1 tx-blue60">EX</em>
                <em className="tag-tp1 tx-purple">홈서비스</em>
                <em className="tag-tp1 tx-sky">수입인증</em>
              </div>
            </li>
          </ul>

          <div className="info-wrap">
            <div className="view-car-img">
              <SlideGallery car_gallery={car_gallery} />
            </div>
            <BuyViewCarPrice dealerInfo={true} />
          </div>

          <ul className="float-wrap">
            <li>
              <Tooltip placement="topLeft" width={340} exception="sns-share" event="click">
                <TooltipItem>
                  <Button size="mid" line="gray" radius={true} title="공유하기" width={86} />
                </TooltipItem>
                <TooltipCont>
                  <ul className="ico-list ico-sns-wrap">
                    <li>
                      <i className="ico-talk"></i>
                      <span className="ico-class">카카오톡</span>
                    </li>
                    <li>
                      <i className="ico-facebook"></i>
                      <span className="ico-class">페이스북</span>
                    </li>
                    <li>
                      <i className="ico-url"></i>
                      <span className="ico-class">URL복사</span>
                    </li>
                  </ul>
                </TooltipCont>
              </Tooltip>
              <Button size="mid" line="gray" radius={true} title="허위매물 신고" width={115} />
            </li>
            <li>
              <CheckBox id='chk-like-2' className="heart" title='48' />
              <CheckBox id='chk-count' className="count" title='198' />
            </li>
          </ul>
        </div>
      </div>

      <div className={isFix === false ? "detail-wrap" : "detail-wrap is-area-fix"}>
        <div className="tit-wrapper">
          <ul className="tit-wrap">
            <li className="img-wrap">
              <img src="/images/dummy/view-thumb-img.jpg" alt="차량 이미지" />
            </li>
            <li className="tit">
              <h3>제네시스 G80 3.3 Premium 럭셔리</h3>
            </li>
            <li className="fr">
              <p className="price-tp1">3,750<span className="won">만원</span></p>
              <Button size="big" line="black" color="black" title="총비용 계산" width={180} />
              <Button size="big" line="red60" color="red60" title="온라인 구매하기" width={180} />
            </li>
          </ul>
        </div>
        <TabMenu type="type1" mount={false} isScroll={true} defaultTab={isTab} isFix={isFix} mode="fix" calH={190}>
          <TabCont tabTitle="옵션 정보" id="scroll-tab1" index={0}>
            <div className="content-wrap">
              <table summary="차량 기본정보에 대한 내용" className="table-tp3">
                <caption>차량 기본정보</caption>
                <colgroup>
                  <col width="9%" />
                  <col width="18%" />
                  <col width="9%" />
                  <col width="18%" />
                  <col width="9%" />
                  <col width="18%" />
                  <col width="9%" />
                  <col width="10%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>차량번호</th>
                    <td>47러0383</td>
                    <th>연료</th>
                    <td>가솔린</td>
                    <th>변속기</th>
                    <td>오토</td>
                    <th>색상</th>
                    <td>회색</td>
                  </tr>
                  <tr>
                    <th>연식</th>
                    <td>11/16식(17년형)</td>
                    <th>배기량</th>
                    <td>3,342cc</td>
                    <th>사고유무</th>
                    <td>무사고</td>
                    <th>압료/저당</th>
                    <td>무</td>
                  </tr>
                  <tr>
                    <th>주행거리</th>
                    <td>53,436 KM</td>
                    <th>차종</th>
                    <td>대형차</td>
                    <th>제시번호</th>
                    <td rowSpan="3">21363842937</td>
                  </tr>
                </tbody>
              </table>
              <CarOptions title="차량 옵션" type={2} />
              <div className="state-wrap fl">
                <ul className="float-wrap">
                  <li>
                    <h4>보험이력</h4>
                  </li>
                  <li>
                    <Button size="mid" line="gray" radius={true} title="보험이력 자세히 보기" width={162} />
                  </li>
                </ul>
                <table summary="보험이력 정보에 대한 내용" className="table-tp3">
                  <caption className="away">보험이력</caption>
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>보험처리이력 등록기준일</th>
                      <th>자동차 용도 변경</th>
                    </tr>
                    <tr>
                      <td>2019.10.20</td>
                      <td>이력 없음</td>
                    </tr>
                    <tr>
                      <th colSpan="2">자동차 특수사고 이력</th>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <table summary="자동차 특수사고 이력 정보에 대한 내용" className="table-tp1 th-c td-c">
                          <caption className="away">자동차 특수사고 이력</caption>
                          <colgroup>
                            <col width="25%" />
                            <col width="25%" />
                            <col width="25%" />
                            <col width="25%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>전손</th>
                              <th>도난</th>
                              <th>침수전손</th>
                              <th>침수분손</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <ul className="tx-wrap">
                          <li>&#8251; 본 차량의 보험처리 이력정보는 2019년03월11일에 조회한 내용입니다.</li>
                          <li>&#8251; 이후 이력 정보의 업데이트가 있을 수 있으며, 보험 이력 조회서비스에서 확인 가능합니다.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="state-wrap fr">
                <ul className="float-wrap">
                  <li>
                    <h4>성능점검 정보</h4>
                  </li>
                  <li>
                    <Button size="mid" line="gray" radius={true} title="성능점검 자세히 보기" width={162} />
                  </li>
                </ul>
                <table summary="성능점검 정보에 대한 내용" className="table-tp3">
                  <caption className="away">성능점검 정보</caption>
                  <colgroup>
                    <col width="15%" />
                    <col width="15%" />
                    <col width="35%" />
                    <col width="35%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th colSpan="4">자동차 상태표시</th>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <table summary="자동차 상태표시 정보에 대한 내용" className="table-tp1 th-c td-c">
                          <caption className="away">자동차 상태표시</caption>
                          <colgroup>
                            <col width="33.33%" />
                            <col width="33.33%" />
                            <col width="33.33%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>교환(교체)</th>
                              <th>판금/용접</th>
                              <th>흠집</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>없음</td>
                              <td>없음</td>
                              <td>없음</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <th>사고이력</th>
                      <td>없음</td>
                      <th>성능/상태 점검자</th>
                      <td>(사)한국자동차기술인협회</td>
                    </tr>
                    <tr>
                      <th>단순수리</th>
                      <td>없음</td>
                      <th>성능/상태 점검일</th>
                      <td>2019.10.18</td>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <ul className="tx-wrap">
                          <li>&#8251; 단순교환은 사고에 포함되지 않습니다.</li>
                          <li>&#8251; 본 성능점검기록부 내용은 판매자가 직접 입력한 내용입니다.</li>
                          <li>&#8251; 차량의 상담이나 방문전 성능점검기록부와 차량등록증을 팩스로 요청하시어 차량의 성능점검기록 내용이 일치하는지 확인하실 것을 권장드립니다.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabCont>
          <TabCont tabTitle="차량 정보" id="scroll-tab2" index={1}>
            <div className="content-sec">
              <div className="content-wrap info-wrap">
                <div className="video">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url='https://www.glovis.net/upload/main_video01.mp4'
                      playing={true}
                      loop={true}
                      controls={true}
                      muted={true}
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                </div>
                <div>
                  <h4>Key Point</h4>
                  <ul className="img-wrap">
                    <li><img src="/images/dummy/view-info-img-01.jpg" alt="key-point 이미지 01" /></li>
                    <li><img src="/images/dummy/view-info-img-02.jpg" alt="key-point 이미지 02" /></li>
                    <li><img src="/images/dummy/view-info-img-03.jpg" alt="key-point 이미지 03" /></li>
                  </ul>
                  <p>파노라마 썬루프로 시원한 개방감! 깔끔한 실내관리로 최상의 실내상태</p>
                </div>
                <div>
                  <h4>Wear&amp;Tear</h4>
                  <ul className="img-wrap">
                    <li><img src="/images/dummy/view-info-img-04.jpg" alt="wear&tear 이미지 01" /></li>
                    <li><img src="/images/dummy/view-info-img-05.jpg" alt="wear&tear 이미지 02" /></li>
                  </ul>
                  <p>뒷좌석 시트 미세 스크레치 있음, 운전석 휠 일부 스크레치 존재</p>
                </div>
                <div>
                  <h4>이 차의 History</h4>
                  <dl>
                    <dt>전 차주 정보</dt>
                    <dd>해당 차량은 오토벨 시화센터에서 낙찰 받은 차량입니다.</dd>
                    <dt>단순수리</dt>
                    <dd>신차 출고가 6,010만원 상당!! 신차급 차량을 약 400~500만원 상당 저렴하게 만나 보실 수 있습니다.</dd>
                    <dd>제네시스 G80과 함께 편안하고 안락한 드라이빙을 즐길 수 있습니다.</dd>
                  </dl>
                </div>
                <div>
                  <h4>진단소견</h4>
                  <dl>
                    <dt>본 차량상태</dt>
                    <dd>사고여부: 무사고</dd>
                    <dd>차량모델: 제네시스 G80</dd>
                    <dd>차량연식: 2016년 11월 (2017년형)</dd>
                    <dd>차량색상: 회색</dd>
                    <dd>주행거리: 53,436km</dd>
                    <dt>관리상태</dt>
                    <dd>내외관 깔끔하며 무사고 차량이며, 하체잡소리하나 없습니다.</dd>
                    <dd>타이어4짝 모두 트레이드 좋습니다. 기름만 주유 후 운행하시면 됩니다.</dd>
                    <dd>시운전 강력추천드리며, 친절상담약속드립니다.</dd>
                  </dl>
                </div>
                <div>
                  <h4>기타</h4>
                  <p>
                    <span>
                      타시고 계시던 차량 대차&amp;폐차 가능 합니다.<br />
                      보증서비스 가입으로 엔진,미션,일반부품까지 최대 365일 2만km 까지 보증 받으실 수 있습니다.<br />
                      할부서비스로 차량금액 전액 할부 가능 합니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </TabCont>
          <TabCont tabTitle="판매자 정보" id="scroll-tab3" index={2}>
            <div className="content-wrap seller-wrap">
              <div className="seller-info-tp1">
                <div className="img-wrap">
                  <img src="/images/dummy/dealer-img-big.png" alt="판매자 이미지" />
                  <a href="#" onClick={(e) => openCounselPopup(e, "fade")}></a>
                </div>
                <div className="tx-wrap">
                  <ul>
                    <li>판매자
                      <span>장기용</span>
                      <em>(좋은차상사)</em>
                    </li>
                    <li>종사원증 번호
                      <span>A1240B56</span>
                    </li>
                    <li>연락처
                      <span>050-0000-0000</span>
                    </li>
                    <li>판매중
                      <span className="tx-blue60">21</span>
                    </li>
                    <li>판매완료
                      <span className="tx-blue60">35</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="map-wrap">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8997624344956!2d127.01552801565039!3d37.51028223510467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3de09019397%3A0xcc5f8d201cd1f459!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDsnqDsm5Drj5kg7Iug67CY7Y-s66GcIDMxMQ!5e0!3m2!1sko!2skr!4v1571620018249!5m2!1sko!2skr" allowFullScreen></iframe>
              </div>
              <table summary="판매자 기본정보에 대한 내용" className="table-tp3">
                <caption className="away">판매자 정보</caption>
                <colgroup>
                  <col width="10%" />
                  <col width="40%" />
                  <col width="10%" />
                  <col width="40%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>판매점</th>
                    <td>좋은차상사</td>
                    <th>전화</th>
                    <td>050-0000-0000</td>
                  </tr>
                  <tr>
                    <th rowSpan="2">영업시간</th>
                    <td rowSpan="2">
                      월~토요일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)<br />
                      일요일/공휴일 휴무
                    </td>
                    <th>팩스</th>
                    <td>050-0000-0000</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>경기도 용인시 기흥구 중부대로 242 N301호</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabCont>
        </TabMenu>
      </div>

      <div className="content-sec">
        <div className="content-wrap goods-wrap">
          <div className="goods-banner">
            <div className="img-wrap">
              <img src="/images/contents/view-banner-bg.jpg" alt="현대캐피탈 중고차론 배너" />
            </div>
          </div>
          <div className="list-wrap">
            <h4>오토벨스마트추천</h4>
            <ul className="goods-list">
              {car_list.map((v, i) => {
                if (i < 4) {
                  return (
                    <BannerItem key={v.id} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
                  )
                }
              })}
            </ul>
          </div>
          <div className="list-wrap">
            <h4>동급 차량 추천</h4>
            <ul className="goods-list">
              {car_list.map((v, i) => {
                if (i < 4) {
                  return (
                    <BannerItem key={v.id} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <RodalPopup show={counselPopupShow} type={'fade'} closedHandler={closeCounselPopup} mode="normal" title="1:1 쪽지 상담" size="small">
        <div className="popup-inquire">
          <div className="inquire-wrap">
            <p className="tit-exp">받는 사람<span>현딜러(오토오토 경기점)</span></p>
            <Textarea countLimit={400} type="tp1" height={320} />
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="gray" title="취소" width={180} height={60} />
              <Button size="big" background="blue80" title="확인" width={180} height={60} />
            </Buttons>
            {/* <div className="co-wrap">
              <p>
                <span><i className="ico-counsel"></i></span>
                쪽지가 성공적으로<br />발송되었습니다.
              </p>
            </div>
            <p className="co-exp">* 답변은 마이페이지 > 쪽지함 > 받은 쪽지함에서 확인하실 수 있습니다.</p>
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="blue80" title="확인" width={180} height={60} />
            </Buttons> */}
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={notifyPopupShow} type={'fade'} closedHandler={closeNotifyPopup} mode="normal" title="허위 매물 신고" size="small">
        <div className="popup-inquire">
          <div className="inquire-wrap top">
            <table summary="허위 매물 신고 차량 정보에 대한 내용" className="table-tp1">
              <caption className="away">허위 매물 신고 차량</caption>
              <colgroup>
                <col width="28%" />
                <col width="72%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>등록번호</th>
                  <td>12454801</td>
                </tr>
                <tr>
                  <th>신고차량번호</th>
                  <td>23다 4567</td>
                </tr>
                <tr>
                  <th>차량정보</th>
                  <td>기아 니로 프레스티지</td>
                </tr>
              </tbody>
            </table>
            <p className="table-exp">고객님께서 허위매물로 인한 피해를 신고해주세요.<br />(신고내용은 비공개입니다.)</p>
          </div>
          <div className="inquire-wrap bottom">
            <ul className="float-wrap">
              <li><p>신고 내용에 대한 답변을 받으시겠습니까?</p></li>
              <li>
                <CheckBox id='chk-areee' title='동의' />
                <CheckBox id='chk-disagree' title='미동의' />
              </li>
            </ul>
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="gray" title="취소" width={180} height={60} />
              <Button size="big" background="blue80" title="확인" width={180} height={60} />
            </Buttons>
          </div>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ViewA