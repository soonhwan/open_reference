import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import SignUpCheckBoxGroup from '@src/components/common/SignUpCheckBoxGroup';
import Steps from '@lib/share/items/Steps';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import { signup_check_list } from '@src/dummy';
import { auction_check_term } from '@src/dummy/terms';
import { SECTION_MEMBER } from '@src/actions/types';

const memberStep01 = () => {
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
            <Steps type={1} contents={['이용약관 및 개인정보수집 및 \n이용에 관한 동의', '본인인증', '가입정보입력', '회원가입완료']} active={1} reverse={true} marginTop={59} /> 
          </div>
        </div>
        <div className="member-sec">
          <div className="content-wrap member-contents">
            <div className="member-tit-area">
              <h4>이용약관  및 개인정보수집 및 이용에 관한 동의</h4>
            </div>
            <SignUpCheckBoxGroup
              sub_title="필수 약관 동의"
              sub_id="chk-agree-essential"
              title="약관 전체 동의"
              id="chk-agree-all"
              agree_list={signup_check_list}
              agree_term={auction_check_term}
            />
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" background="blue80" title="다음으로" width={180} height={60} href="memberStep03" />
            </Buttons>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default memberStep01;