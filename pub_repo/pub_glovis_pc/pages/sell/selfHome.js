import { useDispatch } from 'react-redux';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import AppLayout from '@src/components/layouts/AppLayout';
import SlideBanner from '@src/components/common/banner/SlideBanner';
import { SECTION_SELL } from '@src/actions/types';
import { screenInfo } from '@src/dummy';

const SelfHome = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });
  
  return (
    <AppLayout>
      <div className="content-wrap sell-service-wrap">
        <h3>셀프 등록 판매</h3>
        <p>셀프 등록 판매는 내 차의 정보를 직접 등록하여 실시간 경매를 진행하거나 즉시 견적을 받아 판매할 수 있는 서비스입니다.</p>
        <ul className="sell-ico-wrap">
          <li>
            <i className="ico-sell-01"></i>
            <p className="tit">내가 직접 등록</p>
            <p className="exp">내 차의 정보를 직접 등록하여 편리하게<br />판매를 시작할 수 있습니다.</p>
          </li>
          <li>
            <i className="ico-sell-02"></i>
            <p className="tit">비대면 판매 방식</p>
            <p className="exp">판매금액을 확인하는 절차까지 비대면<br />방식으로 진행되어 부담이 없습니다.</p>
          </li>
          <li>
            <i className="ico-sell-03"></i>
            <p className="tit">24시간 실시간 비교견적 확인</p>
            <p className="exp">24시간 실시간 입찰 진행과정을<br />실시간으로 확인할 수 있습니다.</p>
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
        <Button size="big" background="blue80" title="셀프 등록 판매 시작하기" width={240} height={60} href="selfCertify" />
      </Buttons>
    </AppLayout>
  )
}

export default SelfHome