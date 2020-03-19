import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import RadioGroup from '@lib/share/items/RadioGroup'
import Input from '@lib/share/items/Input';
import Steps from '@lib/share/items/Steps';
import { SECTION_MEMBER } from '@src/actions/types';

const MemberStep03 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="member-sec-w">
          <div className="content-wrap member-steps">
            <div className="member-tit-area">
              <h3>일반회원 가입</h3>
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
                        <label htmlFor="user-id-old">아이디</label>
                      </th>
                      <td>
                        <sapn className="bridge2">
                          <RadioGroup dataList={[
                            { id: 'old-id', value: 1, checked: true, disabled: false, title: '기존 ID 사용' },
                            { id: 'new-id', value: 2, checked: false, disabled: false, title: '신규 ID 등록' }
                          ]} />
                        </sapn>
                        <Input type="text" value="hyundai123" disabled={true} id="user-id-old" width={548} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="user-id-new">아이디</label>
                      </th>
                      <td>
                        <sapn className="bridge2">
                          <RadioGroup dataList={[
                            { id: 'old-id2', value: 1, checked: false, disabled: false, title: '기존 ID 사용' },
                            { id: 'new-id2', value: 2, checked: true, disabled: false, title: '신규 ID 등록' }
                          ]} />
                        </sapn>
                        <span className="bridge">
                          <Input type="text" value="hyundai123" id="user-id-new" width={378} />
                        </span>
                        <Button size="mid" background="gray" title="중복확인" width={160} height={48} />
                        <p className="tx-sub">아이디 중복을 확인해주세요</p>
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
                        <p className="tx-sub">올바른 이메일 주소를 입력하세요. (예: name@gmail.com)</p>
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
    </AppLayout>
  )
}

export default MemberStep03;