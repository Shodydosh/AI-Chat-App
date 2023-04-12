import React, { useState, useEffect } from 'react';

import MyMsg from './Msg/MyMsg';
import AIMsg from './Msg/AIMsg';
import Fetching from './Fetching';

const MessageDisplayer = (props) => {
    const { msgData } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState(msgData);

    // user0, bot1

    let newMsgID;
    useEffect(() => {
        setMessages(msgData);
        if (msgData.length > 0) {
            newMsgID = msgData[msgData.length - 1].id || 0;
            if (newMsgID == 0) setIsLoading(true);
            else setIsLoading(false);
        }
    }, [msgData]);
    useEffect(() => {}, [isLoading]);

    return (
        <div className="h-screen">
            <div className="max-h-full overflow-y-auto px-4 pb-40 pt-8">
                {messages.map((message, index) => {
                    if (message.id == 0) {
                        return <MyMsg msg={message.content} key={index} />;
                    } else {
                        return <AIMsg msg={message.content} key={index} />;
                    }
                })}
            </div>
            {isLoading && <Fetching></Fetching>}
        </div>
    );
};

export default MessageDisplayer;
