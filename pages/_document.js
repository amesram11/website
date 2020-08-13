import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../shared/gtag'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const styles = extractCritical(initialProps.html)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        data-emotion-css={styles.ids.join(' ')}
                        dangerouslySetInnerHTML={{ __html: styles.css }}
                    />
                </>
            ),
        }
    }

    render() {
        return (
            <html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
