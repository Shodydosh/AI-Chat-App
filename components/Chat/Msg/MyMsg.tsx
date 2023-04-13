import React from 'react';

const MyMsg = (props) => {
    const {msg} = props;
    return (
        <div className="flex flex-row-reverse">
            <div className="flex flex-col">
                <h4 className="mr-2 font-medium text-gray-900 text-end dark:text-white">Me</h4>
                <div
                    className="relative px-4 py-3 mb-4 ml-12 text-gray-900 border border-gray-300 rounded bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    role="alert"
                >
                    <span className="block sm:inline">
                        {msg}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyMsg;
