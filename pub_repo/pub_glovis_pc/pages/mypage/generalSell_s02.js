import moment from 'moment'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import CarOptions from '@src/components/common/CarOptions';
import CarAddOption from '@src/components/common/CarAddOption';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import Textarea from '@lib/share/items/Textarea';
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps'
import { SECTION_MYPAGE } from '@src/actions/types';

const GeneralSell_s02 = () => {
  const now = moment()

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  // Textarea
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
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec review">
          <div className="mypage-admin-title">
            <h3>내차 팔기 현황 조회</h3>
            <p className="tx-exp-tp5">&#8251; 내 차 팔기의 판매 현황 및 관리가 가능합니다.</p>
            <p className="tx-exp-tp5">&#8251; 현황 조회는 1년까지 조회하실 수 있으며, 1년이 지나면 삭제됩니다.</p>
          </div>

          <div className="review-input-wrap">
            <h4>24시간 실시간 비교견적 이용후기를 입력해 주세요.</h4>
            <ul>
              <li>1. 최종 판매 금액에 만족하시나요?<span>☆☆☆☆☆<em>0.0/5.0</em></span></li>
              <li>2. 구매 딜러의 서비스에 만족하시나요?<span>☆☆☆☆☆<em>0.0/5.0</em></span></li>
              <li>3. 주변분들에게 구매 딜러를 추천 의향은 어느 정도 되시나요?<span>☆☆☆☆☆<em>0.0/5.0</em></span></li>
              <li>4. 이용후기를 간단하게 한 줄로 남겨주세요.</li>
              <li><Textarea type="tp2" height={80} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} /></li>
            </ul>
          </div>

          <div className="car-img-info">
            <div className="tit-wrap">
              <h5>판매 차량 조회</h5>
            </div>
            <div className="car-info">
              <div className="img-wrap">
                <img src="/images/dummy/list-auction-img-1.png" alt="홈서비스 차량 이미지" />
              </div>
              <table summary="판매 차량에 대한 내용" className="table-tp1">
                <caption className="away">판매 차량 조회</caption>
                <colgroup>
                  <col width="18%" />
                  <col width="22%" />
                  <col width="18%" />
                  <col width="42%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>차량번호</th>
                    <td>09소0119</td>
                    <th>차량명</th>
                    <td className="pd8-12">현대 LF쏘나타 하이브리드 2.0 HEV 프리미엄</td>
                  </tr>
                  <tr>
                    <th>최초등록일</th>
                    <td>2016-04-18</td>
                    <th>형식 년도</th>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <th>색상</th>
                    <td>흰색</td>
                    <th>연료</th>
                    <td>하이브리드</td>
                  </tr>
                  <tr>
                    <th>배기량</th>
                    <td>1,999 cc</td>
                    <th>차종</th>
                    <td>중형차</td>
                  </tr>
                  <tr>
                    <th>용도</th>
                    <td>일반</td>
                    <th>출고 가격</th>
                    <td>38,510,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bidding-inquiry">
            <h5>입찰 결과 조회</h5>
            <ul>
              <li>입찰자수<p className="price-tp7">6<span className="won">명</span></p></li>
              <li>최종 판매가<p className="price-tp7">2,100<span className="won">만원</span></p></li>
            </ul>
          </div>

          <div className="admin-list tp6">
            <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
              <caption className="away">결제내역</caption>
              <colgroup>
                <col width="15%" />
                <col width="15%" />
                <col width="20%" />
                <col width="15%" />
                <col width="35%" />
              </colgroup>
              <thead>
                <tr>
                  <th>사진</th>
                  <th>딜러명</th>
                  <th>소속</th>
                  <th>연락처</th>
                  <th>지역</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>장**딜러</td>
                  <td>주식회사 제츠</td>
                  <td>010-5555-5555</td>
                  <td>서울 강서구 서부 자동차 매매단지</td>
                </tr>
                <tr>
                  <td></td>
                  <td>장**딜러</td>
                  <td>주식회사 제츠</td>
                  <td>010-5555-5555</td>
                  <td>서울 강서구 서부 자동차 매매단지</td>
                </tr>
                <tr>
                  <td></td>
                  <td>장**딜러</td>
                  <td>주식회사 제츠</td>
                  <td>010-5555-5555</td>
                  <td>서울 강서구 서부 자동차 매매단지</td>
                </tr>
              </tbody>
            </table>  
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default GeneralSell_s02
