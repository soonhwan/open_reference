import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Steps from '@lib/share/items/Steps';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell02_08 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />
        
        <div className="mypage-state-sec">
          <h3>차량등록</h3>
          <div className="dealer-register-step">
            <Steps type={2} contents={['차량정보조회/입력', '가격 및 차량소개', '성능점검', '차량사진 등록', '결제', '등록완료']} active={6} />
          </div>
          <div className="dealer-register-co">
            <p className="tit">등록이 완료되었습니다.</p>
            <p className="exp">등록 현황은 마이페이지에서 확인이 가능합니다.</p>
          </div>
          <Buttons align="center">
            <Button size="big" line="blue80" color="blue80" title="등록차량 관리로 이동" width={200} height={60} />
            <Button size="big" background="blue80" title="확인" width={200} height={60} />
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerSell02_08