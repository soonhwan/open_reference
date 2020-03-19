import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from "classnames/bind";
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps';
import AppLayout from '@src/components/layouts/AppLayout';
import CarOptions from '@src/components/common/CarOptions';
import CarAddOption from '@src/components/common/CarAddOption';
import { SECTION_SELL } from '@src/actions/types';

const SelfStep04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });
  
  // alert 팝업
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, false);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, true);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, false);
  const [alertPop4, setAlertPop4, openAlertPop4, closeAlertPop4] = useRodal(false, true);
  const [alertPop5, setAlertPop5, openAlertPop5, closeAlertPop5] = useRodal(false, false);

  const [disposalFrameL, setDisposalFrameL] = useState(false)
  const [disposalFrameC, setDisposalFrameC] = useState(false)
  const [disposalFrameR, setDisposalFrameR] = useState(false)
  const [disposalFrameChangingL, setDisposalFrameChangingL] = useState(false)
  const [disposalFrameChangingR, setDisposalFrameChangingR] = useState(false)
  const [disposalFrameLeavingL, setDisposalFrameLeavingL] = useState(false)
  const [disposalFrameLeavingR, setDisposalFrameLeavingR] = useState(false)

  const handleClickFrameL = (e) => {
    e.preventDefault()
    setDisposalFrameL(true)
    setDisposalFrameC(false)
    setDisposalFrameR(false)
    setDisposalFrameChangingR(true)
  }
  const handleClickFrameR = (e) => {
    e.preventDefault()
    setDisposalFrameL(false)
    setDisposalFrameC(false)
    setDisposalFrameR(true)
    setDisposalFrameChangingL(true)
  }
  const handleCancelFrame = (e) => {
    e.preventDefault()
    if (disposalFrameL === true) setDisposalFrameLeavingL(true)
    if (disposalFrameR === true) setDisposalFrameLeavingR(true)
    setDisposalFrameL(false)
    setDisposalFrameR(false)
    setDisposalFrameC(true)
  }
  useEffect(() => {
    let shortTimer = null;
    if (disposalFrameC === true) {
      shortTimer = setTimeout(() => {
        setDisposalFrameC(false)
        setDisposalFrameLeavingL(false)
        setDisposalFrameLeavingR(false)
      }, 300)
    } else if (disposalFrameL === true) {
      shortTimer = setTimeout(() => {
        setDisposalFrameChangingR(false)
      }, 300)
    } else if (disposalFrameR === true) {
      shortTimer = setTimeout(() => {
        setDisposalFrameChangingL(false)
      }, 300)
    }
    return () => {
      clearTimeout(shortTimer)
    }
  }, [disposalFrameL, disposalFrameC, disposalFrameR])

  const disposalClassL = classNames(
    "popup-start-disposal",
    { "active": disposalFrameL },
    { "leaving": disposalFrameLeavingL }
  )
  const disposalClassC = classNames(
    "popup-disposal-btn",
    { "activing": disposalFrameC },
    { "changing-l": disposalFrameChangingL },
    { "changing-r": disposalFrameChangingR }
  )
  const disposalClassR = classNames(
    "popup-start-estimate",
    { "active": disposalFrameR },
    { "leaving": disposalFrameLeavingR }
  )
  // 옵션 더보기
  const [carOptionMore3, setCarOptionMore3] = useState(false)
  const handleCarOption3 = (e) => {
    e.preventDefault()
    setCarOptionMore3(!carOptionMore3)
  }

  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>셀프 등록 판매 Step4</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
        <Steps
            type={2}
            contents={['차량 정보 조회', '차량 정보 입력', '차량 사진 등록', '신청 내용 확인', '신청 완료']}
            active={4}
            mode="hasLink"
            links={['/1', '/2', '/3', '/4', '/5']}
            onClickArr={[openAlertPop1, openAlertPop2, openAlertPop3, openAlertPop4, openAlertPop5]}
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
                  <td>2019년 10월 미쉐린 광폭 타이어로 교환</td>
                </tr>
                <tr>
                  <th>판금/교환 여부</th>
                  <td>없음</td>
                </tr>
              </tbody>
            </table>
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
                  <th>거주 지역</th>
                  <td>서울특별시 강남구</td>
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
          </fieldset>
        </form>
        <Buttons marginTop={48}>
          <span className="step-btn-l">
            <Button size="big" background="gray" title="이전 단계(차량 사진 등록)" width={249} height={60} onClick={(e) => openAlertPop3(e, "fade")} />
          </span>
          <span className="step-btn-r">
            <Button size="big" background="blue80" title="신청하기" width={173} height={60} onClick={(e) => openAlertPop5(e, "fade")} />
          </span>
        </Buttons>
      </div>

      <RodalPopup show={alertPop3} type={'fade'} width={380} closedHandler={closeAlertPop3} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>저장 후, 차량 사진 등록 페이지로 이동하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} closedHandler={closeAlertPop2} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop5} type={'fade'} width={380} closedHandler={closeAlertPop5} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>위의 정보로 신청 완료하시겠습니까?</p>
          <Buttons align="center" marginTop={24}>
            <Button size="mid" background="gray" title="취소" width={72} closedHandler={closeAlertPop2} />
            <Button size="mid" background="blue80" title="확인" width={72} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default SelfStep04