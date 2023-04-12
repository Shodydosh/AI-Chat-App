import React from 'react';

const AIMsg = (props) => {
    const { msg } = props;
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h4 className="ml-2 text-start font-medium text-gray-900 dark:text-white">
                    GPT 3.5
                </h4>
                <div
                    className="relative mb-4 mr-12 rounded border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    role="alert"
                >
                    <span className="block sm:inline">{msg}</span>
                </div>
            </div>
        </div>
    );
};

export default AIMsg;
