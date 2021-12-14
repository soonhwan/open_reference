import React from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from 'components';

export const SelectEx = () => {
  const inputParam1 = {
    placeholder: '선택',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: '',
  }

  const inputParam2 = {
    placeholder: '선택',
    requiredYn: 'Y',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: '',
  }

  const inputParam3 = {
    placeholder: '선택',
    requiredYn: 'Y',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: 'opt-6',
  }

  const inputParam4 = {
    placeholder: '선택',
    requiredYn: 'Y',
    disabled: 'Y',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: 'opt-6',
  }

  const inputParam5 = {
    placeholder: '선택',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: '',
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  const inputParam6 = {
    placeholder: '선택',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: '',
    infoType: 'error',
    infoMessage: '에러 메시지'
  }

  const inputParam61 = {
    placeholder: '선택',
    optionValue: [
      { text: '2015', value: 'opt-1', },
      { text: '2016', value: 'opt-2', },
      { text: '2017', value: 'opt-3', },
      { text: '2018', value: 'opt-4', },
      { text: '2019', value: 'opt-5', },
      { text: '2020', value: 'opt-6', },
    ],
    selectedValue: '',
    infoType: 'success',
    infoMessage: '완료 메시지'
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Select (mode : basic)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam1}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. Select (mode : 필수 표시)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam2}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. Select (mode : selectedValue)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam3}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">4. Select (mode : disabled)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam4}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">5. Select (mode : 안내 메시지)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam5}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Select (mode : 에러 메시지)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam6}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Select (mode : 성공 메시지)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam61}>날짜</Select>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">6. Select (label hidden)</div>
        <div className="sampleCo">
          <Select mode="basic" {...inputParam1} labelHiddenYn="Y">날짜</Select>
        </div>
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


export default SelectEx
