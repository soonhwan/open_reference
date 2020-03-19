import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Link from 'next/link';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import { SECTION_MEMBER } from '@src/actions/types';

const AllyStep02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });
  
  return (
    <AppLayout>
      <div className="content-sec">
        <div className="member-sec">
          <div className="content-wrap member-contents">
            <div className="member-tit-area">
              <h4>회원가입 신청이 완료되었습니다.<br /><span>회원 승인</span>이 완료된 후에 이용이 가능합니다.</h4>
            </div>
            <div className="member-co-wrap">
              <p className="ment"><span>승인이 완료되면 SMS/이메일로 안내됩니다.</span><br />현대오토벨에서 다양한 중고차 서비스와 혜택을 받아보세요.</p>
              <ul>
                <li>
                  <span>믿을 수 있는<br />현대오토벨에서</span>
                  <p>내차사기</p>
                  <Link href="/sell/sellHome"><a>바로가기</a></Link>
                </li>
                <li>
                  <span>나에게 맞는 방법으로<br />편리하게</span>
                  <p>내차팔기</p>
                  <Link href="/buy/list"><a>바로가기</a></Link>
                </li>
                <li>
                  <span>내 차 상태에 맞는<br />시세 리포트 제공</span>
                  <p>시세조회</p>
                  <Link href="/marketPrice/marketPrice"><a>바로가기</a></Link>
                </li>
              </ul>
            </div>
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" background="blue80" title="메인으로" width={180} height={60} href="/main" />
            </Buttons>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default AllyStep02;