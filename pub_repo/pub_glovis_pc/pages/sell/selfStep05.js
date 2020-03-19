import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Steps from '@lib/share/items/Steps';
import { SECTION_SELL } from '@src/actions/types';

const SelfStep05 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  return (
    <AppLayout>
      <div className="content-wrap sell-fore-wrap">
        <h3>셀프 등록 판매 Step5</h3>
      </div>
      <div className="content-sec bg-blue80">
        <div className="content-wrap sell-step-wrap">
          <Steps type={2} contents={['차량 정보 조회', '차량 정보 입력', '차량 사진 등록', '신청 내용 확인', '신청 완료']} active={5} />
        </div>
      </div>
      <div className="content-wrap">
        <div className="co-wrap">
          <p className="co-tit">24시간 실시간 비교 견적 접수가 완료되었습니다.</p>
          <p className="co-exp">
            접수 내용이 확인된 후 24시간 비교 견적이 시작됩니다.<br />
            비교 견적이 시작되면 마이페이지 또는 SNS로 확인이 가능합니다.
          </p>
          <div className="co-result">
            <p className="num">신청 번호 : <span>1928375GHS293</span></p>
            <p className="ment">마이 페이지에서 현황을 확인하시려면 신청 번호가 필요합니다.</p>
          </div>
          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="확인" width={172} height={60} href="/main" />
            <Button size="big" background="blue80" title="마이페이지" width={172} height={60} />
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default SelfStep05