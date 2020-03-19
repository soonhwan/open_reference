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
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps'
import { SECTION_MYPAGE } from '@src/actions/types';

const GeneralSell_s01 = () => {
  const now = moment()

  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [ depositShow, setDepositShow, depositPopupHandler, depositCloseHandler] = useRodal(false, true);
  const [ sendShow, setSendShow, sendPopupHandler, sendCloseHandler] = useRodal(false, true);

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-sell-sec">
          <div className="mypage-admin-title">
            <h3 className="border-none">내차 팔기 현황 상세</h3>
            <div className="sub-tit-wrap">
              <p>무평가 판매로 신청하신 내역입니다.</p>
            </div>
          </div>

          <Steps type={1} contents={['차량정보등록', '신청완료', '입찰가/견적확인', '판매결정', '차량탁송/명의이전']} subContents={['차량정보를\n등록해주세요.', '실시간 경쟁입찰이\n진행중입니다.', '실시간 경쟁입찰 현황을\n확인하세요.', '차량 판매 여부를\n결정해주세요.', '탁송정보와 계약자 정보를\n입력해주세요.']} active={1} marginBottom={193} />

          <div className="car-img-upload slide">
            <div className="tit-wrap">
              <h5>차량 정보</h5>
            </div>
            <div className="car-img-area">
              <div className="img-wrap">
                <img src="/images/dummy/list-auction-img-1.png" alt="홈서비스 차량 이미지" />
              </div>
              <ul>
                <li className="arrow"><button className="btn-arrow-prev-mid"></button></li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 전면</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 후면</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 좌측</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>차량 우측</span>
                </li>
                <li>
                  <div className="img-item">
                    <a href="#"><img src="" alt="" /></a>
                  </div>
                  <span>내부 계기판</span>
                </li>
                <li className="arrow"><button className="btn-arrow-next-mid"></button></li>
              </ul>
            </div>
            <p className="tx-exp-tp2">* 차량 사진은 20개까지 등록가능합니다.</p>
            <Button className="fr" size="big" background="blue80" title="차량 사진 수정" width={180} href="/sell/selfStep03" />
          </div>

          <div className="car-basic-info">
            <table summary="차량 기본 정보에 대한 내용" className="table-tp1 mt0">
              <caption>차량 기본 정보</caption>
              <colgroup>
                <col width="13%" />
                <col width="27%" />
                <col width="13%" />
                <col width="47%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>차량 번호</th>
                  <td>01가1234</td>
                  <th>차량명</th>
                  <td>
                    <span className="car-name">기아 K3 쿱 1.6 터보 GDI 프레스티지
                    <span>K3 2DR 1.6T / GDI 프레스티지 M/T</span></span>
                  </td>
                </tr>
                <tr>
                  <th>최초 등록일</th>
                  <td>2017-05-07</td>
                  <th>형식 년도</th>
                  <td>2018</td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>검정</td>
                  <th>연료</th>
                  <td>가솔린</td>
                </tr>
                <tr>
                  <th>배기량</th>
                  <td>1,591cc</td>
                  <th>차종</th>
                  <td>준중형차</td>
                </tr>
                <tr>
                  <th>용도</th>
                  <td>일반</td>
                  <th>출고 가격</th>
                  <td>20,700,000원</td>
                </tr>
              </tbody>
            </table>
            <Button className="fr" size="big" background="blue80" title="차량 정보 수정" width={180} marginTop={33} href="/sell/selfStep02" />
          </div>
          <CarOptions title="차량 옵션" more={false} type={2} more={true} />

          <div className="option-add-wrap">
            <CarAddOption />
            <p className="tx-exp-tp3 tx-red80 fr mt16">* 실제 차량 정보와 상이할 경우 추후 견적이 달라질 수 있습니다.</p>
          </div>

          <table summary="추가 상세 정보에 대한 내용" className="table-tp1 mt80">
            <caption>추가 상세 정보</caption>
            <colgroup>
              <col width="16%" />
              <col width="84%" />
            </colgroup>
            <tbody>
              <tr>
                <th>주행 거리(현재기준)</th>
                <td>20,000 km</td>
              </tr>
              <tr>
                <th>차량 설명</th>
                <td>2019년 10월 미쉐린 광폭 타이어로 교환</td>
              </tr>
              <tr>
                <th>판금/교환 여부</th>
                <td>없음</td>
              </tr>
            </tbody>
          </table>

          <div className="sell-info">
            <table summary="판매자 정보에 대한 내용" className="table-tp1 mt80">
              <caption>판매자 정보</caption>
              <colgroup>
                <col width="16%" />
                <col width="84%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>김현대</td>
                </tr>
                <tr>
                  <th>휴대 전화 번호</th>
                  <td>010-4325-0987</td>
                </tr>
                <tr>
                  <th>거주 지역</th>
                  <td>서울특별시 강남구</td>
                </tr>
              </tbody>
            </table>
            <Button className="fr" size="big" background="blue80" title="판매자 정보 수정" width={180} marginTop={33} href="#" />
          </div>

          <table summary="차량 견적에 대한 내용" className="table-tp1 mt80 car-estimate">
            <caption>차량 견적</caption>
            <colgroup>
              <col width="16%" />
              <col width="84%" />
            </colgroup>
            <tbody>
              <tr>
                <th>금액</th>
                <td>
                  <p class="price-tp4 tx-blue80">1차 견적 <span className="price">1,500</span> 만원</p>
                  <p class="price-tp4 tx-blue80">2차 견적 <span className="price">1,500</span> 만원</p>
                </td>
              </tr>
            </tbody>
          </table>

          <Buttons marginTop={80}>
            <span className="step-btn-c">
              <Button className="ws1" size="big" background="blue80" title="신청완료" sub="매각방식 선택하기" width={240} height={72} />
            </span>
            <span className="step-btn-r">
              <Button size="big" background="gray" title="목록으로" width={160} height={48} mode="normal" marginBottom={24} />
            </span>
          </Buttons>

          <Buttons align="center" marginTop={30}>
            <Button size="big" line="blue80" color="blue80" title="입금확인" width={160} height={48} onClick={(e) => depositPopupHandler(e, "fade")} />
            <Button size="big" background="blue80" title="탁송정보" width={160} height={48} onClick={(e) => sendPopupHandler(e, "fade")} />
            <Button size="big" background="blue80" title="판매진행" width={160} height={48} />
            <Button size="big" line="blue80" color="blue80" title="보류" width={160} height={48} />
            <Button size="big" background="gray" title="판매취소" width={160} height={48} mode="normal" />
          </Buttons>
        </div>
      </div>
      <RodalPopup show={depositShow} type={'slideUp'} closedHandler={depositCloseHandler} mode="normal" size="small" title="입금확인">
        <div className="con-wrap popup-deposit">
          <p>고객님의 00은행 계좌<br />XXXX-XXX-XXX로 XXXX원이 입금되었습니다.</p>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="확인" width={130} height={48} />
          </Buttons>
        </div>
      </RodalPopup>
      <RodalPopup show={sendShow} type={'slideUp'} closedHandler={sendCloseHandler} mode="normal" size="medium" title="탁송정보">
        <div className="con-wrap">
          <table summary="탁송정보에 대한 내용" className="table-tp1 td-c">
            <caption className="away">탁송정보</caption>
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <tbody>
              <tr>
                <td className="td8-12">시간<br />(탁송일시)</td>
                <td>지역</td>
                <td>탁송기사</td>
                <td>연락처</td>
              </tr>
              <tr>
                <td className="td8-12">2019-08-14<br />16:42</td>
                <td>서울권</td>
                <td>김현대</td>
                <td>010-1234-5678</td>
              </tr>
            </tbody>
          </table>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="판매취소" width={180} height={60} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default GeneralSell_s01
