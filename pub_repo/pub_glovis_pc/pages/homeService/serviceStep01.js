import { useDispatch } from 'react-redux';
import Link from 'next/link';
import AppLayout from '@src/components/layouts/AppLayout';
import MenuItem from '@lib/share/menu/MenuItem';
import MenuTitle from '@lib/share/menu/MenuTitle';
import MenuCont from '@lib/share/menu/MenuCont';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBoxItem from '@lib/share/items/CheckBoxItem';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps';
import { SECTION_HOME_SERVICE } from '@src/actions/types';

const ServiceStep01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_HOME_SERVICE });

  const [performancePop, setPerformancePop, handleOpenPerformancePop, handleClosePerformancePop] = useRodal(true, true);
  const [chkPop2, setChkPop2, handleOpenChkPop2, handleCloseChkPop2] = useRodal(false, true);
  const [chkPop3, setChkPop3, handleOpenChkPop3, handleCloseChkPop3] = useRodal(false, true);
  const [chkPop4, setChkPop4, handleOpenChkPop4, handleCloseChkPop4] = useRodal(false, true);

  return (
    <AppLayout>
      <div className="service-top-banner">
        <div className="content-wrap">
          <h3>홈서비스</h3>
          <p>집으로 배송 받고 3일간 타보고 결정하는 현대 오토벨의 홈서비스</p>
          <i className="top-banner-bg"></i>
        </div>
      </div>
      <div className="service-step">
        <Steps type={1} contents={['차량정보 확인', '보증상품 선택', '계약자정보 입력', '예상결제금액 확인', '신청 완료']} active={1} />
      </div>
      <div className="content-wrap service-wrap">
        <div className="service-tit">
          <h4>차량정보 확인</h4>
        </div>
        <div className="service-detail">
          <ul className="tit-wrap float-wrap">
            <li><h5>벤츠 E-클래스 W213 E200 아방가르드</h5></li>
            <li><p className="price-tp2">4,080<span className="won">만원</span></p></li>
          </ul>
          <div className="service-car-info">
            <div className="img-wrap">
              <img src="/images/dummy/service-car-img.png" alt="홈서비스 차량 이미지" />
            </div>
            <table summary="홈서비스 차량 정보에 대한 내용" className="table-tp1">
              <caption className="away">홈서비스 차량 정보</caption>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>차량번호</th>
                  <td>00아0000</td>
                  <th>연료</th>
                  <td>디젤</td>
                </tr>
                <tr>
                  <th>연식</th>
                  <td>11/16식(17년형)</td>
                  <th>배기량</th>
                  <td>2500cc</td>
                </tr>
                <tr>
                  <th>주행거리</th>
                  <td>9,652 km</td>
                  <th>차종</th>
                  <td>RV</td>
                </tr>
                <tr>
                  <th>변속기</th>
                  <td>오토</td>
                  <th>색상</th>
                  <td>검정</td>
                </tr>
                <tr>
                  <th>사고유무</th>
                  <td>무사고</td>
                  <th>압류/저당</th>
                  <td>무</td>
                </tr>
                <tr>
                  <th>제시번호</th>
                  <td>21363842937</td>
                  <th></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="chk-info-wrap">
            <CheckBoxItem id="chk-performance" checked={performancePop} onClick={handleOpenPerformancePop}>
              <p>차량성능, 상태점검기록부를<br />확인하셨습니까?</p>
              <p className="ico"><i className="ico-checking"></i></p>
            </CheckBoxItem>
            <CheckBoxItem id="chk-insurance" checked={chkPop2} onClick={handleOpenChkPop2}>
              <p>보험이력을<br />확인하셨습니까?</p>
              <p className="ico"><i className="ico-insurance"></i></p>
            </CheckBoxItem>
            <CheckBoxItem id="chk-autobel" checked={chkPop3} onClick={handleOpenChkPop3}>
              <p>현대 오토벨 진단결과를<br />확인하셨습니까?</p>
              <p className="ico"><i className="ico-result"></i></p>
            </CheckBoxItem>
            <CheckBoxItem id="chk-refundterms" checked={chkPop4} onClick={handleOpenChkPop4}>
              <p>홈서비스 환불약관을<br />확인하셨습니까?</p>
              <p className="ico"><i className="ico-refund"></i></p>
            </CheckBoxItem>
          </ul>
        </div>
        <Buttons align="center" marginTop={60}>
          <Button size="big" background="blue80" title="다음 단계로" sub="(보증상품선택)" className="ws1" width={240} height={72} href="serviceStep02" />
        </Buttons>
      </div>
      <RodalPopup show={performancePop} type={'fade'} closedHandler={handleClosePerformancePop} title="성능점검기록부" mode="normal" size="large">
        <div className="con-wrap popup-performance">
          <ul className="tx-wrap">
            <li>본 차량의 성능기록부는 판매자가 직접 입력한 내용으로 모든 책임은 판매자에게 있습니다.</li>
            <li>성능점검기록부를 교부 받은 차량은 인수일 기준 30일 또는 2천km 이내 하자 발생 시 무상수리 및 보상이 가능합니다.</li>
            <li>유효기간은 점검일로부터 120일 이내이며, 유효기간이 지난 경우 재점검 후 교부를 요청하셔야 합니다.</li>
            <li>계약 시 보증수리 주체가 판매자(고지자)인지 점검자인지 확실하지 않다면 매매계약서 약관에 보증수리 주체를 표기한 뒤 유효한 날인을 받으셔야 합니다.</li>
          </ul>
          <table summary="자동차 기본정보에 대한 내용" className="table-tp1">
            <caption>제 1519006659호</caption>
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <tbody>
              <tr>
                <th>차명</th>
                <td className="pd8-12">기아 더 뉴 K7 (12년~16년) 3.0 GDI<br />프레스티지</td>
                <th>차량등록번호</th>
                <td>60가 4397</td>
              </tr>
              <tr>
                <th>연식</th>
                <td>2015년</td>
                <th>검사유효기간</th>
                <td>20180504 ~ 20200503</td>
              </tr>
              <tr>
                <th>최초등록일</th>
                <td>2015년 05월04일</td>
                <th>변속기종류</th>
                <td>자동</td>
              </tr>
              <tr>
                <th>사용연료</th>
                <td>가솔린</td>
                <th>차대번호</th>
                <td>KNAME81ABGS169872</td>
              </tr>
              <tr>
                <th>보증유형</th>
                <td>자가보증</td>
                <th>원동기형식</th>
                <td>D4HB</td>
              </tr>
            </tbody>
          </table>
          <table summary="자동차 종합상태에 대한 내용" className="table-tp1">
            <caption>자동차 종합상태</caption>
            <colgroup>
              <col width="25%" />
              <col width="37.5%" />
              <col width="37.5%" />
            </colgroup>
            <thead>
              <tr>
                <th>사용이력</th>
                <th>상태</th>
                <th>항목 / 해당부품</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>주행거리 계기상태</th>
                <td>양호</td>
                <td></td>
              </tr>
              <tr>
                <th>주행거리 상태</th>
                <td>보통</td>
                <td><span>현재 주행거리</span><em>50,000</em>km</td>
              </tr>
              <tr>
                <th>차대번호 표기</th>
                <td>양호</td>
                <td></td>
              </tr>
              <tr>
                <th rowSpan="2">배출가스</th>
                <td>일산화탄소</td>
                <td><span>일산화탄소(CO)</span><em>0</em>%</td>
              </tr>
              <tr>
                <td>탄화수소</td>
                <td><span>탄화수소(HC)</span><em>0</em>ppm</td>
              </tr>
              <tr>
                <th>튜닝</th>
                <td>없음</td>
                <td></td>
              </tr>
              <tr>
                <th>특별이력</th>
                <td>없음</td>
                <td></td>
              </tr>
              <tr>
                <th>용도변경</th>
                <td>있음</td>
                <td><span>렌트</span></td>
              </tr>
              <tr>
                <th>색상</th>
                <td>무채색</td>
                <td><span>전체도색</span></td>
              </tr>
              <tr>
                <th>주요옵션</th>
                <td>없음</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table summary="성능점검기록부에 대한 내용" className="table-tp1 th-c td-c">
            <caption className="away">성능점검기록부에 대한 내용</caption>
            <colgroup>
              <col width="25%" />
              <col width="30%" />
              <col width="30%" />
              <col width="105%" />
            </colgroup>
            <thead>
              <tr>
                <th>주요장치</th>
                <th>항목</th>
                <th>해당 부품</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="10">원동기</td>
                <td>작동상태</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td></td>
                <td>실린더헤드</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>오일누유</td>
                <td>실린더블럭</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>오일유량 및 오염</td>
                <td></td>
                <td>적정</td>
              </tr>
              <tr>
                <td rowSpan="5">냉각수 누수</td>
                <td>실린더블럭</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>실린더헤드/가스켓</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>워터펌프</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>냉각쿨러(라디에이터)</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>냉각수량 및 오염</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>고압펌프(커먼레일)</td>
                <td></td>
                <td>없음</td>
              </tr>
              <tr>
                <td rowSpan="3">변속기</td>
                <td rowSpan="3">자동변속기 (A/T0)</td>
                <td>오일누유</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>오일유량 및 상태</td>
                <td>적정</td>
              </tr>
              <tr>
                <td>작동상태 (공회전)</td>
                <td>양호</td>
              </tr>
              <tr>
                <td rowSpan="3">동력전달</td>
                <td>클러치 어셈블리</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>등속조인트</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>추진축 및 베어링</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td rowSpan="4">조향</td>
                <td>동력조항 작동 오일 누유</td>
                <td></td>
                <td>없음</td>
              </tr>
              <tr>
                <td rowSpan="3">작동상태</td>
                <td>스티어링 기어</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>스티어링 펌프</td>
                <td>양호</td>
              </tr>
              <tr>
                <td>타이어로드엔드 및 볼조인트</td>
                <td>양호</td>
              </tr>
              <tr>
                <td rowSpan="3">제동</td>
                <td>브레이크 오일 유량상태</td>
                <td></td>
                <td>적정</td>
              </tr>
              <tr>
                <td>브레이크 오일 누유</td>
                <td></td>
                <td>없음</td>
              </tr>
              <tr>
                <td>배력장치 상태</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td rowSpan="5">전기</td>
                <td>발전기 출력</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>시동모터</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>와이퍼기능</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>실내 송풍 모터</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td>라디에이터 팬모터</td>
                <td></td>
                <td>양호</td>
              </tr>
              <tr>
                <td rowSpan="2">기타</td>
                <td>연료 누출</td>
                <td></td>
                <td>없음</td>
              </tr>
              <tr>
                <td>윈도우 모터 작동</td>
                <td></td>
                <td>양호</td>
              </tr>
            </tbody>
          </table>
          <ul className="tx-wrap tit">
            <li>성능 · 상태 점검의 보증에 관한 사항 등</li>
            <li>1. 성능 · 상태점검자 및 매매업자는 아래의 보증기간 또는 보증거리 이내에 중고자동차성능 · 상태점검기록부에 기재된 내용과 자동차의 실제 성능 · 상태가 다른 경우 계약 또는 관계법령에 따라 매수인에 대하여 책임을 집니다.  · 자동차인도일부터 보증기간은 (30)일, 보증거리는 (2000)킬로미터로 합니다. (보증기간은 30일 이내, 보증거리는 2천 킬로미터 이내이어야 하며, 그 중 먼저 도래한 것을 적용합니다.</li>
            <li>2. 중고자동차의 구조 · 장치 등의 성능 · 상태를 허위로 기재하거나 고지한 자는 「자동차관리법」 제80조제6호 내지 제80조제7호에 따라 2년 이하의 징역 또는 500만원 이하의 벌금에 처합니다.</li>
            <li>3. 성능 · 상태점검자가 성능점검에 중대한 과실이 있는 경우 자동차관리법 제21조제2항의 규정에 의한 행정처분의 기준과 절차에 관한 규칙 제5조 제1항에 따라 1차 사업정지 30일, 2차 사업정지 90일, 3차 사업취소 등의 행정처분을 받습니다.</li>
            <li>4. 사고/침수유무(단순수리 제외)는 사고로 자동차 주요골격 부위의 판금, 용접수리 및 교환이 있는 경우로 한정합니다. 단, 루프패널, 쿼터패널, 사이드실패널 부위는 절단, 용접시에만 사고로 표기합니다.(후드, 프론트휀더, 도어, 트렁크리드 등 외판 부위 및 범퍼에 대한 판금, 용접수리 및 교환은 단순수리로서 사고에 포함되지 않습니다.)</li>
            <li>5. 자기진단사항의 경우 중고자동차성능 · 상태점검기록부에 기록하는 것 외에 자기진단기로 측정한 내역을 매수인에게 고지하고 그 내역을 점검일부터 120일간 보관하여야 합니다.(전산정보처리조직에 의하여 보관할 수도 있습니다.)</li>
            <li>6. 성능점검 방법은 자동차검사방법을 준용하여 점검합니다.</li>
            <li>
              7. 체크항목 판단기준ㆍ미세누유(미세누수) : 해당부위에 비치는 정도로 운행에 지장이 없다고 인정되는 부품 노후로 인환 현상<br />
              <span>ㆍ미세누유(미세누수) : 해당부위에 비치는 정도로 운행에 지장이 없다고 인정되는 부품 노후로 인환 현상</span>
              <span>ㆍ누유(누수) : 해당부위에서 오일(냉각수)이 맺혀서 떨어지는 상태</span>
              <span>ㆍ소음/유격 : 부품 노후에 인한 현상으로 결정하기에는 정도가 큰 소음 및 유격</span>
              <span>ㆍ정비요 : 현재 상태로 운행시 해당 부품의 고장으로 운행에 지장을 받을 정도로 수리가 필요한 상태</span>
            </li>
          </ul>
        </div>
      </RodalPopup>
      <RodalPopup show={chkPop2} type={'fade'} closedHandler={handleCloseChkPop2} title="중고차 사고이력 정보 보고서" mode="normal" size="large">
        <div className="con-wrap popup-history">
          <div className="car-info-wrap">
            <p className="name">투싼(TUCSAN)<span>66부00**</span></p>
            <p className="date">정보조회일자 : 2019-09-27</p>
            <Button size="mid" line="gray" ladius={true} title="+ 내용 전체 보기" width={142} height={32} />
            <Button size="mid" line="gray" ladius={true} title="- 항목보기" width={108} height={32} />
          </div>

          <ul className="menu-list history">
            <MenuItem>
              <MenuTitle>
                <h5>1. 중고차 사고이력 정보 (요약)</h5>
              </MenuTitle>
              <MenuCont>
                <ul className="accident">
                  <li><span>전손 보험사고</span>없음</li>
                  <li><span>도난 보험사고</span>없음</li>
                  <li><span>침수 보험사고</span>없음</li>
                  <li><span>특수 용도 이력</span>없음</li>
                  <li><span>내차 피해</span>1회(0원)</li>
                  <li><span>상대차 피해</span>0회(0원)</li>
                  <li><span>소유자 변경</span>0회</li>
                  <li><span>차량번호 변경</span>없음</li>
                </ul>
                <div className="tx-c bg">자동차보험 사고기록이 없었다고 해서 반드시 <b>무사고</b>라고 할 수는 없습니다.</div>
              </MenuCont>
            </MenuItem>
            <MenuItem>
              <MenuTitle>
                <h5>2. 자동차 일반 사양 정보</h5>
              </MenuTitle>
              <MenuCont>
                <p className="tx-l">자동차의 일반적인 사양 정보를 제공합니다.</p>
                <table summary="자동차 일반 사양 정보에 대한 내용" className="table-tp1">
                  <caption className="away">자동차 일반 사양 정보</caption>
                  <colgroup>
                    <col width="25%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>제조사</th>
                      <td>현대</td>
                      <th>연식</th>
                      <td>2015</td>
                    </tr>
                    <tr>
                      <th>자동차명</th>
                      <td>투싼(TUCSAN)</td>
                      <th>차체형상</th>
                      <td>SUV</td>
                    </tr>
                    <tr>
                      <th>배기량</th>
                      <td>1,995cc</td>
                      <th>용도 및 차종</th>
                      <td>자가용 승용</td>
                    </tr>
                    <tr>
                      <th>사용연료</th>
                      <td>디젤</td>
                      <th>최초 보험 가입일자</th>
                      <td>2014년 06월 19일</td>
                    </tr>
                  </tbody>
                </table>
              </MenuCont>
            </MenuItem>
            <MenuItem>
              <MenuTitle>
                <h5>3. 자동차 특수 용도 이력 정보</h5>
              </MenuTitle>
              <MenuCont>
                <p className="tx-l">과거 자동차번호 변경기록을 모두 검색하여 제공하는 것으로 <b>대여용(렌트카), 영업용(택시 등)으로 사용된 적이 있는지</b> 확인할 수 있습니다.</p>
                <ul className="accident special">
                  <li><span>대여용도 사용이력(렌터카)</span>없음</li>
                  <li><span>영업용도 사용이력</span>없음</li>
                  <li><span>관용용도 사용이력</span>없음</li>
                </ul>
              </MenuCont>
            </MenuItem>
            <MenuItem>
              <MenuTitle>
                <h5>4. 자동차 번호/소유자 변경이력 정보</h5>
              </MenuTitle>
              <MenuCont>
                <p className="tx-l">소유자 변경이력 정보는 <b>개인 간의 소유 변경 이외에도 매매상사 간 변경(상품용)까지 모두 포함된 횟수로 제공됩니다.</b> 참고해주시기 바랍니다.</p>
                <table summary="자동차 일반 사양 정보에 대한 내용" className="table-tp1 th-c td-c">
                  <caption className="away">자동차 일반 사양 정보</caption>
                  <colgroup>
                    <col width="25%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>변경등록일</th>
                      <th>소유자 변경</th>
                      <th>차량번호</th>
                      <th>차량용도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2015-06-19</td>
                      <td>-</td>
                      <td>66부****</td>
                      <td>자가용 승용</td>
                    </tr>
                  </tbody>
                </table>
              </MenuCont>
            </MenuItem>
            <MenuItem>
              <MenuTitle>
                <h5>5. 자동차 특수 사고 이력정보</h5>
              </MenuTitle>
              <MenuCont>
                <p className="tx-l">자동차보험에서 보험금이 지급된 자동차 사고기록 중 자동차품질에 특별히 영향을 미칠 가능성이 있는 사고<b>(전손, 도난, 침수사고)</b>를 확인할 수 있습니다.</p>
                <ul className="accident special">
                  <li><span>전손 보험사고</span>없음</li>
                  <li><span>도난 보험사고</span>없음</li>
                  <li><span>침수 보험사고(분손)</span>없음</li>
                </ul>
                <div className="tx-l bg">
                  <b>용어설명</b>
                  <ul className="contents">
                    <li>
                      &#183; 전손 보험사고
                            <span>손상된 자동차의 수리비용이 자동차가치(보험회사에서 적정하다고 인정한)를 초과한 경우(추정전손) 및 손상된 자동차의 수리가 불가능하거나 수리를 하더라도 자도차로서의 기능을 다할 수 없는 경우(절대전손)로 자동차보험에서 보상처리 받은 사고</span>
                    </li>
                    <li>
                      &#183; 도난 보험사고
                            <span>자동차를 도낭 당하여 경찰서에 신고한지 30일이 지나도록 도난 당한 자동차를 찾지 못하여 자동차 보험에서 보상처리 받은 사고</span>
                    </li>
                    <li>
                      &#183; 침수 보험사고
                            <span>자동차를 운행하던 중 자동차 내부로 물이 들어와 시동이 꺼지거나, 주차 중 엔진 등에 물이 들어가 운행이 불가능하게 되어 자동차에 손해가 발생한 경우</span>
                    </li>
                  </ul>
                </div>
              </MenuCont>
            </MenuItem>
            <MenuItem>
              <MenuTitle>
                <h5>6. 보험사고 이력 상세 정보</h5>
              </MenuTitle>
              <MenuCont>
                <div>
                  <p className="tx-c">66부9732 차량이 자기차량손해담보에 <b>가입하지 않은 동안에는 내 보험으로 처리한 사고이력정보의 제공이 불가능</b>합니다.</p>
                  <p className="tx-c bg mb40">미가입 기간:</p>
                  <p className="tx-l lh mb0">
                    보험금 및 수리(견적)비 출처에 따라서 <b>'가입한 보험사에서 지금된 경우(내차 보험)'와 '다른 차량 보험에서 지급된 경우(상대보험)'로 나뉘어 제공</b>됩니다.<br />
                    자동차사고로 상대 차량 또는 재물에 발생한 <b>손해를 내 보험금에서 지급된 경우의 정보를 제공</b>합니다.
                        </p>
                  <p className="tx-l fs15">* 쌍방과실로 해당 자동차의 손상, 수리 기록이 내차 보험과 상대 보험에서 동시에 처리된 경우에는 '내차 보험’ 에만 표시되고 '상대 보험'에서는 생략됩니다.</p>
                </div>
                <table summary="보험사고 이력 상세 정보에 대한 내용" className="table-tp1 th-c td-c mb40">
                  <caption className="away">보험사고 이력 상세 정보</caption>
                  <colgroup>
                    <col width="25%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th rowSpan="2">일자</th>
                      <th colSpan="2">내 차 사고 발생 (피해)</th>
                      <th>상대차 사고 발생 (피해)</th>
                    </tr>
                    <tr>
                      <th>내 차 보험 (처리)</th>
                      <th>상대 보험 (처리)</th>
                      <th>내 차 보험 (처리)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2015-06-19</td>
                      <td>지급보험금: 미확정</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <p className="tx-l lh">
                  <ul className="contents">
                    <li>
                      &#183;&nbsp;<b>카히스토리 자료수집 방법상 일부 오류가 발생 할 수 있습니다.</b> 의심되는 사항이 있으시면 전화주시기 바랍니다.
                          </li>
                    <li>
                      &#183;&nbsp;위 ‘수리(견적)비용’은 보험사가 지급하는 보험금 중에서 대차료, 휴차료 등 간접손해와 과실상계액 등을 제외한 수리 및 견적(부품/공임/도장) 비용으로<br />
                      <b>&nbsp;&nbsp;실제 지급된 보험금과 차이가 있습니다.</b>
                    </li>
                    <li>
                      &#183;&nbsp;보험사고 이력은 <b>최근 10건의 사고만 표시</b> 등됩니다.
                          </li>
                  </ul>
                </p>
                <div className="tx-l bg">
                  <b>용어설명</b>
                  <ul className="contents">
                    <li>
                      &#183; 수리(견적)비용
                            <span>비용자동차사고로 자동차가 손상된 경우 보험회사가 지급하는 보험금 중에서 자동차 운반비, 대차료(렌트비용), 휴차료 등의 간접손해와 과실상계액 등을 제외한, 자동차를 수리하는데 소요되는 비용 또는 견적으로 부품비용, 공임 및 도장료로 이루어집니다.</span>
                    </li>
                    <li>
                      &#183; 미가입기간
                            <span>자기차량손해담보 미가입기간으로 해당기간에 대해서는 자기차량손해담보에 의해 지급된 자동차수리비 정보를 제공할 수 없는 기간</span>
                    </li>
                    <li>
                      &#183; 내 차 보험
                            <span>내 보험으로 처리한 내 차 사고 (대인사고 제외)</span>
                    </li>
                    <li>
                      &#183; 상대 보험
                            <span>다른 차량 보험으로 처리한 내 차 사고 (대인사고 제외)</span>
                    </li>
                    <li>
                      &#183; 상대 차 피해
                            <span>내 보험으로 처리한 상대 차 사고</span>
                    </li>
                  </ul>
                </div>
              </MenuCont>
            </MenuItem>
          </ul>

          <table summary="서비스 이용 정보에 대한 내용" className="table-tp1 th-c service-info">
            <caption className="away">서비스 이용 정보</caption>
            <colgroup>
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th>부가 이용정보</th>
                <th>서비스 이용 제한 안내</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>본 중고차 사고이력정보는 정보조회 일자를 기준으로 작성된 것입니다.</li>
                    <li>본 정보는 자동차 일반정보로서 조회 차량을 확인하기 위하여 참고로 제공하는 것이며, 일부 차량의 경우, 정보의 누락이나 오류가 있을 수 있습니다.</li>
                    <li>침수사고에는 경미한 부분침수도 포함되며, 자료의 누락으로 ‘이력 없음’ 으로 표시되는 경우가 있습니다.</li>
                    <li>카히스토리 자료수집 방법상 오류가 발생할 수 있으니 의심되는 사항이 있으시면 전화 주시기 바랍니다.</li>
                    <li>수리비용은 보험사에서 지급되는 보험금 산정을 위하여 책정된 차량 수리 관련 항목만의 비용으로 실제 지급받은 보험금과 차이가 있을 수 있습니다.</li>
                  </ul>
                </td>
                <td>
                  <li>중고차 사고이력정보 서비스는 자동차 보험을 취급하는 11개 손해보험사의 자동차 보험수리 지급기록(1996년 이후)에 근거하여 제공하고 있습니다. 따라서 다음과 같은 경우는 중고차 이력정보 서비스를 제공할 수 없습니다.</li>
                  <li className="chk">
                    사고가 있었다 하더라도 보험회사에서 사고신고를 하지 않고 자비로 처리한 경우<br />
                    - 사고신고를 하였더라도 면책, 취소 등의 사유로 지급되지 않은 경우<br />
                    - 사고신고 후 자비로 처리한 경우
                        </li>
                  <li className="chk">자동차보험이 아닌 운수 공제(택시공제, 화물공제, 버스공제 등)에 가입되어 운수공제로 부터자동차의 피해에 대한 손해를 보상받은 경우 등</li>
                  <li>본 중고차 사고이력 정보는 중고차 품질확인은 위한 보조정보이며 결정적 판단자료로 사용되어서는 아니됩니다. 따라서 정밀한 중고차 품질확인을 윈하시면 차량진단 전문업체의 진단을 받아보시기 바랍니다.</li>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="history-info-ex">
            <h4>중고차<span className="tx-blue80">사고이력정보</span>서비스는?</h4>
            <p className="tx-c lh mb40">
              중고차사고이력정보서비스는 중고차 거래의 활성화와 중고차 매매시장의 투명성을 높이기 위하여,<br />
              보험개발원에서 보유하고 있거나 수집한 1996년 이후의 자동차관련 정보를 기초로 제공되는 온라인 서비스입니다.<br />
              본 정보는 중고차품질확인을 위한 보조정보로서 자동차와 관련된 모든 사고의 발생 여부나 품질확인을 위한<br />
              결정적인 판단자료로 사용 되어서는 아니 됩니다.따라서 본 정보의 확대해석이나 오·남용으로 발생하는 사항에 대해서<br />
              보험개발원은 어떤 책임도 부담하지 아니합니다.
                  </p>
            <ul>
              <li>중고차 거래<br />활성화</li>
              <li>매매시장<br />투명성</li>
            </ul>
            <p className="tx-c lh">
              보험개발원(<Link href="www.kidi.or.kr"><a>www.kidi.or.kr</a></Link>)은 보험입법 제176조에 의하여 설립된 보험요율산출기관이며,<br />
              중고차사고이력정보서비스(<Link href="www.carhistory.or.kr"><a className="tx-blue80">www.carhistory.or.kr</a></Link>)는 보험업법시행령 제86조 제1호 근거하여 제공합니다.
                  </p>
            <p className="tx-c from"><span>2019.07.12</span>보험개발원</p>
          </div>

        </div>
      </RodalPopup>
      <RodalPopup show={chkPop3} type={'fade'} closedHandler={handleCloseChkPop3} title="차량옵션 3" mode="normal" size="large">
        <div className="con-wrap">
          <h4>제목 dummy</h4>
          <p className="con">컨텐츠 내용이 나옵니다.</p>
        </div>
      </RodalPopup>
      <RodalPopup show={chkPop4} type={'fade'} closedHandler={handleCloseChkPop4} title="차량옵션 4" mode="normal" size="large">
        <div className="con-wrap">
          <h4>제목 dummy</h4>
          <p className="con">컨텐츠 내용이 나옵니다.</p>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ServiceStep01