import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [term, setTerm] = useState(false);

    const onSubmit = (e) => {
        console.log({
            id,
            nick,
            password,
            passwordChk,
            term
        });
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
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.js" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{padding: 10 }}>
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
                    </div>
                    <div>
                        <Checkbox name="user-term" onChange={onChangeTerm}>동의합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;