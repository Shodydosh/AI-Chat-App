import React, { useState, useEffect } from 'react';

interface msg {
    id: number;
    content: string;
}

const InputForm = (props) => {
    const [inputContent, setInputContent] = useState<string>('');
    const { onNewMessage } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log('Comment content: ' + inputContent);
        onNewMessage(inputContent);
        event.preventDefault();
        setInputContent('');
    };

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setInputContent(fieldValue);
    };

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing',
        };
        onNewMessage(message);
    };

    async function processMessageToChatGPT(chatMessage: string) {}

    const getRes = () => {};

    return (
        <div className="bsolute bottom-0 left-0 w-full">
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <textarea
                        id="search"
                        className="scrollbar-track-gray-900 block h-14 max-h-56 w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-4 pr-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Type here.."
                        onChange={handleInputChange}
                        value={inputContent}
                        required
                    />
                    <button
                        type="submit"
                        className="dark:hover:bg-grey-500 dark:focus:ring-grey-800 hover:bg-grey-700 absolute bottom-2.5 right-2.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-1 h-4 w-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;
