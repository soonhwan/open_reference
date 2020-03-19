import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "next/router";
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import CheckBox from '@lib/share/items/CheckBox';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_MYPAGE } from '@src/actions/types';
import { select1_list } from '@src/dummy';

const GeneralMember01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi />

        <div className="mypage-state-sec general-buy-sec">
          <div className="mypage-admin-title">
            <h3>회원정보 수정</h3>
            <p className="tx-exp-tp5">&#8251; 보다 다양한 서비스를 받으시려면 정확한 정보를 항상 유지해 주셔야 합니다.</p>
            <p className="tx-exp-tp5">&#8251; 타인의 개인정보를 도용한 피해방지 및  회원님의 개인정보보호를 위해 본인확인 과정을 실시하고 있습니다.</p>
            <p className="tx-exp-tp5">&#8251; 이름을 개명하신 경우에는 별도의 본인인증을 거친 후 변경이 가능합니다.</p>
          </div>

          <table className="table-tp1 input th-c" summary="회원정보 수정 내용">
            <caption className="away">회원정보 수정</caption>
            <colgroup>
              <col width="25%" />
              <col width="75%" />
            </colgroup>
            <tbody>
              <tr>
                <th>아이디</th>
                <td>autobleuser</td>
              </tr>
              <tr>
                <th>이름<em>(선택)</em></th>
                <td>이현대</td>
              </tr>
              <tr>
                <th>휴대폰번호<em>(선택)</em></th>
                <td>
                  <Input type="text" width={180} height={40} value="010-1234-5678" />
                  <Button size="mid" background="blue80" title="인증번호받기" width={115} height={40} marginLeft={8} marginRight={8} />
                  <span className="certify">
                    <Input type="text" width={220} height={40} value="인증번호를 입력하세요." /><Button size="mid" color="blue80" title="인증" />
                  </span>
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td><Input type="text" width={383} height={40} value="영문, 숫자, 특수문자 혼합 8~15자 이내" /></td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td><Input type="text" width={383} height={40} value="영문, 숫자, 특수문자 혼합 8~15자 이내" /></td>
              </tr>
              <tr>
                <th>이메일</th>
                <td><Input type="text" width={383} height={40} value="autobeluser@naver.com" /></td>
              </tr>
              <tr>
                <th>주소<em>(선택)</em></th>
                <td className="pd8-12 address">
                  <span className="bridge2">
                    <Input type="text" disabled={true} width={102} height={40} value="152314" />
                    <Button size="mid" background="blue80" title="우편번호" width={102} height={40} />
                  </span>
                  <span className="bridge2">
                    <Input type="text" disabled={true} width={212} height={40} value="서울시 강남구 도산로" />
                    <Input type="text" width={212} height={40} value="121 5층" />
                  </span>
                </td>
              </tr>
              <tr>
                <th></th>
                <td className="pd8-12">
                  <CheckBox id='chk-agree' />
                  <div className="terms-wrap">
                    약관 전문 노출 영역
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <Buttons align="center" marginTop={49}>
            <Button size="big" background="gray" title="취소" width={180} height={52}/>
            <Button size="big" background="blue80" title="확인" width={180} height={52}/>
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default GeneralMember01