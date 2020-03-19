import Link from 'next/link';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import FaqList from '@src/components/common/FaqList';
import { SECTION_SELL } from '@src/actions/types';

const SellHome = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_SELL });

  return (
    <AppLayout>
      <div className="sell-top-banner">
        <div className="content-wrap">
          <h3>3가지 판매 방법이 있습니다<br />선호하는 타입을 선택하세요</h3>
          <p>
            1
            <span>복잡하고 어려운일<br />전문가에게 맡겨야지</span>
            <i className="ico-arrow-white"></i>
            <Link href="visitApply"><a>방문 평가 판매</a></Link>
          </p>
          <p>
            2
            <span>등록부터 판매까지<br />내가 직접 챙겨야해</span>
            <i className="ico-arrow-white"></i>
            <Link href="selfHome"><a>셀프 평가 판매</a></Link>
          </p>
          <p>
            3
            <span>내 차 상태에 자신있고<br />빠른 거래를 하고싶어</span>
            <i className="ico-arrow-white"></i>
            <Link href="freeHome"><a>무평가 판매</a></Link>
          </p>
          <i className="top-banner-bg"></i>
        </div>
      </div>
      <div className="content-wrap sell-home-wrap">
        <div className="content-wrap">
          <FaqList />
        </div>
      </div>
    </AppLayout>
  )
}

export default SellHome