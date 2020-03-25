import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './First';
import Second from './Second';
import ListFirebase from './List_firebase';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAigoveTAHYWt6OCV5fhE4ouGNnVsitrpc",
  authDomain: "fuel-calculate.firebaseapp.com",
  databaseURL: "https://fuel-calculate.firebaseio.com",
  projectId: "fuel-calculate",
  storageBucket: "fuel-calculate.appspot.com",
  messagingSenderId: "604250098600",
  appId: "1:604250098600:web:0c65e1103e13c579e76b9d",
  measurementId: "G-Z92XDS846X"
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List_firebase"
          component={ListFirebase}
          options={{ title: 'List' }}
        />
        <Stack.Screen
          name="First"
          component={First}
          options={{ title: 'Fuel calculator' }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ title: 'Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}