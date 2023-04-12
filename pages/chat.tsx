import React from 'react';
import Head from 'next/head';
import ChatMain from '../components/Chat/ChatMain';

const ChatPage = () => {
    return (
        <div className="flex h-full flex-col justify-between border-gray-200 bg-white duration-500 dark:border-gray-700 dark:bg-gray-900">
            <Head>
                <title>CHAT</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="relative h-screen max-h-screen">
                <ChatMain></ChatMain>
            </div>
        </div>
    );
};

export default ChatPage;
