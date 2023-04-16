import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';

import Header from './Core/Header';
import Footer from './Core/Footer';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className="flex h-screen flex-col justify-between border-gray-200 bg-white duration-500 dark:border-gray-700 dark:bg-gray-900">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header></Header>
        <div className="relative max-h-screen">
            <div className="relative w-full border-gray-200 bg-white p-4 duration-500 dark:border-gray-700 dark:bg-gray-900">
                {children}
            </div>
            <Footer></Footer>
        </div>
    </div>
);

export default Layout;
