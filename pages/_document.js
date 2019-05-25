import Document, { Head, Main, NextScript } from 'next/document'

const GA_ID = "UA-131426890-1"
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link rel="icon" href="/static/icons/favicon.ico" />
          <link rel="icon" type="image/png" href="static/images/favicon.ico" />

          <link rel="manifest" href="/static/manifest.json" />
          <meta
            name="theme-color"
            content="#1EAEDB"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/static/icons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/static/icons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/static/icons/favicon.png"
          />

          <meta
            name="apple-mobile-web-app-title"
            content="Timothy Ko"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/images/favicon.png"
          />

          <meta
            name="msapplication-TileColor"
            content="#1EAEDB"
          />
          <meta
            name="msapplication-TileImage"
            content="/static/icons/favicon.png"
          />


          {/* Normalize Css */}
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />

          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />


          <script
            async
            key="amp-analytics"
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
          <amp-analytics type="gtag" data-credentials="include">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  vars: {
                    gtag_id: GA_ID,
                    config: {
                      [GA_ID]: { groups: 'default' }
                    }
                  }
                })
              }}
            />
          </amp-analytics>

        </Head>
        <body>
          <Main />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-131426890-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-131426890-1');
                  `
            }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}
