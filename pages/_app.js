import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Router from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../shared/gtag';
import { globalStyles } from '../shared/styles';

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
    return (
        <CacheProvider value={cache}>
            {globalStyles}
            <Component {...pageProps} />
        </CacheProvider>
    )
}

export default App