import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const htmlPrefix = 'og: http://ogp.me/ns#'

class MyDocument extends Document<{ prefix: string | null }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    // 404 ページには prefix を設定しない
    const prefix = ctx.pathname.startsWith('/404') ? null : htmlPrefix
    return { ...initialProps, prefix, locale: ctx?.locale || 'ja' }
  }
  render() {
    const locale = this.props.locale
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    const prefix = this.props.prefix
    return (
      <Html dir={dir} lang={locale} prefix={prefix}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400;700&family=Noto+Sans+JP:wght@300;400;700&family=Roboto:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
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
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#444444"
          />
          <meta name="msapplication-TileColor" content="#444444" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#444444" />
          <meta
            name="google-site-verification"
            content="dISNCW-iJsczw9x-T401OF8rnvji-kWWYOOmLcNab_A"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
