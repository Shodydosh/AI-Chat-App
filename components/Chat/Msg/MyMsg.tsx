import React from 'react';

const MyMsg = (props) => {
    const { msg } = props;
    return (
        <div className="flex flex-row-reverse">
            <div className="flex flex-col">
                <h4 className="mr-2 text-end font-medium text-gray-900 dark:text-white">Me</h4>
                <div
                    className="relative mb-4 ml-12 rounded border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    role="alert"
                >
                    <span className="block sm:inline" style={{ whiteSpace: 'pre-wrap' }}>
                        {msg}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyMsg;
