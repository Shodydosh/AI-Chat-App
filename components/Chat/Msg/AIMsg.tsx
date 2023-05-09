import React, { useEffect, useState } from 'react';
import Fetching from '../Fetching';
import CodeContainer from '../../CodeContainer';

const AIMsg = (props) => {
    const { msg } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [codeContent, setCodeContent] = useState([]);
    /* This line of code is splitting the `msg` string into an array of paragraphs based on the regular
    expression `/d+\./g`, which matches any sequence of one or more digits followed by a period. The
    `filter(Boolean)` method is then used to remove any empty strings from the resulting array. */
    const formattedText = msg.replace(/\n/g, '<br>');

    useEffect(() => {
        if (msg === 'loading') setIsLoading(true);
        else {
            setIsLoading(false);
            console.log(formattedText);

            let start = msg.indexOf('```');
            let end = msg.indexOf('```', start + 1);

            // Extract the code block msg
            let code = msg.substring(start + 3, end).trim();

            console.log(code);
            setCodeContent([...codeContent, code]);
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
                                <CodeContainer code={codeContent} />
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
