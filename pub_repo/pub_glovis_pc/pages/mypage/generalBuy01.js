import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "next/router";
import uuid from "uuid";
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import SelectBox from '@lib/share/items/SelectBox';
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import SlideAnimate from '@lib/share/items/SlideAnimate';
import ImgCover from '@lib/share/items/ImgCover';
import { SECTION_MYPAGE } from '@src/actions/types';
import { numberFormat } from '@src/utils/CommonUtil';
import { wishCarList } from '@src/dummy';
import Link from 'next/link';

const generalBuy01 = ({router}) => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  
  // 팝업
  const [deleteShow, setDeleteShow, deletePopupHandler, deleteCloseHandler] = useRodal(false, true);
  const [comparisonShow, setComparisonShow, comparisonPopupHandler, comparisonCloseHandler] = useRodal(false, true);

  const [toogleTable1, setToogleTable1] = useState(false)
  const [toogleTable2, setToogleTable2] = useState(false)
  const slideToggle1 = useCallback((e) => {
    e.preventDefault();
    setToogleTable1(prevTable => !prevTable);
  }, []);
  const slideToggle2 = useCallback((e) => {
    e.preventDefault();
    setToogleTable2(prevTable => !prevTable);
  }, []);

  const { result } = router.query;
  const [withoutList, setWithoutList] = useState(result === "no" ? true : false);
  
  // 목록 더보기
  const [listData, setListData] = useState(wishCarList);
  const createDummy = (num) => {
    const dummyArr = [];
    for (let i=0; i<num; i++) {
      dummyArr.push({
        id: uuid.v4(),
        imgSrc: "/images/dummy/product-img-06.png",
        imgAlt: "새로 추가된 차량 이미지",
        subject: "새로 추가된 차 이름",
        info1: ["00가0000", "09/12식(10년형)"],
        info2: ["84,761km", "오토", "디젤"],
        price: numberFormat(9999),
        sellerName: "박현대",
        sellerMobile: "010-3333-7777",
        location: "서울/강서구"
      });
    }
    return dummyArr;
  }
  const handleListMore = useCallback((e) => {
    e.preventDefault();
    const dummyData = createDummy(5);    
    setListData(listData => [...listData, ...dummyData]);
  }, []);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-buy-sec">
          <div className="mypage-admin-title">
            <h3>관심 차량</h3>
            <p className="tx-exp-tp5">&#8251; 최근 3개월간 관심차량으로 등록한 차량의 정보입니다.</p>
            <p className="tx-exp-tp5">&#8251; 판매완료/삭제/관심등록 3개월 이전 차량은 자동 삭제됩니다.</p>
          </div>

          <div className="list-wrap">
            <div className="list-tit">
              <Button size="mid" line="gray" radius={true} title="선택한 차량 비교" width={129} height={38} onClick={result === "no" ? e => e.preventDefault() : (e) => comparisonPopupHandler(e, "fade")}/>
              <Button size="mid" line="gray" radius={true} title="선택한 차량 삭제" width={129} height={38} marginLeft={16} onClick={result === "no" ? e => e.preventDefault() : (e) => deletePopupHandler(e, "fade")} />
              <SelectBox id="select1" className="items-sbox" options={[
                { value: '1', label: '등록 순' },
                { value: '2', label: '가격 순' }
              ]} width={148} height={36} placeHolder="등록 순" />
            </div>
            <div className="admin-list tp7 chk">
              <div className="content-top">
                <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                  <caption className="away">결제내역</caption>
                  <colgroup>
                    <col width="36px" />
                    <col width="51%" />
                    <col width="14%" />
                    <col width="14%" />
                    <col width="12%" />
                    <col width="7%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th><CheckBox id='register-car-chk1' /></th>
                      <th>차량정보</th>
                      <th>가격</th>
                      <th>판매가</th>
                      <th>지역</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  {
                    withoutList === false
                      ? (
                        <tbody>
                          {listData.map(v => {
                            return (
                              <tr key={v.id}>
                                <td><CheckBox id="register-car-chk1" /></td>
                                <td>
                                  <Link href="#">
                                    <a>
                                    <ImgCover src={v.imgSrc} alt={v.imgAlt} />
                                    <div className="summary">
                                      <h4 className="subject">{v.subject}</h4>
                                      <ul className="info">{v.info1.map((v, i) => <li key={i}>{v}</li>)}</ul>
                                      <ul className="info">{v.info2.map((v, i) => <li key={i}>{v}</li>)}</ul>
                                    </div>
                                    </a>
                                  </Link>
                                </td>
                                <td><p className="price-tp6">{numberFormat(v.price)}<span className="won">만원</span></p></td>
                                <td className="seller">{v.sellerName}<br />{v.sellerMobile}</td>
                                <td>{v.location}</td>
                                <td><button className="btn-close" onClick={(e) => deletePopupHandler(e, "fade")}></button></td>
                              </tr>
                            )
                          })}
                          <tr className="more">
                            <td colSpan="6" className="more">
                              <div className="cate-list-btn2">
                                <button onClick={handleListMore}>더보기</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          <tr className="list-none">
                            <td colSpan="6">
                              관심차량으로 등록한 차량이 없습니다.<br />
                              <Button size="big" background="blue80" title="차량검색 하러 가기" width={245} height={60} marginTop={16} href="/buy/list" />
                            </td>
                          </tr>
                        </tbody>
                      )
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RodalPopup show={comparisonShow} type={'slideUp'} closedHandler={comparisonCloseHandler} mode="normal" size="large">
        <div className="con-wrap popup-comparison">
          <div className="tit-wrap">
            <h5>비교하기<span>&#8251; 최대 4개까지 비교가 가능합니다.</span></h5>
            <Buttons align="right">
              <Button size="mid" line="gray" radius={true} title="모두 삭제" width={118} height={36} />
              <Button size="mid" line="gray" radius={true} title="프린트" width={119} height={36} />
            </Buttons>
          </div>
          
          <table className="table-tp1" summary="결제내역에 대한 내용">
            <caption className="away">차량 비교하기</caption>
            <colgroup>
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <td className="pd8-12">
                  사진을 마우스로 드래그하여 위치를 변경할 수 있습니다.
                </td>
                <td className="pd8-12">
                  <div className="img-cover">
                    <img src="/images/dummy/list-auction-img-1.png" alt="차량 이미지" />
                  </div>
                  <Button size="mid" line="gray" radius={true} title="삭제하기" width={118} height={36} marginTop={10} />
                </td>
                <td className="pd8-12">
                  <div className="img-cover">
                    <img src="/images/dummy/list-auction-img-1.png" alt="차량 이미지" />
                  </div>
                  <Button size="mid" line="gray" radius={true} title="삭제하기" width={118} height={36} marginTop={10} />
                </td>
                <td className="pd8-12">
                  <div className="img-cover">
                    <img src="/images/dummy/list-auction-img-1.png" alt="차량 이미지" />
                  </div>
                  <Button size="mid" line="gray" radius={true} title="삭제하기" width={118} height={36} marginTop={10} />
                </td>
                <td className="pd8-12">
                  <div className="img-cover">
                    <img src="/images/dummy/list-auction-img-1.png" alt="차량 이미지" />
                  </div>
                  <Button size="mid" line="gray" radius={true} title="삭제하기" width={118} height={36} marginTop={10} />
                </td>
              </tr>
              <tr>
                <th>차량명</th>
                <td className="pd8-12">현대 투싼ix 디젤 2WDLX20 럭셔리</td>
                <td className="pd8-12">현대 투싼ix 디젤 2WDLX20 럭셔리</td>
                <td className="pd8-12">현대 투싼ix 디젤 2WDLX20 럭셔리</td>
                <td className="pd8-12">현대 투싼ix 디젤 2WDLX20 럭셔리</td>
              </tr>
              <tr>
                <th>차량번호</th>
                <td>01루6534</td>
                <td>01루6534</td>
                <td>01루6534</td>
                <td>01루6534</td>
              </tr>
              <tr>
                <th>최초 등록일자</th>
                <td>2019.07.25</td>
                <td>2019.07.25</td>
                <td>2019.07.25</td>
                <td>2019.07.25</td>
              </tr>
              <tr>
                <th className="bg-sky60">총 가격(예상)<Button size="mid" line="gray" radius={true} title={toogleTable1 ? "닫기" : "펼침"} width={38} height={32} onClick={slideToggle1} /></th>
                <td>878만원</td>
                <td>878만원</td>
                <td>878만원</td>
                <td>878만원</td>
              </tr>
            </tbody>
          </table>
          <SlideAnimate toggle={toogleTable1}>
            <table className="table-tp1" summary="결제내역에 대한 내용">
              <caption className="away">차량 비교하기</caption>
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <tbody>
                <tr>
                  <th className="bg-sky60">판매가</th>
                  <td>800만원</td>
                  <td>800만원</td>
                  <td>800만원</td>
                  <td>800만원</td>
                </tr>
                <tr>
                  <th className="bg-sky60">이전등록비(예상)</th>
                  <td>78만원</td>
                  <td>78만원</td>
                  <td>78만원</td>
                  <td>78만원</td>
                </tr>
                <tr>
                  <th className="bg-sky60">
                    월 할부금
                    <SelectBox id="select1" className="items-sbox" options={[
                      { value: '1', label: '12개월' },
                      { value: '2', label: '24개월' },
                      { value: '2', label: '36개월' },
                      { value: '2', label: '48개월' },
                      { value: '2', label: '60개월' }
                    ]} width={93} height={40} placeHolder="12개월" />
                  </th>
                  <td>73만 1천원</td>
                  <td>73만 1천원</td>
                  <td>73만 1천원</td>
                  <td>73만 1천원</td>
                </tr>
              </tbody>
            </table>
          </SlideAnimate>
          <table className="table-tp1 table-last-child" summary="결제내역에 대한 내용">
            <caption className="away">차량 비교하기</caption>
            <colgroup>
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <th>차종</th>
                <td>SUV</td>
                <td>SUV</td>
                <td>SUV</td>
                <td>SUV</td>
              </tr>
              <tr>
                <th>연식</th>
                <td>13/08식</td>
                <td>13/08식</td>
                <td>13/08식</td>
                <td>13/08식</td>
              </tr>
              <tr>
                <th>주행거리</th>
                <td>110,939 km</td>
                <td>110,939 km</td>
                <td>110,939 km</td>
                <td>110,939 km</td>
              </tr>
              <tr>
                <th>변속기</th>
                <td>오토</td>
                <td>오토</td>
                <td>오토</td>
                <td>오토</td>
              </tr>
              <tr>
                <th>색상</th>
                <td>블랙</td>
                <td>블랙</td>
                <td>블랙</td>
                <td>블랙</td>
              </tr>
              <tr>
                <th>연료/배기랑</th>
                <td>가솔린/2,495 cc</td>
                <td>가솔린/2,495 cc</td>
                <td>가솔린/2,495 cc</td>
                <td>가솔린/2,495 cc</td>
              </tr>
              <tr>
                <th>인승/도어수</th>
                <td>7인승/4도어</td>
                <td>7인승/4도어</td>
                <td>7인승/4도어</td>
                <td>7인승/4도어</td>
              </tr>
              <tr>
                <th className="bg-sky60">옵션개수<Button size="mid" line="gray" radius={true} title={toogleTable2 ? "닫기" : "펼침"} width={38} height={32} onClick={slideToggle2} /></th>
                <td>16개</td>
                <td>16개</td>
                <td>16개</td>
                <td>16개</td>
              </tr>
            </tbody>
          </table>
          <SlideAnimate toggle={toogleTable2}>
            <table className="table-tp1" summary="결제내역에 대한 내용">
              <caption className="away">차량 비교하기</caption>
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <tbody>
                <tr>
                  <th className="bg-sky60">주요옵션리스트</th>
                  <td className="pd8-12">
                    <ul className="option-list">
                      <li className="on">헤드램프(HID)</li>
                      <li>헤드램프(LED)</li>
                      <li>파워 전동 트렁크</li>
                      <li>열선 스티어링 휠</li>
                      <li>전동 조절 스티어링 휠</li>
                      <li>패들 시프트</li>
                      <li className="on">하이패스</li>
                    </ul>
                  </td>
                  <td className="pd8-12">
                    <ul className="option-list">
                      <li className="on">헤드램프(HID)</li>
                      <li>헤드램프(LED)</li>
                      <li>파워 전동 트렁크</li>
                      <li>열선 스티어링 휠</li>
                      <li>전동 조절 스티어링 휠</li>
                      <li>패들 시프트</li>
                      <li className="on">하이패스</li>
                    </ul>
                  </td>
                  <td className="pd8-12">
                    <ul className="option-list">
                      <li className="on">헤드램프(HID)</li>
                      <li>헤드램프(LED)</li>
                      <li>파워 전동 트렁크</li>
                      <li>열선 스티어링 휠</li>
                      <li>전동 조절 스티어링 휠</li>
                      <li>패들 시프트</li>
                      <li className="on">하이패스</li>
                    </ul>
                  </td>
                  <td className="pd8-12">
                    <ul className="option-list">
                      <li className="on">헤드램프(HID)</li>
                      <li>헤드램프(LED)</li>
                      <li>파워 전동 트렁크</li>
                      <li>열선 스티어링 휠</li>
                      <li>전동 조절 스티어링 휠</li>
                      <li>패들 시프트</li>
                      <li className="on">하이패스</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </SlideAnimate>
          <table className="table-tp1 table-last-child" summary="결제내역에 대한 내용">
            <caption className="away">차량 비교하기</caption>
            <colgroup>
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <tbody>
              
              <tr>
                <th>보험이력</th>
                <td>없음</td>
                <td>있음</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>성능점검</th>
                <td>없음</td>
                <td>-</td>
                <td>단순수리</td>
                <td>사고이력</td>
              </tr>
              <tr>
                <th>현대오토벨 인증</th>
                <td>인증</td>
                <td>인증</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>제공서비스</th>
                <td>홈서비스</td>
                <td>EW상품</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>판매자</th>
                <td className="pd8-12">박현대<br />010-5452-7455<br />경기 김포시 아라육로</td>
                <td className="pd8-12">박현대<br />010-5452-7455<br />경기 김포시 아라육로</td>
                <td className="pd8-12">박현대<br />010-5452-7455<br />경기 김포시 아라육로</td>
                <td className="pd8-12">박현대<br />010-5452-7455<br />경기 김포시 아라육로</td>
              </tr>
            </tbody>
          </table>
          <ul className="btn-wrap">
            <li><Button size="mid" background="blue80" title="방문예약" width={164} height={48} /></li>
            <li><Button size="mid" background="blue80" title="방문예약" width={164} height={48} /></li>
            <li><Button size="mid" background="blue80" title="방문예약" width={164} height={48} /></li>
            <li><Button size="mid" background="blue80" title="방문예약" width={164} height={48} /></li>
          </ul>
        </div>
      </RodalPopup>

      <RodalPopup show={deleteShow} type={'slideUp'} closedHandler={deleteCloseHandler} mode="normal" size="xs">
        <div className="con-wrap">
          <p>차량을 삭제하시겠습니까?</p>
          <Buttons align="center" marginTop={56}>
            <Button size="big" background="gray" title="취소" width={130} />
            <Button size="big" background="blue80" title="확인" width={130} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default withRouter(generalBuy01);