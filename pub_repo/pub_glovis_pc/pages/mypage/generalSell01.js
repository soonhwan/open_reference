import moment from 'moment'
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "next/router";
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Input from '@lib/share/items/Input';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const GeneralSell01 = ({router}) => {
  const { result } = router.query;
  const [withoutList, setWithoutList] = useState(result === "no" ? true : false);

  const now = moment();

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(false, true);
  
  const handleListMore = (e) => {
    e.preventDefault()
    setListData(listData => [...listData, dummyData, dummyData, dummyData, dummyData, dummyData, dummyData])
  };

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec">
          <div className="mypage-admin-title">
            <h3>내차 팔기 현황 조회</h3>
            <p className="tx-exp-tp5">&#8251; 내 차 팔기의 판매 현황 및 관리가 가능합니다.</p>
            <p className="tx-exp-tp5">&#8251; 현황 조회는 1년까지 조회하실 수 있으며, 1년이 지나면 삭제됩니다.</p>
          </div>

          <div className="list-wrap">
            <div className="list-tit">
              <Button className="fr" size="big" background="blue80" title="내차팔기 바로가기" width={181} height={48} marginBottom={23} href="/sell/sellHome" />
            </div>
            <table className="table-tp1 input search th-c" summary="조회 영역">
              <caption className="away">조회 영역</caption>
              <tbody>
                <tr>
                  <th rowSpan="3">조회기간</th>
                  <td>
                    <Button className="on" size="mid" line="gray" color="black" title="1개월" width={50} height={40} />
                    <Button size="mid" line="gray" color="black" title="3개월" width={50} height={40} marginLeft={8} />
                    <Button size="mid" line="gray" color="black" title="6개월" width={50} height={40} marginLeft={8} />
                    <Button size="mid" line="gray" color="black" title="1년" width={50} height={40} marginLeft={8} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <DatePicker defaultValue={now} inputHeight={40} />
                    <em className="mg8">-</em>
                    <DatePicker defaultValue={now} inputHeight={40} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input type="text" placeHolder="" width={352} height={40} value="차량명을 검색해주세요." />
                    <Button size="mid" background="blue80" title="조회하기" width={130} height={40 }marginLeft={16} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="admin-list tp7 mt64">
              <div className="content-top">
                <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                  <caption className="away">결제내역</caption>
                  <colgroup>
                    <col width="11%" />
                    <col width="46%" />
                    <col width="8%" />
                    <col width="13%" />
                    <col width="8%" />
                    <col width="14%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>신청일자</th>
                      <th>신청차량</th>
                      <th>견적금액</th>
                      <th>담당</th>
                      <th>판매방식</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  {
                    withoutList === false
                      ? (
                        <tbody>
                          <tr>
                            <td>
                              2019-09-19<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="상세보기" width={100} height={32} marginTop={8} />
                            </td>
                            <td className="tx-disabled">차량 확인 후 표시됩니다.</td>
                            <td className="tx-blue80">미정</td>
                            <td className="seller">박현대<br />010-3333-7777</td>
                            <td>방문평가</td>
                            <td className="tx-blue80">
                              신청완료<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="신청취소" width={100} height={32} marginTop={8} />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2019-09-19<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="상세보기" width={100} height={32} marginTop={8} />
                            </td>
                            <td>
                              <div className="img-cover">
                                <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                              </div>
                              <div className="summary">
                                <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                                <ul className="info">
                                  <li>00가0000</li>
                                  <li>09/12식(10년형)</li>
                                </ul>
                                <ul className="info">
                                  <li>84,761km</li>
                                  <li>오토</li>
                                  <li>디젤</li>
                                </ul>
                              </div>
                            </td>
                            <td className="tx-blue80">미정</td>
                            <td className="seller">-</td>
                            <td>셀프평가</td>
                            <td className="tx-blue80">
                              임시저장<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="수정하기" width={100} height={32} marginTop={8} />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2019-09-19<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="상세보기" width={100} height={32} marginTop={8} />
                            </td>
                            <td>
                              <div className="img-cover">
                                <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                              </div>
                              <div className="summary">
                                <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                                <ul className="info">
                                  <li>00가0000</li>
                                  <li>09/12식(10년형)</li>
                                </ul>
                                <ul className="info">
                                  <li>84,761km</li>
                                  <li>오토</li>
                                  <li>디젤</li>
                                </ul>
                              </div>
                            </td>
                            <td className="tx-blue80">미정</td>
                            <td className="seller">admin-list</td>
                            <td>셀프평가</td>
                            <td className="tx-blue80">
                              24시간 실시간 비교<br />견적 신청완료<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="입찰현황보기" width={100} height={32} marginTop={8} />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2019-09-19<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="상세보기" width={100} height={32} marginTop={8} />
                            </td>
                            <td>
                              <div className="img-cover">
                                <img src="/images/dummy/product-img-06.png" alt="차량 이미지" />
                              </div>
                              <div className="summary">
                                <h4 className="subject">현대 투싼 ix 디젤 2WD LX20 럭셔리</h4>
                                <ul className="info">
                                  <li>00가0000</li>
                                  <li>09/12식(10년형)</li>
                                </ul>
                                <ul className="info">
                                  <li>84,761km</li>
                                  <li>오토</li>
                                  <li>디젤</li>
                                </ul>
                              </div>
                            </td>
                            <td className="tx-blue80">미정</td>
                            <td className="seller">
                              박현대<br />010-3333-7777<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="입찰현황보기" width={100} height={32} marginTop={8} />
                            </td>
                            <td>무평가</td>
                            <td className="tx-blue80">
                              1차 견적 완료<br />
                              <Button size="mid" line="gray" color="black" radius={true} title="판매진행" width={100} height={32} marginTop={8} />
                            </td>
                          </tr>
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
                              판매 차량정보가 없습니다.<br />
                              <Button size="big" background="blue80" title="내차팔기 바로가기" width={245} height={60} marginTop={16} href="/sell/sellHome" />
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

      <RodalPopup show={rodalShow} type={'slideUp'} closedHandler={modalCloseHandler} mode="normal" size="xs">
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

export default withRouter(GeneralSell01);