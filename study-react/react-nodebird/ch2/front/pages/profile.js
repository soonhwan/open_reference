import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.js" />
            </Head>
            <AppLayout>
                Profile!
            </AppLayout>
        </>
    );
};

export default Profile;