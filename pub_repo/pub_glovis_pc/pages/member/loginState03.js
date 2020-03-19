
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import BtnNaver from '@src/components/common/BtnNaver';
import BtnKakao from '@src/components/common/BtnKakao';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckBox from '@lib/share/items/CheckBox';
import Input from '@lib/share/items/Input';
import Link from 'next/link'
import { SECTION_MEMBER } from '@src/actions/types';

const LoginState03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap login-contents">
          <div className="login-tit-area">
            <h4>고객님의 <span>종사원증 유효기간</span>이 곧 <span>만료</span>됩니다.</h4>
          </div>

          <div className="ico-tx-wrap">
            <span className="ico-wrap"><i className="ico-date"></i></span>
            <p>
              고객님의 종사원증 번호가 곧 만료예정입니다.<br />
              <span>만료 시, 광고 중인 차량의 게시가 중단됩니다.</span><br />
              원활한 서비스 이용을 위하여 종사원증 정보를 업데이트해주세요.
            </p>
          </div>

          <div className="login-wrap">
            <dl>
              <dt>· 차이름</dt>
              <dd>김현대</dd>
              <dt>· 아이디</dt>
              <dd>hyundai</dd>
              <dt>· 종사원증번호</dt>
              <dd>1234 - 56487</dd>
              <dt>· 유효기간</dt>
              <dd>2018.09.01 ~ 2019.08.31</dd>
            </dl>
          </div>

          <Buttons align="center" marginTop={60} className="w-line">
            <Button size="big" background="gray" title="다음에 변경하기" width={180} height={60} />
            <Button size="big" background="blue80" title="변경하기" width={180} height={60} />
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default LoginState03;