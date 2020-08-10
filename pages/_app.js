import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import withGA from "next-ga";
import NextApp from 'next/app';
import Router from "next/router";
import { globalStyles } from '../shared/styles';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}

export default withGA("UA-175180353-1", Router)(App)
