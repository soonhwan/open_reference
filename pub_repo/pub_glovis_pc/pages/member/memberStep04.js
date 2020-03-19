import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Link from 'next/link'
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import Steps from '@lib/share/items/Steps';
import { SECTION_MEMBER } from '@src/actions/types';

const MemberStep04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="member-sec-w">
          <div className="content-wrap member-steps">
            <div className="member-tit-area">
              <h3>일반회원 가입</h3>
            </div>
            <Steps type={1} contents={['이용약관 및 개인정보수집 및 \n이용에 관한 동의', '본인인증', '가입정보입력', '회원가입완료']} active={4} reverse={true} marginTop={59} />
          </div>
        </div>
        <div className="member-sec">
          <div className="content-wrap member-contents">
            <div className="member-tit-area">
              <h4>환영합니다<br />회원가입이 완료되었습니다.</h4>
            </div>
            <div className="member-co-wrap">
              <p className="ment">현대오토벨에서 <span>다양한 중고차 서비스와 혜택</span>을 받아보세요.</p>
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

export default MemberStep04;