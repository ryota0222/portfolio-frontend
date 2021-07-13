import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === "ar" ? "rtl" : "ltr"
    return (
      <Html dir={dir} lang={locale}>
        <Head />
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
