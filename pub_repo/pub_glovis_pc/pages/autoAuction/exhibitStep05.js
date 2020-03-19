import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import AppLayout from '@src/components/layouts/AppLayout';
import Steps from '@lib/share/items/Steps';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import { SECTION_AUTO_AUCTION } from '@src/actions/types';

const ExhibitStep05 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_AUTO_AUCTION });

  const now = moment();
  const [consignMode, setConsignMode] = useState(1);
  const handleConsignChange = useCallback((e) => {
    setConsignMode(Number(e));
  }, []);
  
  return (
    <AppLayout>
      <div className="auction-top-banner">
        <div className="content-wrap">
          <h3>내 차 출품하기</h3>
          <p>공개 경쟁 입찰의 오토옥션으로 내 차를 최고가로 판매하세요.</p>
        </div>
      </div>
      <div className="content-wrap auction-step">
        <Steps type={1} contents={['경매약관 및 주의사항', '회원정보', '차량정보', '탁송신청']} active={5} />
      </div>
      <div className="content-sec auction-sec">
        <div className="auction-complete-wrap">
          <div className="content-wrap">
            <div className="auction-tit">
              <h4>출품 신청이 완료되었습니다.</h4>
              <h5>차량번호</h5>
            </div>
            <div className="license-plate-wrap">
              <div className="license-plate">
                <span className="car-number">01가 1234</span>
              </div>
              <div className="license-plate">
                <span className="car-number">01가 1234</span>
              </div>
              <div className="license-plate">
                <span className="car-number">01가 1234</span>
              </div>
            </div>
            <p className="tail-info"><span>※</span>차량 탁송이 완료된 후, 경매가 진행됩니다.</p>
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" line="black" color="black" title="나의 출품 내역 확인" width={240} height={72} />
              <Button size="big" background="blue80" title="확인" width={240} height={72} />
            </Buttons>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ExhibitStep05;