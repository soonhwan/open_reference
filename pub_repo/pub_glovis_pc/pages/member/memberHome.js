
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import BtnNaver from '@src/components/common/BtnNaver';
import BtnKakao from '@src/components/common/BtnKakao';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Link from 'next/link'
import { SECTION_MEMBER } from '@src/actions/types';

const MemberHome = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap member-contents">
          <div className="member-tit-area">
            <h3>회원가입</h3>
            <p>가입 유형을 선택해주세요.<br />만 14세 이상만 가입이 가능합니다.</p>
          </div>
          
          <div className="choose-wrap">
            <div className="choose-box normal">
              <h4>일반 회원</h4>
              <p>차량을 사거나 팔려는 회원</p>
              <Button size="big" background="blue80" title="회원가입" width={160} href="/join" nextLink={true} />

              <div className="other-join">
                <h5>다른 계정으로 회원가입</h5>
                <Buttons marginTop={31}>
                  <BtnNaver style={{float:"left"}} />
                  <BtnKakao style={{float:"right"}} />
                </Buttons>
              </div>
            </div>
            <div className="choose-box dealer">
              <h4>딜러 회원</h4>
              <p>차량 매매업을 하시는 사업자 회원</p>
              <Button size="big" background="blue80" title="회원가입" width={160} href="/join" nextLink={true} />
            </div>
          </div>

          <div className="member-etc-area">
            <p className="member-etc-msg">
              기존 오토옥션 ID를 가지고 계신가요?<br />새로워진 현대 오토벨에서 기존 아이디를 계속해서 사용하실 수 있습니다.<br />
              <Link href="login"><a className="btn">로그인</a></Link>
            </p>
          </div>
          
        </div>
      </div>
    </AppLayout>
  )
}

export default MemberHome;