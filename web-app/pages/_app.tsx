import App, { AppContext, AppInitialProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

  html {
    font-family: 'Source Code Pro', monospace;
    height: 100%;
  }

  body {
    margin: 0px;
  }
`;

class MyApp extends App {
  static async getInitialProps(context: AppContext) {
    const intitialProps: AppInitialProps = await App.getInitialProps(context);
    return { ...intitialProps };
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}

export default MyApp;
