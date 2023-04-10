import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const Sidenav = () => {
    const navbarDropdownRef = useRef<HTMLDivElement>(null);
    const [isNavbarDropdownVisible, setIsNavbarDropdownVisible] = useState(false);

    const toggleNavbarDropdown = () => {
        setIsNavbarDropdownVisible(!isNavbarDropdownVisible);
    };

    useEffect(() => {
        if (navbarDropdownRef.current) {
            const navbarDropdown = navbarDropdownRef.current;
            if (isNavbarDropdownVisible) {
                navbarDropdown.style.display = 'block';
                navbarDropdown.style.height = '0px';
                navbarDropdown.style.height = navbarDropdown.scrollHeight + 'px';
            } else {
                navbarDropdown.style.height = '0px';
                setTimeout(() => {
                    navbarDropdown.style.display = 'none';
                }, 500);
            }
        }
    }, [isNavbarDropdownVisible]);

    return (
        <>
            <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
                onClick={toggleNavbarDropdown}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
                ref={navbarDropdownRef}
            >
                <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                    <li
                        className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 "
                        aria-current="page"
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 "
                        aria-current="page"
                    >
                        <Link href="/about">About</Link>
                    </li>
                    <li
                        className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 "
                        aria-current="page"
                    >
                        <Link href="/users">Users List</Link>
                    </li>
                    <li
                        className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-blue-500 "
                        aria-current="page"
                    >
                        <a href="/api/users">Users API</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidenav;
