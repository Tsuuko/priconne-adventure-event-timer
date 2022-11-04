import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { WEBAPP_URL } from '../constant';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon・icon関係 */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          {/*  */}
          {/* OGP */}
          <meta name="twitter:card" content="summary" />
          <meta property="og:url" content={WEBAPP_URL} />
          <meta
            property="og:image"
            content={`${WEBAPP_URL}/favicons/apple-touch-icon.png`}
          />
          <meta property="og:title" content="プリコネアドベンチャータイマー" />
          <meta
            property="og:description"
            content="プリコネのアドベンチャーのイベント発生時刻を記録します。"
          />
          {/*  */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
