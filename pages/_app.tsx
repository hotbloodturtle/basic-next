import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache(),
});

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Container>
          <GlobalStyles />
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default ReactApp;
