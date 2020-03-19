import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <div className="mypage-admin-title">
            <h3>홈서비스 예약/판매 현황</h3>
          </div>

          <div className="home-service-list">
            <p className="inquire-num">차량 수 : 총 0대</p>
            <p className="list-tit">차량정보</p>

            <table className="table-tp1" summary="차량정보에 대한 내용">
              <caption className="away">차량정보</caption>
              <colgroup>
                <col width="28%" />
                <col width="13%" />
                <col width="19%" />
                <col width="21%" />
                <col width="19%" />
              </colgroup>
              <tbody>
                <tr>
                  <td rowSpan="6" className="car-img-area">
                    <div className="img-wrap">
                      <img src="../images/dummy/list-auction-img-1.png" alt="차량 이미지"/>
                    </div>
                    <Button size="full" line="blue80" color="blue80" title="예약 완료" height={48} />
                  </td>
                  <th>차량정보</th>
                  <td colSpan="3" className="car-info">
                    현대 투싼 ix 디젤 2WD LX20 럭셔리
                    <Button color="blue80" title="바로가기" width={100} height={15} />
                  </td>
                </tr>
                <tr>
                  <th>보증상품</th>
                  <td colSpan="3">상품명</td>
                </tr>
                <tr>
                  <th>계약자</th>
                  <td>[개인]김현대</td>
                  <th>등록일</th>
                  <td>2019-09-11 13:56</td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td>010-0000-0125</td>
                  <th>차량양도계약서 서명방식</th>
                  <td>직접 서명</td>
                </tr>
                <tr>
                  <th>배송주소</th>
                  <td colSpan="3">서울 강남구 테헤란로 301 삼정개발빌딩</td>
                </tr>
                <tr>
                  <th>차량금액</th>
                  <td>10,000,000원</td>
                  <th>
                    총 결제금액
                    <Tooltip placement="bottom">
                      <TooltipItem>
                        <i className="ico-question"></i>
                      </TooltipItem>
                      <TooltipCont>
                        <table className="table-tp1 total-pay" summary="총 결제금액에 대한 내용">
                          <caption className="away">총 결제금액</caption>
                          <colgroup>
                            <col width="50%" />
                            <col width="50%" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>차량가격</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>이전 관리비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>현대오토벨 보증비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>홈서비스 이용료</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>탁송비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>총 결제금액</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>결제방식</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>이체금액</th>
                              <td>12,234,000원</td>
                            </tr>
                          </tbody>
                        </table>
                      </TooltipCont>
                    </Tooltip>
                  </th>
                  <td>12,123,000원</td>
                </tr>
              </tbody>
            </table>

            <table className="table-tp1" summary="차량정보에 대한 내용">
              <caption className="away">차량정보</caption>
              <colgroup>
                <col width="28%" />
                <col width="13%" />
                <col width="19%" />
                <col width="21%" />
                <col width="19%" />
              </colgroup>
              <tbody>
                <tr>
                  <td rowSpan="6" className="car-img-area">
                    <div className="img-wrap">
                      <img src="../images/dummy/list-auction-img-1.png" alt="차량 이미지"/>
                    </div>
                    <Button size="full" line="blue80" color="blue80" title="탁송준비중" height={48} />
                  </td>
                  <th>차량정보</th>
                  <td colSpan="3" className="car-info">
                    현대 투싼 ix 디젤 2WD LX20 럭셔리
                    <Button color="blue80" title="바로가기" width={100} height={15} />
                  </td>
                </tr>
                <tr>
                  <th>보증상품</th>
                  <td colSpan="3">상품명</td>
                </tr>
                <tr>
                  <th>계약자</th>
                  <td>[개인]김현대</td>
                  <th>등록일</th>
                  <td>2019-09-11 13:56</td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td>010-0000-0125</td>
                  <th>차량양도계약서 서명방식</th>
                  <td>직접 서명</td>
                </tr>
                <tr>
                  <th>배송주소</th>
                  <td colSpan="3">서울 강남구 테헤란로 301 삼정개발빌딩</td>
                </tr>
                <tr>
                  <th>차량금액</th>
                  <td>10,000,000원</td>
                  <th>
                    총 결제금액
                    <Tooltip placement="bottom">
                      <TooltipItem>
                        <i className="ico-question"></i>
                      </TooltipItem>
                      <TooltipCont>
                        <table className="table-tp1 total-pay" summary="총 결제금액에 대한 내용">
                          <caption className="away">총 결제금액</caption>
                          <colgroup>
                            <col width="50%" />
                            <col width="50%" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>차량가격</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>이전 관리비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>현대오토벨 보증비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>홈서비스 이용료</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>탁송비</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>총 결제금액</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>결제방식</th>
                              <td>12,234,000원</td>
                            </tr>
                            <tr>
                              <th>이체금액</th>
                              <td>12,234,000원</td>
                            </tr>
                          </tbody>
                        </table>
                      </TooltipCont>
                    </Tooltip>
                  </th>
                  <td>12,123,000원</td>
                </tr>
              </tbody>
            </table>

            <div className="essential-point">
              <ul>
                <li><i className="ico-dot mid"></i> 구매자가 구매확정 시 차량대금이 정산 및 입금됩니다. (구매확정일로부터 3영업일 이내)</li>
                <li><i className="ico-dot mid"></i> 홈서비스 구매신청이 접수된 경우 판매자분께 유선으로 홈서비스 진행여부를 확인한 뒤, 홈서비스 고객 상담이 진행됩니다. 홈서비스 담당자의 전화를 꼭 받아주세요.</li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
    </AppLayout>
  )
}

export default DealerSell04