import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import home from '../screens/Home';
import NoteDetail from '../screens/note-detail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={home}
      />
      <Stack.Screen
        options={{title: 'Not Detay'}}
        name="NoteDetail"
        component={NoteDetail}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
