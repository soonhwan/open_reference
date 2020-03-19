import { useDispatch } from 'react-redux';
import moment from 'moment'
import Button from '@lib/share/items/Button'
import Buttons from '@lib/share/items/Buttons'
import RodalPopup from '@lib/share/popup/RodalPopup'
import useRodal from '@lib/share/custom/useRodal'
import Steps from '@lib/share/items/Steps'
import AppLayout from '@src/components/layouts/AppLayout'
import CarOptions from '@src/components/common/CarOptions'
import CarAddOption from '@src/components/common/CarAddOption';
import { SECTION_SELL } from '@src/actions/types';

const FreeStep02_02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  const now = moment()
  // 팝업
  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(false, true)

  // alert 팝업
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, false);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, false);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, false);

  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>무평가 판매 Step2</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
          <Steps
            type={2}
            contents={['차량 정보 조회', '차량 정보 입력', '신청 완료']}
            active={2}
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
            <CarOptions title="차량 옵션" more={false} type={2} />
            <CarAddOption disabled={true} />

            <table summary="추가 상세 정보에 대한 내용" className="table-tp1">
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
                  <td>여성이 단거리 출퇴근용으로 이용한 차로 거리가 짧고, 내외부 깔끔하게 유지했습니다.</td>
                </tr>
              </tbody>
            </table>
            <div className="img-upload main">
              <h4 className="mb33">대표 사진</h4>
              <ul>
                <li className="on">
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 전면</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 후면</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 좌측</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 우측</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>계기판</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="img-upload detail">
              <h4 className="mb33">상세 사진</h4>
              <ul>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>휠&amp;타이어</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>엔진룸</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>내부(앞) 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>센터페시아 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>룸미러 전경</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>차량 상단</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>트렁크</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>기어 박스</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>후방 카메라</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
                <li>
                  <div className="img-item">
                    <img src="" alt="" />
                  </div>
                  <span>스크래치</span>
                  <div className="img-hover">
                    <a href="#">사진 등록하기</a>
                  </div>
                  <div className="img-dim">
                    <a href="#">사진 변경하기</a>
                  </div>
                </li>
              </ul>
            </div>
            <table summary="판매자 정보에 대한 내용" className="table-tp1">
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
                  <th>주소</th>
                  <td>11122 서울시 강남구 언주로 540 4층</td>
                </tr>
                <tr>
                  <th>계좌 번호</th>
                  <td>국민은행 111222-55-48854 (예금주: 김현대)</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
        <Buttons marginTop={65}>
          <span className="step-btn-l">
            <Button size="big" background="gray" title="이전 단계" width={125} height={60} onClick={(e) => openAlertPop2(e, "fade")} />
          </span>
          <span className="step-btn-r">
            <Button size="big" background="blue80" title="신청 완료" width={127} height={60} onClick={(e) => openAlertPop3(e, "fade")} />
          </span>
        </Buttons>
      </div>

      <RodalPopup show={alertPop2} type={'fade'} width={380} closedHandler={closeAlertPop2} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>이전 단계로 이동하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop3} type={'fade'} width={380} closedHandler={closeAlertPop3} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>등록하신 정보로 무평가 판매를 신청하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

    </AppLayout>
  )
}

export default FreeStep02_02