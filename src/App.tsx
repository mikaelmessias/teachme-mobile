import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import Navigator from './navigator/Navigator';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
