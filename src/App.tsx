import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import Navigator from './navigator/Navigator';
import {ApolloProvider} from '@apollo/client';
import apolloClient from './services/apolloClient';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={DefaultTheme}>
        <Navigator />
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
