import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import SignUpCheckBoxGroup from '@src/components/common/SignUpCheckBoxGroup';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import RadioGroup from '@lib/share/items/RadioGroup'
import InputFile from '@lib/share/items/InputFile';
import Input from '@lib/share/items/Input'
import { signup_check_list } from '@src/dummy';
import { auction_check_term } from '@src/dummy/terms';
import { SECTION_MEMBER } from '@src/actions/types';

const GroupStep01 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  // InputFile & InputPicture
  const uploadList1 = (files) => {
    const _files = Object.values(files);
    _files.map(v => console.log(v));
  };

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="member-sec">
          <div className="content-wrap member-contents">
            <div className="member-tit-area">
              <h4>단체회원가입</h4>
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
                        <Input type="text" placeHolder="영문, 숫자 혼합 15자 이내" id="user-id" width={548} />
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
                        <label htmlFor="agency-name">소속상사명</label>
                      </th>
                      <td>
                        <Input type="text" value="현대모터스" disabled={true} id="agency-name" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="ceo-name">대표자명</label>
                      </th>
                      <td>
                        <Input type="text" value="김현대" disabled={true} id="ceo-name" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="ceo-phone">대표자 휴대폰번호</label>
                      </th>
                      <td>
                        <Input type="text" value="010-1234-5678" disabled={true} id="ceo-phone" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-num">사업자 등록번호</label>
                      </th>
                      <td>
                        <Input type="text" value="123-12-12345" disabled={true} id="agency-num" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-address">사업자 주소</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" value="12345" disabled={true} id="agency-post" width={378} />
                        </span>
                        <Button size="mid" background="gray" title="우편번호" width={160} height={48} />
                        <span className="bridge2">
                          <Input type="text" value="서울특별시 강남구 테헤란로 301" disabled={true} id="agency-address" width={548} />
                        </span>
                        <span className="bridge2">
                          <Input type="text" value="현대글로비스(주)" id="agency-address2" width={548} />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="agency-area">소속단지</label>
                      </th>
                      <td>
                        <span className="bridge">
                          <Input type="text" value="지역" disabled={true} id="agency-area" width={269} />
                        </span>
                        <Input type="text" value="단지" disabled={true} id="agency-area2" width={269} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-name">이름(담당자명)</label>
                      </th>
                      <td>
                        <Input type="text" value="이현대" id="user-name" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-email">이메일</label>
                      </th>
                      <td>
                        <Input type="text" value="hyundai123@glovis.net" id="user-email" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>사업자등록증 이미지</th>
                      <td>
                        <InputFile uploadList={uploadList1} />
                      </td>
                    </tr>
                    <tr>
                      <th>관리사업자등록증 이미지</th>
                      <td>
                        <InputFile uploadList={uploadList1} />
                      </td>
                    </tr>
                    <tr>
                      <th>법인인감증명서 이미지</th>
                      <td>
                        <InputFile uploadList={uploadList1} />
                      </td>
                    </tr>
                    <tr>
                      <th>위임장 이미지<em>(선택)</em></th>
                      <td>
                        <InputFile uploadList={uploadList1} />
                        <p className="tx-exp-tp6 line1">
                          · 대표자 대신 가입 시 위임장 이미지를 넣어주세요.
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
                    <tr>
                      <th>소속딜러 정보</th>
                      <td>
                        <table summary="소속딜러 정보에 대한 내용" className="table-tp1 th-c">
                          <caption className="away">소속딜러 정보</caption>
                          <colgroup>
                            <col width="26%" />
                            <col width="38%" />
                            <col width="38%" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>대표</th>
                              <td>
                                김현대<br />
                                010-1234-5678
                              </td>
                              <td>
                                GG19-01865<br />
                                ( ~ YYYY.MM.DD)
                              </td>
                            </tr>
                            <tr>
                              <th>딜러</th>
                              <td>
                                김현대<br />
                                010-1234-5678
                              </td>
                              <td>
                                종사원증번호<br />
                                ( ~ 유효기간 만료일자)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="tx-exp-tp6">
                          · 동일 소속의 딜러목록이 자동으로 노출됩니다.<br />
                          · 마이페이지에서도 쉽게 소속딜러 관리를 하실 수 있습니다.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <SignUpCheckBoxGroup
                  sub_title="필수 약관 동의"
                  sub_id="chk-agree-essential"
                  title="약관 전체 동의"
                  id="chk-agree-all"
                  agree_list={signup_check_list}
                  agree_term={auction_check_term}
                />
              </fieldset>
            </form>
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" background="blue80" title="가입완료" width={180} height={60} href="memberStep03" />
            </Buttons>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default GroupStep01;