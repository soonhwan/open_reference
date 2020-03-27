import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.js" />
            </Head>
            <AppLayout>
                <Link href="/about"><a href="#">about</a></Link>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;

