import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  NextScript,
  Main,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const originalRenderPage = context.renderPage;
    const sheet = new ServerStyleSheet();

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (AppComponent) => (props) =>
          sheet.collectStyles(<AppComponent {...props} />),
      });

    const initialProps: DocumentInitialProps = await Document.getInitialProps(
      context
    );
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
