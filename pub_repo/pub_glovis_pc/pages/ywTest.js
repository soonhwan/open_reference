import { useState, useCallback, useEffect } from 'react';
import Helmet from 'react-helmet';
import Input from '@lib/share/items/Input';
import InputFile from '@lib/share/items/InputFile';
import InputPicture from '@lib/share/items/InputPicture';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';

// TimePicker
import moment from 'moment';
import TimePicker from 'rc-time-picker';

import TreeCheckCount from '@lib/share/items/TreeCheckCount';
import { textDummy, dataProvider } from '@src/dummy';

const ywTest = () => {
  const YwWrapper = useCallback(({children}) => {
    return (
      <div style={{maxWidth: 900, margin: '0 auto'}}>{children}</div>
    )
  }, []);
  const ComponentDiv = useCallback(({children, title, sub}) => {
    return (
      <div style={{padding: 10, marginTop: 10, borderRadius: 5, background: '#aaa'}}>
        <div style={{padding: 10, background: '#fff', borderRadius: 5}}>
          {title && <h2 style={{marginBottom: 10}}>{title} {sub && <span style={{fontSize: 16}}>{sub}</span>}</h2>}
          {children}
        </div>
      </div>
    )
  }, []);
  // InputFile & InputPicture
  const uploadList1 = (files) => {
    const _files = Object.values(files);
    _files.map(v => console.log(v));
  };

  // Textarea
  const textareaChange = (e) => console.log('textareaChange: ', e);
  const textareaBlur = (e) => console.log('textareaBlur: ', e);
  const textareaFocus = (e) => console.log('textareaFocus: ', e);

  // Input
  const inputChange = (e) => console.log('inputChange: ', e.target.value);
  const inputBlur = (e) => console.log('inputBlur: ', e);
  const inputFocus = (e) => console.log('inputFocus: ', e);

  // RodalPopup
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);

  // Time Picker
  const now = moment().hour(0).minute(0);
  const format = 'h:mm a';
  const onChange = (value) => {
    console.log(value && value.format(format));
  }

  // TreeCheckCount
  const treeClick = (e, data) => {
    const ctLevel = '현재 선택한 Level: ';
    const ctItem = '현재 선택한 Item Object: ';
    console.log("e: ", e);
    console.log(ctLevel, data.level);
    data.children !== undefined 
      ? console.log(ctItem, data.children)
      : console.log(`${ctItem} 없음`);
  }
  
  return (
    <YwWrapper>
      <h1 style={{fontSize: 28, fontWeight: 'bold', margin: '15px 0'}}>TestPage <span style={{fontSize: 16, fontWeight: 500}}>(Publishing By 연욱)</span></h1>

      <ComponentDiv title="TreeCheckCount" sub="기능 추가">
        <h3 style={{fontSize: 14, lineHeight: 1.6, marginBottom: 10}}>- onClick: 현재 선택한 Level 및 Item Object를 넘겨받을 수 있는 핸들러<br />- childChecked: Datalist내 child를 default 펼칠지 여부를 결정하는 속성</h3>
        <p style={{color: 'red', marginBottom: 10}}>* 데이터에 key 값 defaultChecked 를 true 로 설정하면 펼쳐진 상태로 나오게됩니다.</p>
        <TreeCheckCount dataProvider={dataProvider} onClick={treeClick} />
      </ComponentDiv>

      <ComponentDiv title="TimePicker">
        <TimePicker
          showSecond={false}
          defaultValue={now}
          className="xxx"
          onChange={onChange}
          format={format}
          use12Hours
          inputReadOnly
        />
      </ComponentDiv>

      <ComponentDiv title="헬멧 테스트">
        <p>타이틀과 연결된 css를 디버깅해보세요.</p>
        <Helmet
          title={'테스트'}
          description={'글이 나옵니다.'}
          link={[
            {rel: "stylesheet", href: "/css/slick.css"},
            {rel: "stylesheet", href: "/css/slick-theme.css"}
          ]}
        />
      </ComponentDiv>

      <ComponentDiv title="InputFile & InputPicture">
        <InputFile uploadList={uploadList1} />
        <hr />
        <InputPicture />
      </ComponentDiv>

      <ComponentDiv title="Textarea & Input" sub="부모 컴포넌트에서 이벤트 호출">
        <Textarea countLimit={1000} type="tp1" data={textDummy} onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} />
        <hr />
        <Input type="number" placeHolder="계좌이체금액 입력을 입력해주세요." value='' id="account-price" width={284} height={48} onChange={inputChange} onBlur={inputBlur} onFocus={inputFocus} />
      </ComponentDiv>

      <ComponentDiv title="RodalPopup" sub="Confirm 팝업 예제">
        <Button size="mid" background="blue80" radius={true} title="제목 없는 팝업 (FADE)" width={160} onClick={(e) => rodalPopupHandler1(e, "fade")} />
        <RodalPopup show={rodalShow1} type={'fade'} width={380} closedHandler={modalCloseHandler1} mode="normal" isMask={false}>
          <div className="con-wrap compact">
            <p>해당 차량번호로 조회된 차량정보가 없습니다.<br /> 차량정보를 직접 등록하시겠습니까?</p>
            <Buttons align="center" marginTop={30}>
              <Button size="sml" background="gray" radius={true} title="취소" width={68} />
              <Button size="sml" background="blue80" radius={true} title="확인" width={68} />
            </Buttons>
          </div>
        </RodalPopup>
      </ComponentDiv>

      
      
    </YwWrapper>
  )
}

export default ywTest