import React from 'react';

const InputForm = () => {
    return (
        <form>
            <label
                htmlFor="search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <input
                    type="search"
                    id="search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Type here.."
                    required
                />
                <button
                    type="submit"
                    className="dark:hover:bg-grey-700 dark:focus:ring-grey-800 hover:bg-grey-700 absolute bottom-2.5 right-2.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white focus:outline-none  focus:ring-4 focus:ring-blue-300"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default InputForm;
