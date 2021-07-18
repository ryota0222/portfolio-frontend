import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400;700&family=Noto+Sans+JP:wght@300;400;700&family=Roboto:wght@300;400;700;900&display=swap"
            rel="stylesheet"
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
