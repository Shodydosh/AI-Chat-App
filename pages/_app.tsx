import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';
import '../assets/css/components/Sidenav.css';

/**
 * This is a functional component in TypeScript React that renders the Component and pageProps passed
 * as props.
 * @param {AppProps}  - The `MyApp` function takes in two parameters: `Component` and `pageProps`.
 * @returns The function `MyApp` is returning the `Component` with the `pageProps` passed as props.
 */
function MyApp({ Component, pageProps }: AppProps) {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    return <Component {...pageProps} />;
}

export default MyApp;
