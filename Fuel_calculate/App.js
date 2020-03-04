import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import First from './First';
import Second from './Second';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{title: 'Fuel calculator'}}
        />
        <Stack.Screen
        name="Second"
        component={Second}
        options={{title: 'Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}