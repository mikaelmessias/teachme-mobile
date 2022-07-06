import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import Navigator from './navigator/Navigator';
import {ApolloProvider} from '@apollo/client';
import apolloClient from './services/apolloClient';
import {SignUpProvider} from './contexts/SignUpContext';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={DefaultTheme}>
        <SignUpProvider>
          <Navigator />
        </SignUpProvider>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
