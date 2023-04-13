import React, { useEffect, useState } from 'react';
import MessageDisplayer from './MessageDisplayer';
import InputForm from './InputForm';
import Footer from '../Core/Footer';
import gett from '../../pages/index';

const ChatMain = () => {
    const [msgData, setMsgData] = useState([]);
    // set the API endpoint URL
    const endpointUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const handleNewMessage = async (message) => {
        await message;
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing',
        };
        setMsgData([...msgData, newMessage]);

        // await processMessageToChatGPT(msgData); //

        //! fake fetch
        const loading = {
            message: 'loading',
            sender: 'bot',
            direction: 'coming',
        };
        const response = {
            message: '123123123123',
            sender: 'bot',
            direction: 'coming',
        };
        setMsgData([...msgData, newMessage, loading]);
        setTimeout(() => {
            setMsgData([...msgData, newMessage, response]);
        }, 3000);
    };
    useEffect(() => {}, [msgData]);
    console.log('process.env.OPENAI_API_KEY ' + process.env.OPENAI_API_KEY);
    gett();

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if (messageObject.sender === 'chatGPT') {
                role = 'assistant';
            } else {
                role = 'user';
            }
            return { role: role, content: messageObject.content };
        });

        const apiRequestBody = {
            model: 'gpt-3.5-turbo',
            messages: [...apiMessages],
        };

        const params = {
            prompt: 'Hello, ChatGPT!',
            max_tokens: 50,
            temperature: 0.7,
        };

        await fetch(endpointUrl, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data);
            });
    }
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
