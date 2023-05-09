import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';
import '../assets/css/components/Sidenav.css';

function MyApp({ Component, pageProps }: AppProps) {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    return <Component {...pageProps} />;
}

export default MyApp;
