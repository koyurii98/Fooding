import 'react-native-gesture-handler';
// import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import axios from 'axios';
// import socketIO from 'socket.io-client';

import ENV_FUNC from './environment';
// const { SERVER_URL } = ENV_FUNC();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Root from './Root';
import First from './screen/First';

export default function App() {
  const [ user, setUser ] = useState(null);
  const [ socket, setSocket ] = useState(null);

  // useEffect(() => {
  //   // storageCheck();
  //   const client_io = socketIO.connect(SERVER_URL);
  //   client_io.on("chat msg", msg => {
  //     console.log(msg);
  //   });
  //   setSocket(client_io);
  // }, [user]);

  // async function storageCheck() {
  //   try {

  //   } catch(err) {
      
  //   }
  // }

  const Header = () => {
    return <View style={{ margin: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
      <Text>Fooding</Text>
      <Text>search bar</Text>
    </View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !user ? 
          <Stack.Screen 
            name="Root" 
            component={Root} 
            options={{ 
              headerShown : true, 
              headerStyle: { height : 120 }, 
              headerTitle: props => <Header {...props} /> 
            }} 
          />
          :
          <Stack.Screen name="Root" component={First} options={{ headerShown : false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}