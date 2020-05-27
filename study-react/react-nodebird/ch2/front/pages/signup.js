import React, { useState, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    /* useEffect(() => {
        console.log(id);
    }); */

    const onFinish = (e) => {
        console.log({
            id,
            nick,
            password,
            passwordChk,
            term,
        });

        if(password !== passwordChk){
            return setPasswordError(true);
        }

        if(!term){
            return setTermError(true);
        }

        e.preventDefault();
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.nick);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.password);
    };
    const onChangePasswordChk = (e) => {
        setPasswordChk(e.target.passwordChk);
    };
    const onChangeTerm = (e) => {
        setTerm(e.target.checked);
    };

    return (
        <>
            <Form onFinish={onFinish} style={{padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label><br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label><br />
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="userpassword">비밀번호</label><br />
                    <Input name="userpassword" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="userpassword-chk">비밀번호체크</label><br />
                    <Input name="userpassword-chk" type="password" value={passwordChk} required onChange={onChangePasswordChk} />
                    {passwordError && <div style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" onChange={onChangeTerm}>동의합니다.</Checkbox>
                    {termError && <div style={{color: 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;