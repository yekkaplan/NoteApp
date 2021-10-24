import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MyStack from './navigation';
import SQLite, {SQLiteDatabase, ResultSet} from 'react-native-sqlite-storage';

const App = props => {
  useEffect(() => {});
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
