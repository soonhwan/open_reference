import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps';
import { SECTION_SELL } from '@src/actions/types';

const SelfStep03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(true, false);
  // alert 팝업
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, false);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, true);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, false);
  const [alertPop4, setAlertPop4, openAlertPop4, closeAlertPop4] = useRodal(false, true);
  const [alertPop5, setAlertPop5, openAlertPop5, closeAlertPop5] = useRodal(false, false);
  const [alertPop6, setAlertPop6, openAlertPop6, closeAlertPop6] = useRodal(false, true);
  const closeAlertPopup6 = useCallback((e) => {
    e.preventDefault();
    setAlertPop6(false);
  }, []);

  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>셀프 등록 판매 Step3</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
        <Steps
            type={2}
            contents={['차량 정보 조회', '차량 정보 입력', '차량 사진 등록', '신청 내용 확인', '신청 완료']}
            active={3}
            mode="hasLink"
            links={['/1', '/2', '/3', '/4', '/5']}
            onClickArr={[openAlertPop1, openAlertPop2, openAlertPop3, openAlertPop4, openAlertPop5]}
          />
        </div>
      </div>
      <div className="content-wrap sell-register-wrap">
        <div className="img-upload main mt0">
          <h4 className="mb33">대표 사진 등록</h4>
          <div className="app-down">
            <i className="ico-app-blue"></i>
            <Button size="sml" line="blue80" color="blue60" title="모바일로 편리하게! 오토벨앱 다운로드" onClick={(e) => rodalPopupHandler(e, "fade")} />
          </div>
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
          <h4 className="mb33">상세 사진 등록</h4>
          <p>옵션, 하자 부분이 잘 나오게 등록하시면 더 정확한 견적을 받으실 수 있습니다.</p>
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
        <Buttons marginTop={48}>
          <span className="step-btn-l">
            <Button size="big" background="gray" title="이전 단계(차량 정보 등록)" width={249} height={60} onClick={(e) => openAlertPop2(e, "fade")} />
          </span>
          <span className="step-btn-r">
            <Button size="big" background="gray" title="임시 저장" width={125} height={60} onClick={(e) => openAlertPop6(e, "fade")} />
            <Button size="big" background="blue80" title="다음 단계(신청 내용 확인)" width={239} height={60} onClick={(e) => openAlertPop4(e, "fade")} />
          </span>
        </Buttons>
      </div>
      <RodalPopup show={rodalShow} type={'fade'} closedHandler={modalCloseHandler} mode="normal" size="xs">
        <div className="popup-app-down">
          <div className="img-wrap">
            <img src="" alt="" />
          </div>
          <p>현대 오토벨 차량사진등록 앱으로<br />편리하게 차량 사진을 등록하세요.</p>
          <Buttons align="center" marginTop={36}>
            <Button size="big" background="blue80" title="앱 다운로드" width={136} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop2} type={'fade'} width={380} closedHandler={closeAlertPop2} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>저장 후, 차량 정보 등록 페이지로 이동하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} closedHandler={closeAlertPop2} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop4} type={'fade'} width={380} closedHandler={closeAlertPop4} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>입력하신 내용으로<br />셀프 등록 판매를 신청하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} closedHandler={closeAlertPop2} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop6} type={'fade'} width={380} closedHandler={closeAlertPop6} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>임시저장 되었습니다.<br />입력하신 내용은 [마이페이지]에서 확인이 가능합니다.</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

    </AppLayout>
  )
}

export default SelfStep03