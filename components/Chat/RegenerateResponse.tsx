import React from 'react';

const RegenerateResponse = (props) => {
    const { onRegenerate } = props;

    const handleRegenerate = (): void => {
        onRegenerate('123');
    };

    return (
        <div className="mb-4 flex justify-center text-sm">
            <button
                className="btn btn-neutral relative rounded-md border-0 bg-white px-2 py-1 text-gray-600 dark:border-gray-500 dark:bg-gray-900 dark:text-white md:border"
                onClick={handleRegenerate}
            >
                <div className="item s-center flex w-full items-center justify-center gap-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-3 w-3"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polyline points="1 4 1 10 7 10"></polyline>
                        <polyline points="23 20 23 14 17 14"></polyline>
                        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>
                    Regenerate response
                </div>
            </button>
        </div>
    );
};

export default RegenerateResponse;
