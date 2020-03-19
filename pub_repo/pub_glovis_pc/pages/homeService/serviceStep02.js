import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RadioGroup from '@lib/share/items/RadioGroup';
import RadioItem from '@lib/share/items/RadioItem';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Steps from '@lib/share/items/Steps';
import AppLayout from '@src/components/layouts/AppLayout';
import { radio_guaranteed } from '@src/dummy';
import { SECTION_HOME_SERVICE } from '@src/actions/types';

const ServiceStep02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_HOME_SERVICE });
  
  const [chkPop, setChkPop, handleOpenChkPop, handleCloseChkPop] = useRodal(false, false);
  const [alertPop1, setAlertPop1, openAlertPop1, closeAlertPop1] = useRodal(false, true);
  const [alertPop2, setAlertPop2, openAlertPop2, closeAlertPop2] = useRodal(false, true);
  const [alertPop3, setAlertPop3, openAlertPop3, closeAlertPop3] = useRodal(false, true);
  const [alertPop4, setAlertPop4, openAlertPop4, closeAlertPop4] = useRodal(false, true);
  const [alertPop5, setAlertPop5, openAlertPop5, closeAlertPop5] = useRodal(false, true);

  const closeAlertPopup = useCallback((e) => {
    e.preventDefault();
    setChkPop(false);
  }, []);
  
  return (
    <AppLayout>
      <div className="service-top-banner">
        <div className="content-wrap">
          <h3>홈서비스</h3>
          <p>집으로 배송 받고 3일간 타보고 결정하는 현대 오토벨의 홈서비스</p>
          <i className="top-banner-bg"></i>
        </div>
      </div>
      <div className="service-step">
        <Steps
          type={1}
          contents={['차량정보 확인', '보증상품 선택', '계약자정보 입력', '예상결제금액 확인', '신청 완료']}
          active={2}
          mode="hasLink"
          links={['/1', '/2', '/3', '/4', '/5']}
          onClickArr={[openAlertPop1, openAlertPop2, openAlertPop3, openAlertPop4, openAlertPop5]}
        />
      </div>
      <div className="content-wrap service-wrap">
        <div className="service-tit">
          <h4>보증상품 선택</h4>
          <p>A/S까지 안심하고 구입하세요.</p>
        </div>
        <div className="service-detail">
          <div className="radio-chk-wrap text list4">
            <RadioGroup
              dataList={radio_guaranteed}
              defaultValue={1}
              boxType={true}
              className="text"
            >
              <RadioItem>
                <div>
                  <span className="sub-title">6개월 / 10,000KM 보증</span>
                  <p className="price-tp3">110,000<span className="won">원</span></p>
                </div>
              </RadioItem>
              <RadioItem>
                <div>
                  <span className="sub-title">12개월 / 20,000KM 보증</span>
                  <p className="price-tp3">220,000<span className="won">원</span></p>
                </div>
              </RadioItem>
              <RadioItem>
                <div>
                  <span className="sub-title">18개월 / 30,000KM 보증</span>
                  <p className="price-tp3">320,000<span className="won">원</span></p>
                </div>
              </RadioItem>
              <RadioItem onClick={handleOpenChkPop}>
                <p className="as-none">현대 오토벨의 보증서비스가<br />적용되지 않습니다.</p>
              </RadioItem>
            </RadioGroup>
          </div>
          <div className="service-notify">
            <p className="tx-exp-tp5">&#8251; 자동차관리법 시행규칙 제122조 제2항, 제3항에 따라, 등록신청대행수수료와 관리비용이 별도 부과되며 상세 견적은 STEP4 단계에서 확인하실 수 있습니다.</p>
            <p className="tx-exp-tp5">&#8251; 차량 구매방법이 '리스'상품일 경우, 보증상품은 무상지원됩니다. (최대 100만원 한도 내)</p>
          </div>
        </div>
        <Buttons align="center" marginTop={60}>
          <Button size="big" background="gray" title="이전 단계로" sub="(차량정보 확인)" className="ws1" width={240} height={72} href="serviceStep01" />
          <Button size="big" background="blue80" title="다음 단계로" sub="(계약자정보 입력)" className="ws1" width={240} height={72} href="serviceStep03" />
        </Buttons>
      </div>

      <RodalPopup show={chkPop} type={'fade'} size="xs" closedHandler={handleCloseChkPop} mode="normal" isMask={false} isButton={false}>
        <div className="con-wrap popup-no-warranty">
          <p>무보증 선택하시면 구매차량의 이전대행 서비스만 제공되며,<br />당사가 제공하는 어떠한 보증서비스도 제공되지 않습니다.<br />(성능보증 제외)</p>
          <Buttons align="center" marginTop={30}>
            <Button size="big" background="blue80" title="확인" width={130} onClick={closeAlertPopup} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop1} type={'fade'} width={380} closedHandler={closeAlertPop1} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>1정말로 넘어갈 것인지 질문 문구가 나옵니다.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" radius={true} title="취소" width={68} closedHandler={closeAlertPop1} />
            <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop2} type={'fade'} width={380} closedHandler={closeAlertPop2} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>2정말로 넘어갈 것인지 질문 문구가 나옵니다.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" radius={true} title="취소" width={68} closedHandler={closeAlertPop2} />
            <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop3} type={'fade'} width={380} closedHandler={closeAlertPop3} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>3정말로 넘어갈 것인지 질문 문구가 나옵니다.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" radius={true} title="취소" width={68} closedHandler={closeAlertPop3} />
            <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop4} type={'fade'} width={380} closedHandler={closeAlertPop4} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>3정말로 넘어갈 것인지 질문 문구가 나옵니다.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" radius={true} title="취소" width={68} closedHandler={closeAlertPop4} />
            <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
          </Buttons>
        </div>
      </RodalPopup>

      <RodalPopup show={alertPop5} type={'fade'} width={380} closedHandler={closeAlertPop5} mode="normal" isMask={false}>
        <div className="con-wrap compact">
          <p>3정말로 넘어갈 것인지 질문 문구가 나옵니다.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" radius={true} title="취소" width={68} closedHandler={closeAlertPop5} />
            <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ServiceStep02