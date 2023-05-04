import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { CodeBlockProps } from 'react-code-blocks/dist/components/CodeBlock';

const CodeContainer = (props) => {
    const { code, language } = props;
    const displayCode =
        code ||
        `<div className={ titleClass }>
            <FontAwesomeIcon className="icon" icon={ icon } />
            <span>{ question.title }</span>
        </div>`;
    const displayLang = language || 'javascript';
    return (
        <>
            <CodeBlock text={displayCode} language={displayLang} theme={dracula} />
        </>
    );
};

export default CodeContainer;
