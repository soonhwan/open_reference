import React from 'react';
import { action } from '@storybook/addon-actions';
import { SelectMutiple } from 'components';

export const SelectEx = () => {
  const inputParam1 = {
    requiredYn: 'N',
    selectItems: [
      {
        placeholder: '선택',
        requiredYn: '',
        optionValue: [
          { text: '2015', value: 'opt-1', },
          { text: '2016', value: 'opt-2', },
          { text: '2017', value: 'opt-3', },
          { text: '2018', value: 'opt-4', },
          { text: '2019', value: 'opt-5', },
          { text: '2020', value: 'opt-6', },
        ],
        selectedValue: '',
        text: '발생 년도'
      },
      {
        placeholder: '선택',
        requiredYn: '',
        optionValue: [
          { text: '01', value: 'opt-1', },
          { text: '02', value: 'opt-2', },
          { text: '03', value: 'opt-3', },
          { text: '04', value: 'opt-4', },
          { text: '05', value: 'opt-5', },
          { text: '06', value: 'opt-6', },
        ],
        selectedValue: '',
        text: '발생 월'
      },
      {
        placeholder: '선택',
        requiredYn: '',
        optionValue: [
          { text: '01', value: 'opt-1', },
          { text: '02', value: 'opt-2', },
          { text: '03', value: 'opt-3', },
          { text: '04', value: 'opt-4', },
          { text: '05', value: 'opt-5', },
          { text: '06', value: 'opt-6', },
        ],
        selectedValue: '',
        text: '발생 일'
      }
    ]
  }

  const inputParam2 = {
    requiredYn: 'Y',
    selectItems: [
      {
        placeholder: '선택',
        requiredYn: 'Y',
        optionValue: [
          { text: '01', value: 'opt-1', },
          { text: '02', value: 'opt-2', },
          { text: '03', value: 'opt-3', },
          { text: '04', value: 'opt-4', },
          { text: '05', value: 'opt-5', },
          { text: '06', value: 'opt-6', },
        ],
        selectedValue: '',
        text: '발생 시간'
      },
      {
        placeholder: '선택',
        requiredYn: 'Y',
        optionValue: [
          { text: '01', value: 'opt-1', },
          { text: '02', value: 'opt-2', },
          { text: '03', value: 'opt-3', },
          { text: '04', value: 'opt-4', },
          { text: '05', value: 'opt-5', },
          { text: '06', value: 'opt-6', },
        ],
        selectedValue: '',
        text: '발생 분'
      }
    ],
    infoType: 'info',
    infoMessage: '- 등록 전 보유하신 캐쉬 또는 쿠폰의 유효기간을 확인해주세요.<br />- unknown 캐쉬 번호는 unknown 앱에서 등록 가능합니다.'
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. Select (mode : basic)</div>
        <div className="sampleCo">
          <SelectMutiple mode="basic" {...inputParam1}>발생일자</SelectMutiple>
        </div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - Select (mode : basic)</div>
        <div className="sampleCo">
          <SelectMutiple mode="basic" {...inputParam2}>발생시간</SelectMutiple>
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
