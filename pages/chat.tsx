import React from 'react';
import Layout from '../components/Layout';
import InputForm from '../components/Chat/InputForm';
import MessageDisplayer from '../components/Chat/MessageDisplayer';

const ChatPage = () => {
    return (
        <Layout title="ChatApp">
            <MessageDisplayer></MessageDisplayer>
            <InputForm></InputForm>
        </Layout>
    );
};

export default ChatPage;
