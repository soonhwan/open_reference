import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Input from '@lib/share/items/Input';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember01_04 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />
        
        <div className="mypage-state-sec member-info-pw pw-change">
          <div className="mypage-admin-title">
            <h3>비밀번호 변경</h3>
            <p className="tx-exp-tp5">&#8251; 회원님의 비밀번호를 새롭게 변경하실 수 있으며, 도용방지를 위해 주기적인 변경을 권장합니다.</p>
          </div>

          <div className="member-pw-wrap">
            <div className="member-pw change">
              <Input type="text" id="member-pw1" placeHolder="현재 비밀번호" width={270} height={48} />
              <Input type="text" id="member-pw2" placeHolder="새 비밀번호" width={270} height={48} />
              <Input type="text" id="member-pw3" placeHolder="새 비밀번호 확인" width={270} height={48} />
            </div>
          </div>

          <div className="essential-point">
            <ul>
              <li>안내</li>
              <li><i className="ico-dot mid"></i> 비밀번호는 영문, 숫자, 특수문자 혼합 8~15자 이내로 설정해주세요</li>
              <li><i className="ico-dot mid"></i> 아이디를 포함한 문자/숫자 비밀번호로 사용할 수 없습니다.</li>
              <li><i className="ico-dot mid"></i> 연속된 문자/숫자 3자리, 동일한 문자/숫자 3자리 이상은 입력 불가  (ex. 123kbcha, aaa, 111 등)</li>
              <li><i className="ico-dot mid"></i> 타 사이트에서 사용하지 않는 비밀번호로 설정하여 변경해주시기 바랍니다.</li>
            </ul>
          </div>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="변경하기" width={245} height={48}/>
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerMember01_04