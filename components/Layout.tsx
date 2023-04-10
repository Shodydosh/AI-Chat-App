import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from './Core/Header';
import Footer from './Core/Footer';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className="h-full border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header></Header>
        <div className="h-full border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
            {children}
        </div>
        <Footer></Footer>
    </div>
);

export default Layout;
