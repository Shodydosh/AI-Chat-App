import React from 'react';

import MyMsg from './MyMsg';
import AIMsg from './AIMsg';
import Fetching from './Fetching';

const MessageDisplayer = () => {
    return (
        <div>
            <MyMsg></MyMsg>
            <AIMsg></AIMsg>
            <Fetching></Fetching>
        </div>
    );
};

export default MessageDisplayer;
