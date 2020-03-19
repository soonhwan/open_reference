import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckBox from '@lib/share/items/CheckBox';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember01_06 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  
  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(false, true);

  const textareaChange = (e) => {
    console.log('textareaChange');
    console.log(e);
  }
  const textareaBlur = (e) => {
    console.log('textareaBlur');
    console.log(e);
  }
  const textareaFocus = (e) => {
    console.log('textareaFocus');
    console.log(e);
  }
  
  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec member-info-pw withdrawal">
          <div className="mypage-admin-title">
            <h3>회원탈퇴</h3>
            <p className="tx-exp-tp5">&#8251; 그동안 현대오토벨을 이용해주신 고객님께 감사드립니다.</p>
            <p className="tx-exp-tp5">&#8251; 탈퇴 사유를 알려주시면 더 나은 서비스를 만들기 위해 최선을 다하겠습니다.</p>
          </div>

          <div className="withdrawal-reason">
            <p>탈퇴 사유 선택<br />(중복 선택 가능)</p>
            <ul>
              <li><CheckBox id='chk-withdrawal1' title='서비스 기능 불만족' /></li>
              <li><CheckBox id='chk-withdrawal2' title='서비스 정책 불만족' /></li>
              <li><CheckBox id='chk-withdrawal3' title='개인정보 및 보안우려' /></li>
              <li><CheckBox id='chk-withdrawal4' title='고객 응대에 대한 불만족' /></li>
              <li><CheckBox id='chk-withdrawal5' title='타사 서비스 이용' /></li>
              <li><CheckBox id='chk-withdrawal6' title='이용 빈도 낮음' /></li>
            </ul>
            <Textarea height={219} countLimit={500} type="tp1" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} placeHolder="기타 의견을 자유롭게 작성해주세요." />
          </div>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="탈퇴취소" width={127} height={48} />
            <Button size="big" background="blue80" title="탈퇴하기" width={127} height={48} onClick={(e) => rodalPopupHandler(e, "fade")} />
          </Buttons>
        </div>
      </div>

      <RodalPopup show={rodalShow} type={'slideUp'} closedHandler={modalCloseHandler} mode="normal" size="xs">
        <div className='con-wrap withdrawal1'>
          <p>정말 탈퇴하시겠습니까?</p>
          <Buttons align="center" marginTop={85}>
            <Button size="big" background="gray" title="취소" width={130} height={48} />
            <Button size="big" background="blue80" title="확인" width={130} height={48} />
          </Buttons>
        </div>

        {/* <div className="con-wrap withdrawal2">
            <p>탈퇴되었습니다.<br />감사합니다.</p>
            <Buttons align="center" marginTop={60}>
              <Button size="big" background="blue80" title="확인" width={245} height={48}/>
            </Buttons>
          </div>

          <div className="con-wrap withdrawal3">
            <p>고객님은 탈퇴가 불가능한 상태입니다.<br />고객센터로 문의해주세요.</p>
            <Buttons align="center" marginTop={60}>
              <Button size="big" background="blue80" title="확인" width={245} height={48}/>
            </Buttons>
          </div> */}
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerMember01_06