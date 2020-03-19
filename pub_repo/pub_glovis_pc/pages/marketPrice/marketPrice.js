import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import DatePicker from '@src/components/common/calendar/DatePicker';
import PriceLineChart from '@src/components/marketPrice/priceLineChart';
import AppLayout from '@src/components/layouts/AppLayout';
import CarOptions from '@src/components/common/CarOptions';
import SearchCar from '@src/components/common/SearchCar';
import CheckColors from '@src/components/common/CheckColors';
import CarNameMod from '@src/components/common/CarNameMod';
import MarketPriceTitle from '@src/components/common/MarketPriceTitle';
import MarketPriceGraph from '@src/components/common/MarketPriceGraph';
import useToggle from '@lib/share/custom/useToggle';
import Button from '@lib/share/items/Button'
import Buttons from '@lib/share/items/Buttons'
import CheckBox from '@lib/share/items/CheckBox';
import RadioGroup from '@lib/share/items/RadioGroup'
import RadioItem from '@lib/share/items/RadioItem';
import Input from '@lib/share/items/Input';
import FilterRange from '@lib/share/items/FilterRange';
import ColoredScrollbars from '@lib/share/items/ColoredScrollbars';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MARKET_PRICE } from '@src/actions/types';

const MarketPrice = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MARKET_PRICE });

  const now = moment();

  const [isMode, setIsMode] = useState("CarCondition"); // CarNumber(차량 번호로 조회), CarCondition(차량 조건검색)
  const [withoutGrade, setWithoutGrade] = useState(false); // isMode가 CarNumber(차량 번호로 조회)일 경우 상세등급 정보의 노출 유무 (boolean), default는 false

  // 차량 검색 탭
  const handleSearchCarCond = useCallback((e) => {
    e.preventDefault();
    setIsMode("CarCondition");
  }, []);
  const handleSearchCarNumber = useCallback((e) => {
    e.preventDefault();
    setIsMode("CarNumber");
  }, []);

  // 차량 정보 수정
  const [toggle1, onToggle1] = useToggle(false)
  const [toggle2, onToggle2] = useToggle(false)

  //주행거리
  const [distanceRange, setDistanceRange] = useState({ min: 0, max: 200000 })

  // 팝업
  const [namePopupShow, setNamePopupShow, openNamePopup, closeNamePopup] = useRodal(false, true);
  const [colorPopupShow, setColorPopupShow, openColorPopup, closeColorPopup] = useRodal(false, true);
  const [gradePopupShow, setGradePopupShow, openGradePopup, closeGradePopup] = useRodal(false, true);
  const [detailPopupShow, setDetailPopupShow, openDetailPopup, closeDetailPopup] = useRodal(false, true);
  const [reportPopupShow, setReportPopupShow, openReportPopup, closeReportPopup] = useRodal(false, true);

  const [detailMarginTop, setDetailMarginTop] = useState(170); // 상세사양보기 팝업의 위치를 설정

  // 상세사양보기 팝업
  const handleDetailPopup = (num) => (e) => {
    e.preventDefault();
    setDetailMarginTop(170+(num*73));
    setDetailPopupShow(true);
  };

  // 색상 팝업
  const handleClickColor = useCallback(() => {
    setColorPopupShow(false);
    document.getElementsByTagName('html')[0].style.overflow = "auto";
  }, []);
  const handleCloseColor = useCallback(() => {
    setColorPopupShow(false);
    document.getElementsByTagName('html')[0].style.overflow = "auto";
  }, []);

  // const chartData = {
  //   labels: ['현재', '3개월', '6개월', '9개월', '12개월'],
  //   lineTension: 0.1,
  //   lineWidth: 5,
  //   lineBorderColor: 'rgba(62, 99, 195, 1)',
  //   backgroundColor: '#ffffff',
  //   borderColor: 'rgba(113,113,113,1)',
  //   recommandBackgroundColor: 'rgba(121, 147, 213, 1)',
  //   notRecommandBackgroundColor: 'rgba(255, 110, 76, 1)',
  //   horizontalLineFontColor: 'red',
  //   horizontalLineBorderColor: '#d9dada',
  //   verticalLineFontColor: 'rgba(113,113,113,1)',
  //   verticalLineBorderColor: '#d9dada',
  //   pointFillColor: '#fff',
  //   pointStrokeColor: 'rgba(60,97,194,1)',
  //   pointRedius: 8,
  //   pointLineWidth: 5,
  //   values: [4980, 4900, 4780, 4610, 4500],
  //   valueToolTipFillColor: 'rgba(113,113,113,1)',
  //   valueToolTipStrokeColor: 'rgba(113,113,113,1)',
  //   font: '12px magenta',
  //   labelFontColor: 'rgba(113,113,113,1)',
  //   yStep: 100,
  //   xStep: 80,
  //   showYLable: false
  // };

  // const pieChartData = {
  //   minPrice: 2000,
  //   maxPrice: 7000,
  //   marketMinPrice: 3000,
  //   marketMaxPrice: 5500,
  //   price: 5000
  // };

  return (
    <AppLayout>
      <div className="market-top-banner">
        <div className="content-wrap">
          <h3>시세조회</h3>
          <p>현대 오토벨을 통해, 내차를 팔 때 중고 시세를 편리하게 조회할 수 있습니다.</p>
          <i className="top-banner-bg" />
        </div>
      </div>
      <div className="content-wrap market-wrap">
        <SearchCar type="marketPrice" onClickArr={[handleSearchCarCond, handleSearchCarNumber]} />
        {
          isMode === "CarCondition" && // 차량 조건 검색 시
          <>
            <MarketPriceTitle withoutGrade={withoutGrade} onClick={openNamePopup} />
            <MarketPriceGraph />
          </>
        }
        {
          isMode === "CarNumber" && // 차량 번호 조회 시
          <>
            <ul className="tit-wrap float-wrap">
              <li className="tit">
                <h4>현대 LF쏘나타 하이브리드 2.0 HEV 프리미엄<i className="ico-pencil" onClick={(e) => openNamePopup(e, "fade")}></i></h4>
              </li>
              <li>
                <Button size="mid" line="black" color="black" title="시세리포트 출력" width={146} onClick={(e) => openReportPopup(e, "fade")} />
              </li>
            </ul>
            <form className="register-form">
              <fieldset>
                <legend className="away">차량 정보 조회</legend>
                <div className="market-car-info">
                  <div className="img-wrap">
                    <img src="/images/dummy/market-car-img.png" alt="내 차량 이미지" />
                  </div>
                  <table summary="차량 정보에 대한 내용" className="table-tp1 input">
                    <caption className="away">차량 정보</caption>
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>차량번호</th>
                        <td>09소0119</td>
                        <th>차량연식</th>
                        <td>2016년</td>
                      </tr>
                      {
                        withoutGrade === false
                        && (
                          <>
                            <tr>
                              <th>배기량</th>
                              <td>1,999cc</td>
                              <th>신차출고가</th>
                              <td>
                                {
                                  toggle1 === false
                                    ? <span>
                                      3,851만원
                                    <i className="ico-pencil" onClick={onToggle1}></i>
                                    </span>
                                    : <>
                                      <label htmlFor="fac-price" className="hide">신차출고가</label>
                                      <Input type="text" placeHolder="" id="fac-price" width={160} height={40} />
                                      <em>만원</em>
                                    </>
                                }
                              </td>
                            </tr>
                            <tr>
                              <th>연료</th>
                              <td>가솔린 + 전기</td>
                              <th>최초등록일</th>
                              <td>
                                {
                                  toggle2 === false
                                    ? <span>
                                      2016톁 4월 18일
                                  <i className="ico-pencil" onClick={onToggle2}></i>
                                    </span>
                                    : <DatePicker defaultValue={now} inputWidth={160} inputHeight={40} />
                                }
                              </td>
                            </tr>
                          </>
                        )
                      }
                    </tbody>
                  </table>
                  {withoutGrade === true &&
                    <Buttons align="center">
                      <Button size="mid" background="blue80" radius={true} title="해당 등급을 선택하세요" width={160} marginTop={40} onClick={(e) => openGradePopup(e, "fade")} />
                    </Buttons>
                  }
                </div>

                <CarOptions more="false" type={2} mode="check" />

                <div className="market-add-info">
                  <ul className="distance">
                    <li>주행거리를 선택해주세요</li>
                    <li><FilterRange rangeUnit="주행거리" initMin={0} initMax={200000} defaultValue={distanceRange} step={5000} onChange={value => setDistanceRange(value)} /></li>
                  </ul>
                  <ul className="color">
                    <li>차량 색상을 선택해주세요</li>
                    <li>
                      <CheckBox id='chk-white' title='흰색' />
                    </li>
                    <li>
                      <CheckBox id='chk-pearl' className="chip-pearl chk-black" title='진주색' />
                    </li>
                    <li>
                      <CheckBox id='chk-black' className="chip-black chk-white" title='검정색' />
                    </li>
                    <li>
                      <CheckBox id='chk-black2' className="chip-black2 chk-white" title='검정투톤' type='chk-color2' />
                    </li>
                    <li>
                      <CheckBox id='chk-gray' className="chip-gray chk-white" title='쥐색' />
                    </li>
                  </ul>
                  <Button color="blue80" title="색상더보기" iconType='plus-blue' onClick={(e) => openColorPopup(e, "fade")} />
                </div>
              </fieldset>
            </form>
            <MarketPriceGraph />
            <Buttons align="center" marginTop={56}>
              <Button size="big" background="blue80" title="조회차량 판매하기" width={202} href="/sell/sellHome" />
            </Buttons>
          </>
        }
      </div>

      <div className="content-sec">
        <div className="content-wrap market-banner">
          <div className="pic"></div>
          <div className="con">
            <p>
              <span>나에게 어울리는 내차 팔기 방법은?</span>
              믿을 수 있는 현대오토벨에서 편리하게 내 차를 팔 수 있게 도와드립니다.<br />
              나에게 맞는 방법을 확인해보세요.
            </p>
            <Button size="big" background="blue80" title="내차 파는 방법 보기" width={202} marginTop={56} href="/sellHome" />
          </div>
        </div>
      </div>

      {/* <div className="report-con">
        <div className="report-cur-price">
          <p className="report-price-tit">현재시세</p>
          <p className="report-price-exp">가격단위 : 만원</p>
          <div className="cur-price-graph">
            <PricePieChart width={430} height={250} lineHeight={40} data={pieChartData} />
          </div>
        </div>
        <div className="report-fut-price">
          <p className="report-price-tit">미래시세</p>
          <p className="report-price-exp">가격단위 : 만원</p>
          <div className="fut-price-graph">
            <PriceLineChart width={390} height={200} lineHeight={40} data={chartData} />
          </div>
        </div>
      </div> */}

      <RodalPopup show={namePopupShow} type={'fade'} closedHandler={closeNamePopup} mode="normal" className="pop-car-name-mod" width={894}>
        <div className="con-wrap">
          <CarNameMod />
        </div>
      </RodalPopup>

      <RodalPopup show={colorPopupShow} type={'fade'} closedHandler={closeColorPopup} title="주요색상" mode="normal" width={894}>
        <div className="con-wrap">
          <CheckColors isTitle={false} onClick={handleClickColor} onClose={handleCloseColor} />
        </div>
      </RodalPopup>

      <RodalPopup show={gradePopupShow} type={'fade'} closedHandler={closeGradePopup} mode="normal" width={440}>
        <div className="popup-grade">
          <div className="grade mt28">
            <ColoredScrollbars autoHeightMax={287}>
              <RadioGroup dataList={[
                { id: 'grade1', value: 1, checked: true, disabled: false, title: '스마트' },
                { id: 'grade2', value: 2, checked: false, disabled: false, title: '모던' },
                { id: 'grade3', value: 3, checked: false, disabled: false, title: '프리미엄' },
                { id: 'grade4', value: 4, checked: false, disabled: false, title: '모던 스페셜' },
                { id: 'grade5', value: 5, checked: false, disabled: false, title: '프리미엄 스페셜' }
              ]} mode="vertical">
                <RadioItem key={'radio1'}><Button size="mid" line="gray" radius={true} title="상세사양보기" width={106} onClick={handleDetailPopup(0)} /></RadioItem>
                <RadioItem key={'radio2'}><Button size="mid" line="gray" radius={true} title="상세사양보기" width={106} onClick={handleDetailPopup(1)} /></RadioItem>
                <RadioItem key={'radio3'}><Button size="mid" line="gray" radius={true} title="상세사양보기" width={106} onClick={handleDetailPopup(2)} /></RadioItem>
                <RadioItem key={'radio4'}><Button size="mid" line="gray" radius={true} title="상세사양보기" width={106} onClick={handleDetailPopup(3)} /></RadioItem>
                <RadioItem key={'radio5'}><Button size="mid" line="gray" radius={true} title="상세사양보기" width={106} onClick={handleDetailPopup(4)} /></RadioItem>
              </RadioGroup>
            </ColoredScrollbars>
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={detailPopupShow} type={'fade'} closedHandler={closeDetailPopup} mode="normal" width={440} marginLeft={-140} marginTop={detailMarginTop}>
        <div className="popup-grade">
          <ul className="float-wrap">
            <li className="tit">스마트</li>
            <li className="price">23,000,000원</li>
          </ul>
          <div className="grade">
            <ColoredScrollbars autoHeightMax={287}>
              <ul className="con">
                <li>- 후륜구동</li>
                <li>- 3.7리터 7단 자동변속기</li>
                <li>- 헤드램프 워셔</li>
                <li>- 스크래치 쉴드 페인트</li>
              </ul>
            </ColoredScrollbars>
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={reportPopupShow} type={'fade'} closedHandler={closeReportPopup} mode="normal" size="large" >
        <div className="popup-report">
          <div className="report-wrap">
            <div className="report-tit">
              <div className="img-wrap">
                <img src="/images/common/ico-certification.svg" alt="오토벨 인증마크" />
              </div>
              <div className="tit-wrap">
                <span className="num">NO.1029-018279</span>
                <span className="date">발급일 2019.10.10</span>
                <h5 className="tit">AUTOBELL PRICING REPORT<em>오토벨에서 제공하는 내차판매 시, 시세정보입니다.</em></h5>
                <div className="qr-wrap">
                  <span>QR코드인증</span>
                  <div className="img-wrap">
                    <img src="/images/dummy/qr-code.png" alt="qr코드" />
                  </div>
                </div>
              </div>
            </div>

            <div className="report-info">
              <div className="img-wrap">
                <img src="/images/dummy/market-car-img.png" alt="내 차량 이미지" />
              </div>
              <div className="car-info">
                <p className="car-name">현대 LF쏘나타 하이브리드 2.0 HEV 프리미엄</p>
                <table summary="차량 정보에 대한 내용" className="table-report">
                  <caption className="away">차량 정보</caption>
                  <colgroup>
                    <col width="20%" />
                    <col width="40%" />
                    <col width="20%" />
                    <col width="20%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>차량번호</th>
                      <td>09소0119</td>
                      <th>주행거리</th>
                      <td>62,180km</td>
                    </tr>
                    <tr>
                      <th>차량연식</th>
                      <td>2016년</td>
                      <th>색상</th>
                      <td>흰색</td>
                    </tr>
                    <tr>
                      <th>연료</th>
                      <td>전기 + 가솔린</td>
                      <th>배기량</th>
                      <td>1,999 cc</td>
                    </tr>
                    <tr>
                      <th>최초등록일</th>
                      <td>2016년 4월 18일</td>
                      <th>신차출고가</th>
                      <td>3,851 만원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="car-option">
                <li className="on">
                  <i className="ico-sunroof"></i>
                  <span>썬루프</span>
                </li>
                <li className="on">
                  <i className="ico-navigation"></i>
                  <span>네비게이션</span>
                </li>
                <li className="on">
                  <i className="ico-smartcruze"></i>
                  <span>크루즈컨트롤</span>
                </li>
                <li className="on">
                  <i className="ico-hud"></i>
                  <span>HUD</span>
                </li>
                <li className="on">
                  <i className="ico-around-view"></i>
                  <span>어라운드뷰</span>
                </li>
                <li className="on">
                  <i className="ico-smart-key"></i>
                  <span>스마트키</span>
                </li>
              </ul>
            </div>

            <ul className="report-price">
              <li>
                <span className="tit">현재시세<span>가격단위: 만원</span></span>
                <span className="con"><img src="/images/dummy/graph1.jpg" alt="현재시세 그래프" /></span>
              </li>
              <li>
                <span className="tit">미래시세<span>가격단위: 만원</span></span>
                <span className="con"><img src="/images/dummy/graph2.jpg" alt="미래시세 그래프" /></span>
              </li>
            </ul>

            <div className="report-msg">
              <p>“본 Report견적은 무사고 기준이며, 1주일간 유효합니다.”</p>
            </div>
          </div>
          <Buttons align="center" className="w-line">
            <Button size="mid" background="blue80" title="시세리포트 출력하기" width={170} marginTop={35} />
          </Buttons>
        </div>
      </RodalPopup>

    </AppLayout>
  );
};

export default MarketPrice;
