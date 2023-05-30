import React, { useEffect, useState } from 'react';
import Fetching from '../Fetching';
import CodeContainer from '../../CodeContainer';

const AIMsg = (props) => {
    const { msg } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState([]);
    /* This line of code is splitting the `msg` string into an array of paragraphs based on the regular
    expression `/d+\./g`, which matches any sequence of one or more digits followed by a period. The
    `filter(Boolean)` method is then used to remove any empty strings from the resulting array. */

    useEffect(() => {
        if (msg === 'loading') setIsLoading(true);
        else {
            setIsLoading(false);

            const regex = /```([\s\S]+?)```/g;
            let match;
            let block = [];

            // Extracting code blocks and text segments using regular expression
            let lastIndex = 0;
            while ((match = regex.exec(msg)) !== null) {
                const code = match[1].trim();
                const textSegment = msg.substring(lastIndex, match.index);
                lastIndex = match.index + match[0].length;

                block.push({ text: textSegment, type: 0 });
                block.push({ text: code, type: 1 });
            }

            block.push({ text: msg.substring(lastIndex), type: 0 });
            // block.forEach((blockdata, index) => {
            //     console.log(blockdata.type);
            //     console.log(blockdata.text);
            //     console.log('------------------');
            // });

            setContent(block);
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
                                {content.map((data, index) => {
                                    if (data.type === 1) {
                                        return <CodeContainer code={data.text} />;
                                    } else {
                                        data.text = data.text.replace(/\n/g, '<br>');
                                        return (
                                            <div dangerouslySetInnerHTML={{ __html: data.text }} />
                                        );
                                    }
                                })}
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AIMsg;
