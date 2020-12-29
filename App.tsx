import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {View, Text, LogBox} from 'react-native';
import client from './src/graphql/ApolloClient';
import Root from './src/screens/Root';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
