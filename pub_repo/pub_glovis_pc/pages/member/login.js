
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import BtnNaver from '@src/components/common/BtnNaver';
import BtnKakao from '@src/components/common/BtnKakao';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import CheckBox from '@lib/share/items/CheckBox';
import Input from '@lib/share/items/Input';
import Link from 'next/link'
import { SECTION_MEMBER } from '@src/actions/types';

const Login = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MEMBER });

  const [errorPw, setErrorPw] = useState(true); // 패스워드 5번 잘못 입력시 값을 true로 설정해주세요. true 시 캡챠모드로 전환
  const [memMode, setMemMode] = useState("member") // 비회원시 값을 nonmember로 설정해주세요.
  const handleMemberMode = useCallback((mode) => () => {
    setMemMode(mode);
  }, []);

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap login-contents">
          <div className="login-tit-area">
            <h3>로그인</h3>
          </div>

          <div className="login-wrap">
            <TabMenu type="type7">
              <TabCont tabTitle="회원 로그인" id="tab7-1" index={0} onClick={handleMemberMode("member")}>
                <form className="login-form">
                  <fieldset>
                    <legend className="away">로그인</legend>
                  </fieldset>
                  <ul>
                    <li>
                      <label htmlFor="user-id" className="hide" >아이디</label>
                      <Input type="text" placeHolder="아이디" id="user-id" width={368} />
                    </li>
                    <li>
                      <label htmlFor="user-pw" className="hide" >비밀번호</label>
                      <Input type="password" placeHolder="비밀번호" id="user-pw" width={368} />
                    </li>
                    {errorPw === false && <li><CheckBox id='chk-save' title='아이디 저장' /></li>}
                  </ul>
                  {
                    errorPw === true && 
                    <div className="captcha-wrap">
                      <p className="tx-not">5회 이상 비밀번호를 잘못 입력하셨습니다.<br />정보보호를 위해 자동입력 방지문자를 함께 입력 후 로그인해주세요.</p>
                      <div className="captcha-box">
                        <div className="img-wrap"><img src="/images/dummy/captcha-img.png" alt="자동입력 방지문자 이미지" /></div>
                        <div className="btn-wrap">
                          <Button size="mid" title="새로고침" width={138} height={43} />
                          <Button size="mid" title="음성으로 듣기" width={138} height={43} marginTop={4} />
                        </div>
                        <label htmlFor="security-tx" className="hide" >보안문자</label>
                        <Input type="text" placeHolder="보안문자" id="security-tx" width={348} />
                      </div>
                    </div>
                  }
                  <Button size="full" background="blue80" title="로그인" marginTop={20} />
                </form>

                <div className="other-login">
                  <Buttons marginTop={40}>
                    <BtnNaver style={{ float: "left" }} />
                    <BtnKakao style={{ float: "right" }} />
                  </Buttons>
                  <p className="tx-sub">
                    <span>SNS 로그인은 일반회원만 가능합니다.</span><br />
                    딜러회원이시면, 아이디와 비밀번호를 입력하여 로그인해주세요.
                  </p>
                </div>
              </TabCont>
              <TabCont tabTitle="비회원 로그인" id="tab7-2" index={1} onClick={handleMemberMode("nonmember")}>
                <div className="tx-bg"><p>비회원으로 이용하신 내역을<br />조회하실 수 있습니다.</p></div>
                <form className="login-form">
                  <fieldset>
                    <legend className="away">비회원 로그인</legend>
                  </fieldset>
                  <ul className="vert-step">
                    <li>
                      <span className="step">1</span>
                      <div className="con">
                        <p className="tit">신청번호 입력</p>
                        <span>신청번호를 입력해주세요.</span>
                        <label htmlFor="apply-num" className="hide" >신청번호</label>
                        <Input type="text" placeHolder="신청번호" id="apply-num" width={308} />
                      </div>
                    </li>
                    <li>
                      <span className="step">2</span>
                      <div className="con">
                        <p className="tit">본인인증</p>
                        <span>휴대폰 본인인증을 진행해 주세요.</span>
                        <Button size="mid" background="blue80" title="휴대폰 본인인증" width={160} height={48} />
                        <p className="tx-sub">
                          입력하신 회원님의 개인 정보는 <span>본인인증 이외의<br />목적으로 활용하지 않습니다.</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </form>
              </TabCont>
            </TabMenu>
          </div>
          {
            memMode === "member" &&
            <>
              <ul className="find-info">
                <li><Link href=""><a>아이디찾기</a></Link></li>
                <li><Link href=""><a>비밀번호찾기</a></Link></li>
              </ul>
              <div className="member-etc-area">
                <p className="member-etc-msg">
                  아직 현대 오토벨 회원이 아니세요?<br />
                  <Link href="memberHome"><a className="btn">회원가입</a></Link>
                </p>
              </div>
            </>
          }

          {
            memMode === "nonmember" &&
            <Buttons align="center" marginTop={60} className="w-line">
              <Button size="big" background="blue80" title="조회" width={180} height={60} />
            </Buttons>
          }

        </div>
      </div>
    </AppLayout>
  )
}

export default Login;