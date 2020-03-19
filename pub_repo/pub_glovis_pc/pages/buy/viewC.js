import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import AppLayout from '@src/components/layouts/AppLayout';
import BannerItem from '@src/components/common/banner/BannerItem';
import CarOptions from '@src/components/common/CarOptions';
import LiveStudio from '@src/components/common/LiveStudio';
import BuyViewCarPrice from '@src/components/common/BuyViewCarPrice';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import CheckBox from '@lib/share/items/CheckBox';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import useScroll from '@lib/share/custom/useScroll';
import { car_list, car_gallery } from '@src/dummy';
import { SECTION_BUY } from '@src/actions/types';

const ViewC = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_BUY });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [autobellPopupShow, setAutobellPopupShow, openAutobellPopup, closeAutobellPopup] = useRodal(true, true);

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
        <div className="content-wrap view-wrap live">
          <LiveStudio car_gallery={car_gallery} />

          <div className="info-wrap">
            <div className="view-car-name">
              <ul className="tit-wrap">
                <li className="tit"><h3>제네시스 G80 3.3 GDI AWD<br />프리미엄 럭셔리</h3></li>
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
              <div className="seller-info-tp2">
                <div className="img-wrap">
                  <img src="/images/dummy/dealer-img-mid.png" alt="판매자 이미지" />
                  <a href="#"></a>
                </div>
                <div className="tx-wrap">
                  <p className="veiw-point-tit">현딜러(오토오토 경기점)</p>
                  <span>050-0000-0000</span>
                </div>
                <ul>
                  <li>판매중<span className="blue80">24</span></li>
                  <li>판매완료<span className="blue80">32</span></li>
                </ul>
              </div>
            </div>
            <BuyViewCarPrice buttonType={2} />
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
            <div className="content-wrap pt0">
              <CarOptions title="차량 옵션" type={2} />
              <div className="autobell-wrap">
                <div className="tit-wrap bg">
                  <p>해당 차량은 라이브스튜디오 진단 점검 중 [완전 <span>무사고</span> 차량]입니다.</p>
                  <Buttons align="center" marginTop={17}>
                    <Button size="mid" line="gray" radius={true} title="보험이력 자세히 보기" width={162} />
                    <Button size="mid" line="gray" radius={true} title="성능점검 자세히 보기" width={162} />
                  </Buttons>
                </div>
                <ul>
                  <li>
                    <div className="label-img-wrap">
                      <span>외부패널</span>
                      <div className="img-wrap">
                        <img src="/images/contents/car-outside-img.png" alt="자동차 외부패널" />
                      </div>
                    </div>
                    <table summary="외부패널에 대한 내용" className="table-tp3">
                      <caption className="away">외부패널</caption>
                      <colgroup>
                        <col width="27%" />
                        <col width="23%" />
                        <col width="27%" />
                        <col width="23%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>후드</th>
                          <td>정상</td>
                          <th>트렁크리드</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>프론트휀더</th>
                          <td>정상</td>
                          <th>루프패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>도어</th>
                          <td><span className="w">판금/용접</span></td>
                          <th>퀴터패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>라디에이터<br />서포트<br /><em>(볼트체결부품)</em></th>
                          <td><span className="x">교환</span></td>
                          <th>사이드실패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <div className="label-img-wrap">
                      <span>주요골격</span>
                      <div className="img-wrap">
                        <img src="/images/contents/car-inside-img.png" alt="자동차 주요골격" />
                      </div>
                      <ul className="car-record-label">
                        <li><i className="ico-state-w on"></i>판금/용접</li>
                        <li><i className="ico-state-x on"></i>교환</li>
                      </ul>
                    </div>
                    <table summary="주요골격에 대한 내용" className="table-tp3">
                      <caption className="away">주요골격</caption>
                      <colgroup>
                        <col width="27%" />
                        <col width="23%" />
                        <col width="27%" />
                        <col width="23%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>프론트패널</th>
                          <td>정상</td>
                          <th>대쉬패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>크로스맴버</th>
                          <td>정상</td>
                          <th>플로어패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>인사이드패널</th>
                          <td>정상</td>
                          <th>필러패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>사이드멤버</th>
                          <td><span className="w">판금/용접</span></td>
                          <th>리어패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>휠하우스</th>
                          <td><span className="x">교환</span></td>
                          <th>트렁크 플로어</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
              <Buttons align="center" marginTop={40}>
                <Button size="big" background="blue80" title="오토벨 상세진단서" width={243} height={60} onClick={(e) => openAutobellPopup(e, "fade")} />
              </Buttons>
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
                  <a href="#"></a>
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

      <RodalPopup show={autobellPopupShow} type={'fade'} closedHandler={closeAutobellPopup} mode="normal" title="오토벨 상세진단서" size="large">
        <div className="con-wrap popup-autobell">
          <TabMenu type="type1" mount={false}>
            <TabCont tabTitle="진단평가 결과" id="tab1-1" index={0}>
              <div className="autobell-wrap">
                <div className="tit-wrap bg">
                  <p>해당 차량은 라이브스튜디오 진단 점검 중 [완전 <span>무사고</span> 차량]입니다.</p>
                  <Buttons align="center" marginTop={17}>
                    <Button size="mid" line="gray" radius={true} title="보험이력 자세히 보기" width={162} />
                    <Button size="mid" line="gray" radius={true} title="성능점검 자세히 보기" width={162} />
                  </Buttons>
                </div>
                <ul>
                  <li>
                    <div className="label-img-wrap">
                      <span>외부패널</span>
                      <div className="img-wrap">
                        <img src="/images/contents/car-outside-img.png" alt="자동차 외부패널" />
                      </div>
                    </div>
                    <table summary="외부패널에 대한 내용" className="table-tp3">
                      <caption className="away">외부패널</caption>
                      <colgroup>
                        <col width="27%" />
                        <col width="23%" />
                        <col width="27%" />
                        <col width="23%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>후드</th>
                          <td>정상</td>
                          <th>트렁크리드</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>프론트휀더</th>
                          <td>정상</td>
                          <th>루프패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>도어</th>
                          <td><span className="w">판금/용접</span></td>
                          <th>퀴터패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>라디에이터<br />서포트<br /><em>(볼트체결부품)</em></th>
                          <td><span className="x">교환</span></td>
                          <th>사이드실패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <div className="label-img-wrap">
                      <span>주요골격</span>
                      <div className="img-wrap">
                        <img src="/images/contents/car-inside-img.png" alt="자동차 주요골격" />
                      </div>
                      <ul className="car-record-label">
                        <li><i className="ico-state-w on"></i>판금/용접</li>
                        <li><i className="ico-state-x on"></i>교환</li>
                      </ul>
                    </div>
                    <table summary="주요골격에 대한 내용" className="table-tp3">
                      <caption className="away">주요골격</caption>
                      <colgroup>
                        <col width="27%" />
                        <col width="23%" />
                        <col width="27%" />
                        <col width="23%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>프론트패널</th>
                          <td>정상</td>
                          <th>대쉬패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>크로스맴버</th>
                          <td>정상</td>
                          <th>플로어패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>인사이드패널</th>
                          <td>정상</td>
                          <th>필러패널</th>
                          <td><span className="w">판금/용접</span></td>
                        </tr>
                        <tr>
                          <th>사이드멤버</th>
                          <td><span className="w">판금/용접</span></td>
                          <th>리어패널</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                        <tr>
                          <th>휠하우스</th>
                          <td><span className="x">교환</span></td>
                          <th>트렁크 플로어</th>
                          <td><span className="x">교환</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </TabCont>
            <TabCont tabTitle="진단기준" id="tab1-2" index={1}>
              <div className="autobell-wrap">
                <div className="tit-wrap">
                  <h4>오토벨 라이브 스튜디오 <span>진단 분류 기준</span></h4>
                </div>
                <table summary="오토벨 라이브 스튜디오 진단 분류 기준에 대한 내용" className="table-tp1 th-c td-c">
                  <caption className="away">오토벨 라이브 스튜디오 진단 분류 기준</caption>
                  <colgroup>
                    <col width="33.33%" />
                    <col width="33.33%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>완전무사고</th>
                      <th>무사고</th>
                      <th>유사고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>사고이력 없음</td>
                      <td>외부패널의 교체 및 수리</td>
                      <td>골격의 교체 및 수리</td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-exp">
                  완전무사고 :  교환, 판금, 도색, 사고이력이 없는 한 건의 수리도 받지 않은 정비이력을 가진 차량<br />
                  무사고 : 골격이나 성능에 문제가 없지만, 가벼운 사고로 차량 외관 일부분을 구리 및 교체한 차량<br />
                  유사고 차량 : 자동차의 주요 프레임(골격)을 교체했거나 구리한 이력이 있는 차량
                </p>
                <table summary="차량 교체 및 수리 주요 위치에 대한 내용" className="table-tp1 th-c">
                  <caption className="away">차량 교체 및 수리 주요 위치</caption>
                  <colgroup>
                    <col width="10%" />
                    <col width="90%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>외부패널</th>
                      <td>후드/프론트휀더/도어/트렁크리드/라디에이터 서포트/루프패널/퀴터패널/사이드실패널</td>
                    </tr>
                    <tr>
                      <th>주요골격</th>
                      <td>프론트패널/크로스맴버/인사이드패널/사이드멤버/휠하우스/대쉬패널/플로어패널/필러패널/리어패널/트렁크플로어</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabCont>
            <TabCont tabTitle="점검 결과" id="tab1-3" index={2}>
              <div className="autobell-wrap">
                <div className="tit-wrap bg">
                  <h4>오토벨 라이브 스튜디오  <span>66가지 점검</span> 보기</h4>
                  <ul>
                    <li>양호 <span className="tx-blue60">20</span></li>
                    <li>수리/보수 <span className="tx-red60">46</span></li>
                  </ul>
                  <Button size="mid" line="gray" radius={true} title="인쇄하기" width={85} />
                </div>
                <table summary="차량정보에 대한 내용" className="table-tp1 th-c td-c">
                  <caption>1. 차량정보</caption>
                  <colgroup>
                    <col width="33.33%" />
                    <col width="33.33%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>점검 내용</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>제조사</th>
                      <td>제조사 내용 입력</td>
                      <td>제조사 내용 입력</td>
                    </tr>
                    <tr>
                      <th>모델</th>
                      <td>모델 내용 입력</td>
                      <td>모델 내용 입력</td>
                    </tr>
                    <tr>
                      <th>등급</th>
                      <td>등급 내용 입력</td>
                      <td>등급 내용 입력</td>
                    </tr>
                    <tr>
                      <th>색상</th>
                      <td>색상 내용 입력</td>
                      <td>색상 내용 입력</td>
                    </tr>
                    <tr>
                      <th>주행거리</th>
                      <td>주행거리 내용 입력</td>
                      <td>주행거리 내용 입력</td>
                    </tr>
                    <tr>
                      <th>차대번호</th>
                      <td>차대번호 내용 입력</td>
                      <td>차대번호 내용 입력</td>
                    </tr>
                    <tr>
                      <th>최초등록일</th>
                      <td>최초등록일 내용 입력</td>
                      <td>최초등록일 내용 입력</td>
                    </tr>
                    <tr>
                      <th>리콜 여부</th>
                      <td>리콜 여부 내용 입력</td>
                      <td>리콜 여부 내용 입력</td>
                    </tr>
                  </tbody>
                </table>
                <table summary="외장에 대한 내용" className="table-tp1 th-c td-c">
                  <caption>2. 외장</caption>
                  <colgroup>
                    <col width="33.33%" />
                    <col width="33.33%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>점검 내용</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>앞 유리 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>뒷 유리 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>창문 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>스티커 제거(규정 외)</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>광택 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>와이퍼 작동 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>덴트, 흡칩 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>도장 상태(페인트)</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>휠 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>타이어 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>번호판 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>플라스틱류 부품 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <table summary="실내에 대한 내용" className="table-tp1 th-c td-c">
                  <caption>3. 실내</caption>
                  <colgroup>
                    <col width="33.33%" />
                    <col width="33.33%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>점검 내용</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>실내 상태(마모, 흡집, 파손)</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>실내 세정 확인</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>금연 차량 여부</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>글로브박스 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>대시보드 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>실내 장식 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>룸미러, 거울 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>유리창 내면 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>트렁크 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>모든 시트 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>모든 매트 상태</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>안전벨트 청결 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>악취 처리/제거 확인</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>루프 라이닝 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>보조키 확인</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>매뉴얼 확인</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>스페어 타이어(KIT) 확인</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>도어 및 내장 트림 상태</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>스티커 제거(규정 외)</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <table summary="기능에 대한 내용" className="table-tp1 th-c td-c">
                  <caption>4. 기능</caption>
                  <colgroup>
                    <col width="33.33%" />
                    <col width="33.33%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>점검 내용</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>모든 잠금장치 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>스마트키 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>모든 실내등 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>외부 라이트 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>계기판 등 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>메모리 시트 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>전동 시트조절 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>열선 스티어링 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>창문 개폐 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>썬루프 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>경적 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>시트 열선, 통풍, 마사지 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>12v 충전 단자, USB 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>안전벨트 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>에어컨, 히터 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>네비게이션 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>후방 카메라 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>360 어라운드 뷰 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>주차 보조 시스템 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>후방 카메라 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>360 어라운드 뷰 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>주차 보조 시스템 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>컨버터블 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>모든 수납공간 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>스피커 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>라디오, DMB 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>블루투스 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>헤드업 디스플레이 작동</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>뒷좌석 엔터테이먼트 작동</th>
                      <td>양호</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>실내, 실외 개조 및 튜닝 확인</th>
                      <td>수리/보수필요</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabCont>
            <TabCont tabTitle="보상범위" id="tab1-4" index={3}>
              <div className="autobell-wrap">
                <div className="tit-wrap">
                  <h4>보상범위에 대한 한도 고지</h4>
                </div>
                <p className="tit-exp">라이브스튜디오에서 차량명, 옵션, 사고유무에 대하여 점검오류 및 누락이 발생하였을 경우 이로 인해 발생한 고객의 피해는 오토벨 진단 보상프로그램에 의거하여 진단 서비스의 경우 진단 후 3개월 /5천 km이내 진단비의 최대 20배까지 보상해 드립니다.</p>
                <table summary="보상범위에 대한 한도 고지에 대한 내용" className="table-tp1 th-c td-c">
                  <caption className="away">보상범위에 대한 한도 고지</caption>
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>사고여부</th>
                      <th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>진단비의 20배 이내</td>
                      <td>보상범위 내에서 <span className="tx-blue80">사고 감가표</span> 적용</td>
                    </tr>
                  </tbody>
                </table>
                <table summary="사고감가표에 대한 내용" className="table-tp1 th-c td-c">
                  <caption>사고감가표</caption>
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>평가항목</th>
                      <th>감가율</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>앞펜더(부위별)</th>
                      <td>2%</td>
                    </tr>
                    <tr>
                      <th>본넷교체</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>플라스틱 라디에이터 서포트</th>
                      <td>1%</td>
                    </tr>
                    <tr>
                      <th>프론트패널</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>A필러 (부위별)</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>B필러(부위별)</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>사이드실(부위별)</th>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <th>인사이드패널 (부위별)</th>
                      <td>1%</td>
                    </tr>
                    <tr>
                      <th>휠하우스(부위별)</th>
                      <td>6%</td>
                    </tr>
                    <tr>
                      <th>뒤휠하우스(부위별)</th>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <th>트렁크플로어패널</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>도어(부위별)</th>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <th>루프패널</th>
                      <td>8%</td>
                    </tr>
                    <tr>
                      <th>우물정자프레임</th>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <th>리어패널</th>
                      <td>3%</td>
                    </tr>
                    <tr>
                      <th>퀴터패널(부위별)</th>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <th>뒤휠하우스(부위별)</th>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <th>침수차량</th>
                      <td>20%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="table-exp">* 거래금액은 오토벨 3개월 평균시세의 10% 이상은 인정하지 않는다.</p>
              </div>
            </TabCont>
          </TabMenu>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ViewC