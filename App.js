import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyStack from './navigation';
const App = props => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
