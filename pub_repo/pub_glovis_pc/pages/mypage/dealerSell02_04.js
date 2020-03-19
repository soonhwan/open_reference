import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import MypageSellPrice from '@src/components/common/MypageSellPrice';
import MypageMortgage from '@src/components/common/MypageMortgage';
import MypageAcidentRecord from '@src/components/common/MypageAcidentRecord';
import MypageMovieUrl from '@src/components/common/MypageMovieUrl';
import Steps from '@lib/share/items/Steps';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import CheckBox from '@lib/share/items/CheckBox';
import RadioGroup from '@lib/share/items/RadioGroup';
import SelectBox from '@lib/share/items/SelectBox';
import Textarea from '@lib/share/items/Textarea';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell02_04 = () => {
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
      <div className="content-wrap register-wrap">
        <MypageNavi mode="dealer" />
        
        <div className="mypage-state-sec">
          
          <h3>차량등록</h3>
          <div className="mb80 dealer-register-step">
            <Steps type={2} contents={['차량정보조회/입력', '가격 및 차량소개', '성능점검', '차량사진 등록', '결제', '등록완료']} active={2} />
          </div>

          <div className="register-number">
            <h4>연락처</h4>
            <SelectBox id="register-number" className="items-sbox" placeHolder="010 - 5000 - 3213" options={select1_list} width={359} height={56} />
          </div>
          
          {/* 판매가격 */}
          <MypageSellPrice />

          {/* 압류/저당 입력 */}
          <MypageMortgage />
          
          {/* 사고이력정보 */}
          <MypageAcidentRecord />

          {/* 동영상 */}
          <MypageMovieUrl />

          <div className="register-car-ex">
            <h4 className="mb33">차량 설명글 입력</h4>
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

          <Buttons align="right">
            <Button size="big" background="blue80" title="나의 설명글로 저장하기" width={221} />
            <Button size="big" background="light-gray" color="white" title="다른 이름으로 저장" width={204} />
          </Buttons>

          <Buttons marginTop={48}>
            <span className="step-btn-l">
              <Button size="big" background="gray" title="이전" width={150} height={60} />
            </span>
            <span className="step-btn-r">
              <Button size="big" background="blue80" title="다음" width={150} height={60} mode="normal" />
            </span>
          </Buttons>

        </div>
      </div>
    </AppLayout>
  )
}

export default DealerSell02_04