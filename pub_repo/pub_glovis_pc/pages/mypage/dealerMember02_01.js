import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Input from '@lib/share/items/Input';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember02_01 = () => {
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
        
        <div className="mypage-state-sec member-review">
          <div className="mypage-admin-title">
            <h3>차량 판매 후기</h3>
          </div>

          <table summary="차량 판매 후기 등록" className="table-tp1 input">
            <caption className="away">차량 판매 후기 등록</caption>
            <colgroup>
              <col width="20%" />
              <col width="80%" />
            </colgroup>
            <tbody>
              <tr>
                <th>제목<span class="essential">*</span></th>
                <td><Input type="text" id="member" placeHolder="제목을 입력해주세요." width='100%' height={40} /></td>
              </tr>
              <tr>
                <th>차량명<span class="essential">*</span></th>
                <td><Input type="text" id="member" placeHolder="차량명은 입력해주세요." width='100%' height={40} /></td>
              </tr>
              <tr>
                <th>후기내용<span class="essential">*</span></th>
                <td><Textarea countLimit={500} type="tp2"  placeHolder="내용을 입력해주세요." onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} /></td>
              </tr>
              <tr>
                <th>사진등록<span class="essential">*</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>


          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="등록완료" width={130} height={48} onClick={(e) => rodalPopupHandler(e, "fade")} />
          </Buttons>
        </div>
      </div>

      <RodalPopup show={rodalShow} type={'slideUp'} closedHandler={modalCloseHandler} mode="normal" size="xs">
        <div className='con-wrap'>
          <p>등록되었습니다.</p>
          <Buttons align="center" marginTop={85}>
            <Button size="big" background="blue80" title="확인" width={245} height={48}/>
          </Buttons>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerMember02_01