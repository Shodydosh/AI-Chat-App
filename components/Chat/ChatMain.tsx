import React, { useEffect, useState } from 'react';

import MessageDisplayer from './MessageDisplayer';
import RegenerateResponse from './RegenerateResponse';
import InputForm from './InputForm';
import ChatFooter from './ChatFooter';

const systemMessage = {
    role: 'system',
    content:
        "Explain things like you're talking to a software professional with 2 years of experience.",
};
const loadingMessage = {
    message: 'loading',
    direction: 'outgoing',
    sender: 'loading',
};
const ApiKey = process.env.OPENAI_API_KEY;

const ChatMain = () => {
    const [messages, setMessages] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleRegenerate = async (message) => {
        const newMessages = messages.slice(-2);
        await setMessages(newMessages);
        console.log(messages);
        handleNewMessage(messages[messages.length - 2].message);
    };

    const handleNewMessage = async (message) => {
        if (!isFetching) {
            setIsFetching(true);
            const newMessage = {
                message,
                direction: 'outgoing',
                sender: 'user',
            };

            let newMessages: Array<object> = [...messages, newMessage];
            setMessages(newMessages);

            // Initial system message to determine ChatGPT functionality
            // How it responds, how it talks, etc.

            setMessages([...messages, newMessage, loadingMessage]);
            await processMessageToChatGPT(newMessages);
        } else {
            alert(
                "I'm struggling to find the answer, please wait a moment before asking a nother one",
            );
        }
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

        await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + ApiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                return data.json();
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

                setIsFetched(true);
                setIsFetching(false);
            });
    }

    return (
        <div className="relative">
            <MessageDisplayer msgData={messages}></MessageDisplayer>
            <div className="dark:bg-bottom-transparent-grey-900 bg-bottom-transparent-white absolute bottom-0 w-full border-gray-200 bg-transparent px-4 duration-500 dark:border-gray-700">
                {isFetched && (
                    <RegenerateResponse onRegenerate={handleRegenerate}></RegenerateResponse>
                )}
                <InputForm onNewMessage={handleNewMessage}></InputForm>
                <ChatFooter></ChatFooter>
            </div>
        </div>
    );
};

export default ChatMain;
