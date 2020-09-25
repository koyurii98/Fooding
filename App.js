import 'react-native-gesture-handler';
// import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import ENV_FUNC from './environment';
// const { SERVER_URL } = ENV_FUNC();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Root from './Root';
import First from './screen/First';

export default function App() {
  const [ user, setUser ] = useState(null);

  // useEffect(() => {
  //   storageCheck();
  // }, [user]);

  // async function storageCheck() {
  //   try {

  //   } catch(err) {
      
  //   }
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !user ? 
          <Stack.Screen name="Root" component={Root} options={{ headerShown : false }} />
          :
          <Stack.Screen name="Root" component={First} options={{ headerShown : false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}