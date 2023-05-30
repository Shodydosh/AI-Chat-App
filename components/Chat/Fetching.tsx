import React from 'react';

const Fetching = () => {
    return (
        <div className="mb-2 mt-2 flex flex-row items-center dark:text-white">
            <div className="mr-1 h-2 w-2 animate-pulse rounded-full bg-gray-800 dark:bg-white"></div>
            <div className="animation-delay-300 mr-1 h-2 w-2 animate-pulse rounded-full bg-gray-800 dark:bg-white"></div>
            <div className="animation-delay-600 mr-1 h-2 w-2 animate-pulse rounded-full bg-gray-800 dark:bg-white"></div>
        </div>
    );
};

export default Fetching;
