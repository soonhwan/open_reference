import moment from 'moment'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Steps from '@lib/share/items/Steps'
import { SECTION_MYPAGE } from '@src/actions/types';

const GeneralSell_v04 = () => {
  const now = moment()

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec">
          <div className="mypage-admin-title">
            <h3 className="border-none">내차 팔기 현황 상세</h3>
            <div className="sub-tit-wrap">
              <p>방문평가 판매로 신청하신 내역입니다.</p>
            </div>
          </div>

          <Steps type={1} contents={['신청완료', '평가사 배정', '방문 및 견적안내', '견적 완료 및 판매결정']} subContents={['방문평가 신청이\n완료되었습니다.', '담당 평가사가\n배정되었습니다.', '고객님께 방문하여\n차량 확인 후 견적안내를\n도와드립니다.', '차량 판매 여부를\n결정해주세요.']} active={4} marginBottom={193} />

          <div className="car-img-info">
            <div className="tit-wrap">
              <h5>차량정보</h5>
            </div>
            <div className="car-info">
              <div className="img-wrap">
                <img src="/images/dummy/list-auction-img-1.png" alt="홈서비스 차량 이미지" />
              </div>
              <table summary="차량 정보에 대한 내용" className="table-tp1 th-c td-c">
                <caption className="sml">차량명<span>: 현대 투싼 ix 디젤 2WD LX20 럭셔리</span></caption>
                <colgroup>
                  <col width="20%" />
                  <col width="30%" />
                  <col width="20%" />
                  <col width="30%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>차량번호</th>
                    <td>03라4562</td>
                    <th>연료</th>
                    <td>가솔린</td>
                  </tr>
                  <tr>
                    <th>연식</th>
                    <td>2018</td>
                    <th>배기량</th>
                    <td>1,591 cc</td>
                  </tr>
                  <tr>
                    <th>주행거리</th>
                    <td>9,652 km</td>
                    <th>차종</th>
                    <td>준중형차</td>
                  </tr>
                  <tr>
                    <th>변속기</th>
                    <td>오토</td>
                    <th>색상</th>
                    <td>검정</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-area">
            <div className="table-wrap-left">
              <table summary="차량 견적에 대한 내용" className="table-tp1 th-c">
                <caption>차량 견적</caption>
                <colgroup>
                  <col width="22%" />
                  <col width="78%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>견적</th>
                    <td className="tx-black">1,950 만원</td>
                  </tr>
                  <tr>
                    <th>계좌번호</th>
                    <td className="tx-black">국민 101010-10-101010 (예금주 : 김현대)</td>
                  </tr>
                </tbody>
              </table>

              <table summary="담당 평가사에 대한 내용" className="table-tp1 th-c fill">
                <caption className="xs">담당 평가사</caption>
                <colgroup>
                  <col width="22%" />
                  <col width="78%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>이름</th>
                    <td className="tx-black">홍길동</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td className="tx-black">010-5678-5555</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="table-wrap-right">
              <table summary="계약자 정보에 대한 내용" className="table-tp1 th-c">
                <caption>계약자 정보</caption>
                <colgroup>
                  <col width="29%" />
                  <col width="20%" />
                  <col width="18%" />
                  <col width="33%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>주민등록상 주소</th>
                    <td className="tx-black">김현대</td>
                    <th>주민번호</th>
                    <td className="tx-black">555555-9999999</td>
                  </tr>
                  <tr>
                    <th>휴대폰 번호</th>
                    <td colSpan="3" className="tx-black">
                      010-1234-5678<Button size="mid" line="gray" color="black" radius={true} title="회원정보 변경" width={109} height={32} marginLeft={23} />
                    </td>
                  </tr>
                  <tr>
                    <th>거주 지역</th>
                    <td colSpan="3" className="tx-black">서울시 강남구</td>
                  </tr>
                  <tr>
                    <th>주민등록상 주소</th>
                    <td colSpan="3" className="tx-black">서울시 중구 남대문로 5가 123-123</td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td colSpan="3" className="tx-black">-</td>
                  </tr>
                  <tr>
                    <th>차량양도계약서</th>
                    <td colSpan="3" className="tx-black">서명완료</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Buttons align="right" marginTop={65}>
            <Button size="big" background="blue80" title="목록으로" width={180} height={60} href="/mypage/generalSell01" />
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default GeneralSell_v04
