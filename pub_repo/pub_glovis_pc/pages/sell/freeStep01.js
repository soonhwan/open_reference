import { useDispatch } from 'react-redux';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps';
import AppLayout from '@src/components/layouts/AppLayout';
import CarOptions from '@src/components/common/CarOptions';
import { SECTION_SELL } from '@src/actions/types';

const FreeStep01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });
  
  // alert 팝업
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, false);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, true);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, false);
  
  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>무평가 판매 Step1</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
          <Steps
            type={2}
            contents={['차량 정보 조회', '차량 정보 입력', '신청 완료']}
            active={1}
            mode="hasLink"
            links={['/1', '/2', '/3']}
            onClickArr={[openAlertPop1, openAlertPop2, openAlertPop3]}
          />
        </div>
      </div>
      <div className="content-wrap sell-register-wrap">
        <form className="register-form">
          <fieldset>
            <legend className="away">차량 정보 조회</legend>
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
                  <th>차량번호</th>
                  <td>01가1234</td>
                  <th>차량명</th>
                  <td>
                    <span className="car-name">기아 K3 쿱 1.6 터보 GDI 프레스티지
                    <span>K3 2DR 1.6T / GDI 프레스티지 M/T</span></span>
                  </td>
                </tr>
                <tr>
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
                  <th>출고가격</th>
                  <td>20,700,000원</td>
                </tr>
              </tbody>
            </table>
            <CarOptions title="차량 옵션" mode="view" more="false" type={2} />
          </fieldset>
        </form>
        <p className="guide-ment">
          해당 정보는 실제 정보와 상이할 수 있습니다.<br />
          다음 단계에서 차량정보를 수정하세요.<br />
          해당 차량을 판매 차량으로 신청하시겠습니까?
          </p>
        <Buttons align="center" marginTop={48}>
          <Button size="big" background="gray" title="아니오, 새로 조회합니다." width={230} height={60} href="#" />
          <Button size="big" background="blue80" title="예, 신청합니다." width={230} height={60} href="freeStep02_01" />
        </Buttons>
      </div>

      <RodalPopup show={alertPop2} type={'fade'} width={380} closedHandler={closeAlertPop2} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>해당 정보는 실제 정보와 상이할 수 있습니다.<br />다음 단계에서 차량정보를 수정하세요.<br />해당 차량을 판매 차량으로 신청하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} closedHandler={closeAlertPop2} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

    </AppLayout>
  )
}

export default FreeStep01