import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBox from '@lib/share/items/CheckBox';
import RadioGroup from '@lib/share/items/RadioGroup';
import SelectBox from '@lib/share/items/SelectBox';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell03_01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });
  
  const [textareaDisabled1, setTextareaDisabled1] = useState(true)
  const [textareaDisabled2, setTextareaDisabled2] = useState(true)
  const [textareaDisabled3, setTextareaDisabled3] = useState(true)
  const [textareaDisabled4, setTextareaDisabled4] = useState(true)
  const [textareaDisabled5, setTextareaDisabled5] = useState(true)

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
            <h3>나의 설명글 등록</h3>
            <p>[차량상세>판매자의 차량 가이드]에 노출됩니다.</p>
          </div>

          <div className="register-car-ex">
            <div className="ex-option-wrap">
              <RadioGroup dataList={[
                {id:'car_ex1', value:1, checked:true, disabled:false, title:'직접입력'},
                {id:'car_ex2', value:2, checked:false, disabled:false, title:'샘플보기'},
                {id:'car_ex3', value:3, checked:false, disabled:false, title:'나의 설명글 사용'}
              ]} />
              <SelectBox id="mortgage3" className="items-sbox" placeHolder="선택하세요" 
              options={[
                  { value: '소형차 설명글', label: '소형차 설명글' },
                  { value: '신차 설명글', label: '신차 설명글' }
                ]} width={318} height={40} />
              <Button color="blue80" title="내용 초기화" width={90} height={40} marginLeft={10} />
              <Button color="blue80" title="미리보기" width={60} height={40} />
            </div>
            <div className="key-point-wrap">
              <CheckBox id='chk-key-point' title='Key Point' onChange={handleTextarea1} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled1} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="scratch-photo-wrap">
              <CheckBox id='chk-scratch-photo' title='흠집사진' onChange={handleTextarea2} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled2} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="history-wrap">
              <CheckBox id='chk-history' title='이 차의 History' onChange={handleTextarea3} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled3} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="diagnosis-wrap">
              <CheckBox id='chk-diagnosis' title='진단소견' onChange={handleTextarea4} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled4} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
            <div className="other-wrap">
              <CheckBox id='chk-other' title='기타' onChange={handleTextarea5} />
              <div className="area">
                <Textarea type="tp1" disabled={textareaDisabled5} placeHolder="에디터 화면 노출 영역" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
              </div>
            </div>
          </div>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="gray" title="취소" width={127} />
            <Button size="big" background="blue80" title="저장" width={127} onClick={(e) => rodalPopupHandler(e, "fade")} />
            <Button size="big" background="light-gray" color="white" title="다른 이름으로 저장" width={180} />
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

export default DealerSell03_01