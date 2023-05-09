import React, { useEffect, useState } from 'react';
import Fetching from '../Fetching';
import CodeContainer from '../../CodeContainer';

const AIMsg = (props) => {
    const { msg } = props;
    const [isLoading, setIsLoading] = useState(false);
    /* This line of code is splitting the `msg` string into an array of paragraphs based on the regular
    expression `/d+\./g`, which matches any sequence of one or more digits followed by a period. The
    `filter(Boolean)` method is then used to remove any empty strings from the resulting array. */
    const formattedText = msg.replace(/\n/g, '<br>');

    useEffect(() => {
        if (msg === 'loading') setIsLoading(true);
        else {
            setIsLoading(false);
            console.log(formattedText);
        }
    }, [msg]);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h4 className="ml-2 text-start font-medium text-gray-900 dark:text-white">AI</h4>
                <div
                    className="relative mb-4 mr-12 rounded border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    role="alert"
                >
                    <span className="block sm:inline">
                        {isLoading ? (
                            <Fetching></Fetching>
                        ) : (
                            <>
                                <CodeContainer />
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: formattedText }} />
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AIMsg;
