import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import RadioGroup from '@lib/share/items/RadioGroup';
import Radio from '@lib/share/items/Radio';
import InputFile from '@lib/share/items/InputFile';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import Steps from '@lib/share/items/Steps';
import { select_area, radio_basic } from '@src/dummy';
import { SECTION_MEMBER } from '@src/actions/types';

const DealerStep01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  // InputFile & InputPicture
  const uploadList1 = (files) => {
    const _files = Object.values(files);
    _files.map(v => console.log(v));
  };

  const [rodalShow, setRodalShow, rodalPopupHandler, modalCloseHandler] = useRodal(true, true);

  // 소속상사 검색 팝업의 라디오 버튼
  const [isValue, setIsValue] = useState(1);
  const handleChange = useCallback((e) => {
    e.preventDefault();
    setIsValue(Number(e.target.value));
  }, []);

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="member-sec-w">
          <div className="content-wrap member-steps">
            <div className="member-tit-area">
              <h3>딜러회원 가입</h3>
            </div>
            <Steps type={1} contents={['이용약관 및 개인정보수집 및 \n이용에 관한 동의', '본인인증', '가입정보입력', '회원가입완료']} active={3} reverse={true} marginTop={59} />
          </div>
        </div>
        <div className="member-sec">
          <div className="content-wrap member-contents">
            <div className="member-tit-area">
              <h4>가입정보입력</h4>
            </div>
            <form className="join-form">
              <fieldset>
                <legend className="away">가입정보입력</legend>
                <table summary="가입정보입력에 대한 내용" className="table-tp2">
                  <caption className="away">가입정보입력</caption>
                  <colgroup>
                    <col width="33%" />
                    <col width="67%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        <label htmlFor="user-id">아이디</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" placeHolder="영문, 숫자 혼합 15자 이내" id="user-id" width={378} />
                        </span>
                        <Button size="mid" background="gray" title="중복확인" width={160} height={48} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-pw">비밀번호</label>
                      </th>
                      <td>
                        <Input type="password" placeHolder="영문, 숫자, 특수문자 혼합 8~15자 이내" id="user-pw" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="pw-chk">비밀번호 확인</label>
                      </th>
                      <td>
                        <Input type="password" placeHolder="영문, 숫자, 특수문자 혼합 8~15자 이내" id="pw-chk" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-name">이름</label>
                      </th>
                      <td>
                        <Input type="text" value="김현대" disabled={true} id="user-name" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-phone">휴대폰 번호</label>
                      </th>
                      <td>
                        <Input type="text" value="010-1234-5678" disabled={true} id="user-phone" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-email">이메일</label>
                      </th>
                      <td>
                        <Input type="text" id="user-email" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="address">주소<em>(선택)</em></label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" value="12345" disabled={true} id="post" width={378} />
                        </span>
                        <Button size="mid" background="gray" title="우편번호" width={160} height={48} />
                        <span className="bridge2">
                          <Input type="text" value="서울 서초구 신반포로" disabled={true} id="address" width={548} />
                        </span>
                        <span className="bridge2">
                          <Input type="text" placeHolder="상세주소" id="address2" width={548} />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>가입구분</th>
                      <td>
                        <RadioGroup dataList={[
                          { id: 'dealer', value: 1, checked: false, disabled: false, title: '딜러' },
                          { id: 'ceo', value: 2, checked: true, disabled: false, title: '대표' }
                        ]} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-name">소속상사명 / 대표자명</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" placeHolder="소속 상사명을 입력하세요." id="agency-name" width={269} />
                        </span>
                        <Input type="text" placeHolder="소속 상사 대표자명을 입력하세요." id="agency-ceo" width={269} />
                        <Button size="mid" background="gray" title="소속상사 검색" width={160} height={48} marginTop={10} onClick={(e) => rodalPopupHandler(e, "fade")} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-num">소속/대표 사업자 등록번호</label>
                      </th>
                      <td>
                        <Input type="text" placeHolder="사업자 등록번호를 입력하세요." id="agency-num" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-area">소속단지</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <SelectBox id="agency-area" className="items-sbox" options={select_area} width={176} height={48} />
                        </span>
                        <span className="bridge">
                          <SelectBox id="agency-area2" className="items-sbox" options={select_area} width={176} height={48} />
                        </span>
                        <SelectBox id="agency-area3" className="items-sbox" options={select_area} width={176} height={48} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="employee-num">종사원증번호/유효기간</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" placeHolder="사원증번호를 입력하세요." id="employee-num" width={269} />
                        </span>
                        <DatePicker placeHolder="유효기간을 선택하세요." inputWidth={269} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="employee-img">종사원증 이미지</label>
                      </th>
                      <td>
                        <p className="tx-tit">앞면</p>
                        <InputFile uploadList={uploadList1} />
                        <span className="bridge2">
                          <p className="tx-tit">뒷면</p>
                          <InputFile uploadList={uploadList1} />
                        </span>
                        <p className="tx-exp-tp6">
                          · 종사원증 이미지는 앞뒤면을 모두 등록해주세요.<br />
                          <span>종사원증 이미지(뒷면)를 등록해주세요.</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="profile-img">프로필 사진<em>(선택)</em></label>
                      </th>
                      <td>
                        <RadioGroup dataList={[
                          { id: 'opne', value: 1, checked: false, disabled: false, title: '공개' },
                          { id: 'non-opne', value: 2, checked: true, disabled: false, title: '비공개' }
                        ]} />
                        <span className="bridge2">
                          <InputFile uploadList={uploadList1} />
                        </span>
                        <p className="tx-exp-tp6">
                          · 이미지 등록기준 : 80X100 사이즈 / JPG 파일<br />
                          · 본인 프로필이 아닌 사진(예 : 연예인, 동물 등) 등록 시 삭제될 수도 있습니다.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" background="blue80" title="가입완료" width={180} height={60} href="memberStep03" />
            </Buttons>
          </div>
        </div>
      </div>
      <RodalPopup show={rodalShow} type={'fade'} closedHandler={modalCloseHandler} title="소속상사 검색" mode="normal" size="small">
        <div className="popup-agency">
          <form className="agency-form">
            <fieldset>
              <legend className="away">소속상사 검색</legend>
              <label htmlFor="search-terms">검색조건</label>
              <span className="bridge">
                <SelectBox id="search-terms" className="items-sbox" options={select_area} width={160} height={48} />
              </span>
              <span className="bridge">
                <Input type="text" placeHolder="검색어를 입력하세요." id="search-terms2" width={248} height={48} />
              </span>
              <Button size="big" background="blue80" title="조회" width={80} />
            </fieldset>
          </form>
          <div className="agency-con">
            {/* <p>검색어를 입력해주세요.</p> */}

            <table summary="소속상사 정보에 대한 내용" className="table-tp1 th-c td-c">
              <caption className="away">소속상사 정보</caption>
              <colgroup>
                <col width="12%" />
                <col width="32%" />
                <col width="24%" />
                <col width="32%" />
              </colgroup>
              <thead>
                <tr>
                  <th>선택</th>
                  <th>소속상사명</th>
                  <th>대표자명</th>
                  <th>사업자등록번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Radio className="simple" id="radio-simple-1" value={1} checked={isValue} disabled={false} onChange={handleChange} /></td>
                  <td>현대모터스</td>
                  <td>김현대</td>
                  <td>123-12-12345</td>
                </tr>
                <tr>
                  <td><Radio className="simple" id="radio-simple-2" value={2} checked={isValue} disabled={false} onChange={handleChange} /></td>
                  <td>현대모터스2</td>
                  <td>김현대</td>
                  <td>123-12-12345</td>
                </tr>
                <tr>
                  <td><Radio className="simple" id="radio-simple-3" value={3} checked={isValue} disabled={false} onChange={handleChange} /></td>
                  <td>현대모터스3</td>
                  <td>김현대</td>
                  <td>123-12-12345</td>
                </tr>
                <tr>
                  <td><Radio className="simple" id="radio-simple-4" value={4} checked={isValue} disabled={false} onChange={handleChange} /></td>
                  <td>현대모터스4</td>
                  <td>김현대</td>
                  <td>123-12-12345</td>
                </tr>
                <tr>
                  <td><Radio className="simple" id="radio-simple-5" value={5} checked={isValue} disabled={false} onChange={handleChange} /></td>
                  <td>현대모터스5</td>
                  <td>김현대</td>
                  <td>123-12-12345</td>
                </tr>
              </tbody>
            </table>
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="blue80" title="선택" width={180} height={60} />
            </Buttons>


            {/* <p>검색결과가 없습니다.<br />소속정보를 등록해주세요.</p>
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="blue80" title="신규둥록" width={180} height={60} />
            </Buttons> */}
          </div>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default DealerStep01;
