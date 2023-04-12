import React, { useEffect, useState } from 'react';
import MessageDisplayer from './MessageDisplayer';
import InputForm from './InputForm';
import Footer from '../Core/Footer';

const ChatMain = () => {
    const msgDataJson = [
        {
            id: 0,
            content: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 0,
            content: 'Nulla quis lorem ut libero malesuada feugiat.',
        },
        {
            id: 1,
            content: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
        },
    ];
    const [msgData, setMsgData] = useState([]);
    const handleNewMessage = async (newMsg) => {
        await newMsg;
        setMsgData([
            ...msgData,
            {
                id: 0,
                content: newMsg,
            },
        ]);
        console.log(msgData);

        //fetch
        const response = 'ko bt ok?';
        setTimeout(() => {
            setMsgData([
                ...msgData,
                {
                    id: 0,
                    content: newMsg,
                },
                {
                    id: 1,
                    content: response,
                },
            ]);
        }, 3000);
    };
    useEffect(() => {}, [msgData]);
    return (
        <div className="relative">
            <MessageDisplayer msgData={msgData}></MessageDisplayer>
            <div className="absolute bottom-0 w-full border-gray-200 bg-white px-4 duration-500 dark:border-gray-700 dark:bg-gray-900">
                <InputForm onNewMessage={handleNewMessage}></InputForm>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ChatMain;
