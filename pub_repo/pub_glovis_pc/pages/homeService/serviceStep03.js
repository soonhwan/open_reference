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
import { radio_contractor } from '@src/dummy';
import { SECTION_HOME_SERVICE } from '@src/actions/types';

const ServiceStep03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_HOME_SERVICE });
  
  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(false, false);
  const closeAlertPopup = useCallback((e) => {
    e.preventDefault();
    setRodalShow(false);
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
        <Steps type={1} contents={['차량정보 확인', '보증상품 선택', '계약자정보 입력', '예상결제금액 확인', '신청 완료']} active={3} />
      </div>
      <div className="content-wrap service-wrap">
        <div className="service-tit">
          <h4>계약자 선택</h4>
          <p>명의자 정보를 위해 선택해주세요.</p>
        </div>
        <div className="service-detail">
          <div className="radio-chk-wrap icon list3">
            <RadioGroup
              dataList={radio_contractor}
              defaultValue={0}
              boxType={true}
              className="icon"
            >
              <RadioItem>
                <p><i className="ico-individual"></i></p>
              </RadioItem>
              <RadioItem>
                <p><i className="ico-business"></i></p>
              </RadioItem>
              <RadioItem>
                <p><i className="ico-corporation"></i></p>
              </RadioItem>
            </RadioGroup>
          </div>
        </div>
        <Buttons align="center" marginTop={60}>
          <Button size="big" background="gray" title="이전 단계로" sub="(보증상품 선택)" className="ws1" width={240} height={72} href="serviceStep02" />
          <Button size="big" background="blue80" title="다음 단계로" sub="(계약자정보 입력)" className="ws1" width={240} height={72} onClick={(e) => rodalPopupHandler(e, "fade")} />
        </Buttons>
      </div>
      <RodalPopup show={rodalShow} type={'fade'} width={380} closedHandler={modalCloseHandler} mode="normal" isMask={false} isButton={false}>
        <div className="con-wrap compact">
          <p>계약자 유형을 선택해주세요.</p>
          <Buttons align="center" marginTop={30}>
            <Button size="sml" background="gray" title="닫기" width={68} onClick={closeAlertPopup} />
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default ServiceStep03