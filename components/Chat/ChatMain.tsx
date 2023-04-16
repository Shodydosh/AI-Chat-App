import React, { useEffect, useState } from 'react';
import MessageDisplayer from './MessageDisplayer';
import InputForm from './InputForm';
import ChatFooter from './ChatFooter';

const systemMessage = {
    role: 'system',
    content:
        "Explain things like you're talking to a software professional with 2 years of experience.",
};
const ApiKey = process.env.OPENAI_API_KEY;

const ChatMain = () => {
    const [messages, setMessages] = useState([]);

    const handleNewMessage = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: 'user',
        };

        let newMessages: Array<object> = [...messages, newMessage];

        setMessages(newMessages);

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        const loadingMsg = {
            message: 'loading',
            direction: 'outgoing',
            sender: 'loading',
        };
        setMessages([...messages, newMessage, loadingMsg]);
        await processMessageToChatGPT(newMessages);
    };

    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const maxTokens = 200;

    async function processMessageToChatGPT(chatMessages) {
        // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if (messageObject.sender === 'ChatGPT') {
                role = 'assistant';
            } else {
                role = 'user';
            }
            return { role: role, content: messageObject.message };
        });

        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act.
        const apiRequestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                systemMessage, // The system message DEFINES the logic of our chatGPT
                ...apiMessages, // The messages from our chat with ChatGPT
            ],
        };

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + ApiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                return data.json();
                console.log(data);
            })
            .then((data) => {
                console.log(data);
                setMessages([
                    ...chatMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: 'ChatGPT',
                    },
                ]);
            });
    }

    return (
        <div className="relative">
            <MessageDisplayer msgData={messages}></MessageDisplayer>
            <div className="absolute bottom-0 w-full border-gray-200 bg-white px-4 duration-500 dark:border-gray-700 dark:bg-gray-900">
                <InputForm onNewMessage={handleNewMessage}></InputForm>
                <ChatFooter></ChatFooter>
            </div>
        </div>
    );
};

export default ChatMain;
