import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default ReactApp;
