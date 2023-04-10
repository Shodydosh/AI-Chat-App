import React from 'react';
import Sidenav from '../Sidenav';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <div className="flex items-center">
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            <Link href="/">AI Chat App 👋</Link>
                        </span>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                            <li>
                                <a
                                    href="#"
                                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-black md:dark:bg-transparent md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex w-full items-center justify-between rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Dropdown{' '}
                                    <svg
                                        className="ml-1 h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div
                                    id="dropdownNavbar"
                                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                        aria-labelledby="dropdownLargeButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Sidenav />
                </div>
            </nav>
        </header>
    );
};

export default Header;
