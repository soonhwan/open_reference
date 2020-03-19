import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBox from '@lib/share/items/CheckBox';
import Input from '@lib/share/items/Input';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell03_02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  
  const [textareaDisabled1, setTextareaDisabled1] = useState(false)
  const [textareaDisabled2, setTextareaDisabled2] = useState(false)
  const [textareaDisabled3, setTextareaDisabled3] = useState(false)
  const [textareaDisabled4, setTextareaDisabled4] = useState(false)
  const [textareaDisabled5, setTextareaDisabled5] = useState(false)

  const handleTextarea1 = useCallback(() => {
    setTextareaDisabled1(!textareaDisabled1)
  }, [textareaDisabled1]);

  const handleTextarea2 = useCallback(() => {
    setTextareaDisabled2(!textareaDisabled2)
  }, [textareaDisabled2]);

  const handleTextarea3 = useCallback(() => {
    setTextareaDisabled3(!textareaDisabled3)
  }, [textareaDisabled3]);

  const handleTextarea4 = useCallback(() => {
    setTextareaDisabled4(!textareaDisabled4)
  }, [textareaDisabled4]);

  const handleTextarea5 = useCallback(() => {
    setTextareaDisabled5(!textareaDisabled5)
  }, [textareaDisabled5]);
  // 팝업
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
      <div className="content-wrap my-ex-admin">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec">
          <div className="mypage-admin-title">
            <h3>나의 설명글 수정</h3>
            <p>[차량상세>판매자의 차량 가이드]에 노출됩니다.</p>
          </div>

          <div className="register-car-ex">
            <div className="ex-option-wrap">
              <div className="ex-direct-wrap">
                <label htmlFor="car-exp">제목</label>
                <Input type="text" placeHolder="그랜저 설명글" id="car-exp" width={744} height={40} />
              </div>
            </div>
            <div className="key-point-wrap">
              <CheckBox id='chk-key-point' title='Key Point' checked={true} onChange={handleTextarea1} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled1} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="scratch-photo-wrap">
              <CheckBox id='chk-scratch-photo' title='흠집사진' checked={true} onChange={handleTextarea2} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled2} placeHolder="에디터 화면 노출 영역" />
              </div>
            </div>
            <div className="history-wrap">
              <CheckBox id='chk-history' title='이 차의 History' checked={true} onChange={handleTextarea3} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled3} placeHolder="에디터 화면 노출 영역" />
              </div>
            </div>
            <div className="diagnosis-wrap">
              <CheckBox id='chk-diagnosis' title='진단소견' checked={true} onChange={handleTextarea4} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled4} placeHolder="에디터 화면 노출 영역" />
              </div>
            </div>
            <div className="other-wrap">
              <CheckBox id='chk-other' title='기타' checked={true} onChange={handleTextarea5} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled5} placeHolder="에디터 화면 노출 영역" />
              </div>
            </div>
          </div>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={127} />
            <Button size="big" background="gray" title="삭제" width={127} />
            <Button size="big" background="blue80" title="저장" width={127} />
            <Button size="big" background="gray" title="다른 이름으로 저장" width={200} onClick={(e) => rodalPopupHandler(e, "fade")} />
          </Buttons>
        </div>

      </div>
      <RodalPopup show={rodalShow} type={'slideUp'} closedHandler={modalCloseHandler} title="나의 설명글 관리" mode="normal" size="small">
        <div className="con-wrap">
          
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerSell03_02