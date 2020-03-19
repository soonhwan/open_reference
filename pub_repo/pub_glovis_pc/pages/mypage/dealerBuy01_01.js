import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import CarOptions from '@src/components/common/CarOptions';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Input from '@lib/share/items/Input';
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerBuy01_01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  // 팝업
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <div className="tender-view">
            <div className="view-img"></div>
            <div className="view-point">
              <div className="point-info">
                <div className="info-wrap">
                  <h3>기아 올 뉴 쏘렌토 디젤 2,0 2WD 프레스티지</h3>
                  <p>
                    <span>19년식</span>
                    <span>22km</span>
                    <span>디젤</span>
                    <span>서울</span>
                  </p>
                </div>
                <p className="time">- 10:45:21</p>
                <p className="num">[ 21명 입찰중 ]</p>
              </div>
              <div className="btn-wrap">
                <Button size="big" background="gray" title="+ 20" width={126} height={60} />
                {/* <Button size="big" background="blue80" title="입찰하기" width={177} height={60} onClick={(e) => rodalPopupHandler1(e, "fade")} /> */}
                <Button size="big" background="blue80" title="입찰가격 수정" width={177} height={60} onClick={(e) => rodalPopupHandler2(e, "fade")} />
              </div>
            </div>
          </div>
          <div className="tender-detail">
            <table summary="차량 기본정보에 대한 내용" className="table-tp1">
              <caption>차량 기본정보</caption>
              <colgroup>
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>차량번호</th>
                  <td>03라4567</td>
                  <th>최초등록일</th>
                  <td>2017-05-07</td>
                  <th>형식년도</th>
                  <td>2018</td>
                </tr>
                <tr>
                  <th>색상</th>
                  <td>검정</td>
                  <th>연료</th>
                  <td>가솔린</td>
                  <th>배기량</th>
                  <td>1,591cc</td>
                </tr>
                <tr>
                  <th>차종</th>
                  <td>준중형차</td>
                  <th>출고가격</th>
                  <td>20,700,000원</td>
                  <th>주행거리(현재기준)</th>
                  <td>20,000km</td>
                </tr>
                <tr>
                  <th>추가옵션</th>
                  <td colSpan="5">사용자가 입력한 텍스트가 들어가는 영역입니다.</td>
                </tr>
                <tr>
                  <th>판금/교환여부</th>
                  <td colSpan="5">없음</td>
                </tr>
              </tbody>
            </table>
            <CarOptions title="차량 옵션" type={2} more={false} isButton={true} />
            <ul className="float-wrap mt64">
              <li><h4 className="mb33">보험처리 이력</h4></li>
              <li><Button size="mid" line="gray" radius={true} title="+ 전체 옵션보기" width={139} /></li>
            </ul>
            <table summary="보험처리 이력에 대한 내용" className="table-tp1 th-c td-c">
              <caption className="away">보험처리 이력</caption>
              <colgroup>
                <col width="28%" />
                <col width="18%" />
                <col width="18%" />
                <col width="18%" />
                <col width="18%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>보험처리이력 등록기준일</th>
                  <td colSpan="4">2019.03.11</td>
                </tr>
                <tr>
                  <th>자동차 용도 변경</th>
                  <td colSpan="4">이력없음</td>
                </tr>
                <tr>
                  <th rowSpan="2">자동차 특수사고 이력</th>
                  <th>전손</th>
                  <td>0</td>
                  <th>도난</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>침수전손</th>
                  <td>0</td>
                  <th>침수분순</th>
                  <td>0</td>
                </tr>
                <tr>
                  <td colSpan="5">
                    <p className="essential">
                      <i className="ico-dot mid"></i> 본 차량의 보험처리 이력정보는 2019년 03월 11일에 조회한 내용입니다.<br />
                      <i className="ico-dot mid"></i> 이후 이력 정보의 업데이트가 있을 수 있으며, 보험 이력 조회서비스에서 확인 가능합니다.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <RodalPopup show={rodalShow1} type={'fade'} closedHandler={modalCloseHandler1} title="입찰하기" mode="normal" size="small">
        <div className="con-wrap">
          <div className="popup-tender">
            <label htmlFor="tender-price" className="hide">입찰금액</label>
            <Input type="number" id="tender-price" width={230} height={48} />
            <em>만원</em>
            <p>견적 실수, 찔러보기 식 낮은 견적 주의<br />(7일 정비, 반복 시 경고)</p>
            <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={127} />
              <Button size="big" background="blue80" title="입찰완료" width={127} />
            </Buttons>
          </div>
        </div>
      </RodalPopup>

      <RodalPopup show={rodalShow2} type={'fade'} closedHandler={modalCloseHandler2} title="입찰가격 수정" mode="normal" size="small">
        <div className="con-wrap">
          <div className="popup-tender">
            <label htmlFor="tender-price2" className="hide">입찰금액</label>
            <Input type="number" id="tender-price2" value="3,800" width={230} height={48} />
            <em>만원</em>
            <CheckBox id='chk-cancle' title='입찰 취소' />
            <p>견적 실수, 찔러보기 식 낮은 견적 주의<br />(7일 정비, 반복 시 경고)</p>
            <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={127} />
              <Button size="big" background="blue80" title="수정완료" width={127} />
            </Buttons>
            {/* <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={127} />
              <Button size="big" background="blue80" title="입찰가격 수정" width={127} />
            </Buttons>
            <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={127} />
              <Button size="big" background="blue80" title="수정완료" width={127} />
            </Buttons>
            <Buttons align="center" marginTop={48}>
              <Button size="big" background="gray" title="취소" width={127} />
              <Button size="big" background="blue80" title="수정완료" width={127} />
            </Buttons> */}
          </div>
        </div>
      </RodalPopup>

    </AppLayout>
  )
}

export default DealerBuy01_01