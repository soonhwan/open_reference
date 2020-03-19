import { useDispatch } from 'react-redux';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import AppLayout from '@src/components/layouts/AppLayout';
import SlideBanner from '@src/components/common/banner/SlideBanner';
import { SECTION_SELL } from '@src/actions/types';
import { screenInfo } from '@src/dummy';

const FreeHome = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  return (
    <AppLayout>
      <div className="content-wrap sell-service-wrap">
        <h3>무평가 판매 서비스</h3>
        <p>무평가 판매는 내 차 정보를 등록하고, 조건에 맞는 차량이라면 차량 대금을 먼저 지급받는 서비스입니다.<span className="tx-red80">차량 출시 기준 33개월 이하, 주행거리 3만km 이하의 차량이라면 무평가 판매 신청이 가능합니다.</span></p>
        <ul className="sell-ico-wrap">
          <li>
            <i className="ico-sell-01"></i>
            <p className="tit">신차급 차량만 진행</p>
            <p className="exp">신차 등록일 33개월, 주행거리 3만km 이하의<br />무사고 차량만 가능합니다.</p>
          </li>
          <li>
            <i className="ico-sell-02"></i>
            <p className="tit">비대면 서비스</p>
            <p className="exp">차량정보 입력부터 판매 결정까지<br />비대면으로 진행합니다.</p>
          </li>
          <li>
            <i className="ico-sell-03"></i>
            <p className="tit">빠른 판매 가능</p>
            <p className="exp">판매를 결정하셨다면, 안전하게 차량 탁송과<br />거래를 바로 도와드립니다.</p>
          </li>
        </ul>
      </div>
      <div className="content-sec">
        <div className="content-wrap slide-steps-wrap">
          <div className="steps-frame">
            <SlideBanner touch={true} slideType="banner-single" screen={true} screenInfo={screenInfo} customArrow={true} buttonType="circle" pagination={true}>
              <div className="steps-slide">
                <div className="steps-exp">
                  <div>
                    <p className="tit"><em>Step1</em>차량 정보 조회</p>
                    <p className="exp">판매할 내 차의 차량 번호를 입력하여 정보를 조회하세요.</p>
                  </div>
                </div>
              </div>
              <div className="steps-slide">
                <div className="steps-exp">
                  <div>
                    <p className="tit"><em>Step2</em>차량 정보 입력</p>
                    <p className="exp">내차의 차량 사진과 차량 옵션 등의 추가 정보를 입력하세요.</p>
                    <p className="sub">
                      <span>사진을 등록하는 2가지 방법</span>
                      1. 내 컴퓨터에 저장된 차량 사진을 업로드한다.<br />
                      2. 모바일 앱으로 편리하게 찍고 사진을 불러온다.
                    </p>
                  </div>
                  <div className="app-down">
                    <i className="ico-app-blue"></i>
                    <Button size="sml" line="blue80" color="blue60" title="모바일로 편리하게! 오토벨앱 다운로드" href="#" />
                  </div>
                </div>
              </div>
              <div className="steps-slide">
                <div className="steps-exp">
                  <div>
                    <p className="tit"><em>Step3</em>차량 판매 상담</p>
                    <p className="exp">콜센터 상담을 통해 입고 후 평가를 진행합니다.</p>
                  </div>
                </div>
              </div>
              <div className="steps-slide">
                <div className="steps-exp">
                  <div>
                    <p className="tit"><em>Step4</em>차량 입고 및 평가</p>
                    <p className="exp">차량 탁송을 통해 입고 후 평가를 진행합니다.</p>
                  </div>
                </div>
              </div>
              <div className="steps-slide">
                <div className="steps-exp">
                  <div>
                    <p className="tit"><em>Step5</em>최종 매각 결정</p>
                    <p className="exp">차량 평가 결과에 따른 최종 매각끔액을 확인한 후<br />매각 여부를 결정하세요.</p>
                  </div>
                </div>
              </div>
            </SlideBanner>
          </div>
          
        </div>
      </div>
      <Buttons align="center" marginTop={48} marginBottom={140}>
        <Button size="big" background="blue80" title="무평가 판매 시작하기" width={245} height={60} href="freeCertify" />
      </Buttons>
    </AppLayout>
  )
}

export default FreeHome