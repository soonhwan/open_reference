
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

const LoginState02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap login-contents">
          <div className="login-tit-area">
            <h4>고객님의 <span>비밀번호</span>를 <span>변경</span>해주세요.</h4>
          </div>

          <div className="ico-tx-wrap">
            <span className="ico-wrap"><i className="ico-lock"></i></span>
            <p>
              현대 오토벨은 고객님의 소중한 개인정보 보호와 안전한 서비스 이용을 위하여<br />6개월 간격으로 주기적인 비밀번호 변경을 권장합니다.
            </p>
          </div>

          <div className="login-wrap">
            <form className="login-form">
              <fieldset>
                <legend className="away">비밀번호 변경</legend>
              </fieldset>
              <ul>
                <li>
                  <label htmlFor="user-pw" className="hide" >현재 비밀번호</label>
                  <Input type="password" placeHolder="현재 비밀번호" id="user-pw" width={368} />
                </li>
                <li>
                  <label htmlFor="new-pw" className="hide" >새 비밀번호</label>
                  <Input type="password" placeHolder="새 비밀번호" id="new-pw" width={368} />
                </li>
                <li>
                  <label htmlFor="new-pw-chk" className="hide" >새 비밀번호 확인</label>
                  <Input type="password" placeHolder="새 비밀번호 확인" id="new-pw-chk" width={368} />
                </li>
              </ul>
            </form>
          </div>

          <div className="tx-wrap">
            <p className="tit">안내</p>
            <p className="con">
              · 비밀번호는 영문, 숫자, 특수문자 혼합 8~15자 이내로 설정해주세요.<br />
              · 아이디를 포함한 문자/숫자 비밀번호로 사용할 수 없습니다.<br />
              · 연속된 문자/숫자 3자리, 동일한 문자/숫자 3자리 이상은 입력 불가  (ex. 123kbcha, aaa, 111 등)<br />
              · 타 사이트에서 사용하지 않는 비밀번호로 설정하여 변경해주시기 바랍니다.
            </p>
          </div>

          <Buttons align="center" marginTop={60} className="w-line">
            <Button size="big" background="gray" title="다음에 변경하기" width={180} height={60} />
            <Button size="big" background="blue80" title="변경하기" width={180} height={60} />
          </Buttons>
          <p>* 다음에 변경하기를 선택하시면 2주 후에 다시 안내해드립니다.</p>
        </div>
      </div>
    </AppLayout>
  )
}

export default LoginState02;