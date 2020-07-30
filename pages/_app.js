import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import NextApp from 'next/app'
import { globalStyles } from '../shared/styles'

export default class App extends NextApp {
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
