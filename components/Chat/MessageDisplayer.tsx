import React, { useState, useEffect } from 'react';

import MyMsg from './Msg/MyMsg';
import AIMsg from './Msg/AIMsg';
import Fetching from './Fetching';

const MessageDisplayer = (props) => {
    const { msgData } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState(msgData);

    // user0, bot1

    let newMsgSender;
    useEffect(() => {
        setMessages(msgData);
    }, [msgData]);

    useEffect(() => {}, [isLoading]);

    return (
        <div className="h-screen">
            <div className="max-h-full overflow-y-auto px-4 pb-40 pt-8">
                {messages.map((messageObj, index) => {
                    if (messageObj.sender === 'user') {
                        return <MyMsg msg={messageObj.message} key={index} />;
                    } else {
                        return <AIMsg msg={messageObj.message} key={index} />;
                    }
                })}
            </div>
        </div>
    );
};

export default MessageDisplayer;
