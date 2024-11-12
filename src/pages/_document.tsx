import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // Wrap the app inside the ServerStyleSheet
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Combine the collected styles with the initial props
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      // Seal the sheet to prevent memory leaks
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="theme-color" content="#000"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="256x256" href="/favicon.ico"/>
          <link rel="manifest" href="/manifest.json"/>
        </Head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
