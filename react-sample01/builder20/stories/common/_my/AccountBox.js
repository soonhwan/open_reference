import React from 'react';
import { action } from '@storybook/addon-actions';
import { AccountBox } from 'components';

export const AccountBoxEx = () => {
  const accountInfo1 = {
    sns: 'facebook', /* facebook, google, naver, apple, tworld, mdn */
    name: 'abcd@gmail.com'
  }
  const notiYn1 = false;
  const adultYn1 = false;

  const accountInfo2 = {
    sns: '', /* 닉네임 사용자의 경우 */  
    name: '일이삼사오육칠팔구십'
  }
  const notiYn2 = true;
  const adultYn2 = true;

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)
    return true
  }

  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">1. 계정 정보 (SNS 가입자) (mode : mysub)</div>
        <AccountBox mode="mysnb" accountInfo={accountInfo1} notiYn={notiYn1} adultYn={adultYn1} prevEvent={prevEvent} onEvent={action('1.mysnb')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - 계정 정보 (닉네임) (mode : mysub)</div>
        <AccountBox mode="mysnb" accountInfo={accountInfo2} notiYn={notiYn2} adultYn={adultYn2} prevEvent={prevEvent} onEvent={action('1.mysnb')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">2. 계정 관리 (mode : control)</div>
        <AccountBox mode="control" accountInfo={accountInfo1} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">3. 해지 정보 (mode : cancel)</div>
        <AccountBox mode="cancel" accountInfo={accountInfo1} />
      </div>
      <style>{`
          .storybook-container { background: #ffffff !important; }
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
            margin-bottom: 10px;
          }
      `}</style>
    </div>
  );
}
export default AccountBoxEx
