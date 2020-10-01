import 'react-native-gesture-handler';
// import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image,TextInput } from 'react-native';
// import axios from 'axios';
// import socketIO from 'socket.io-client';

import Logo from './assets/Header-Logo.png';
import SearchIcon from './assets/search.png';

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
  const searchText='지금 먹고싶은 음식은 무엇인가요?';
  const Header = () => {
    return <View style={styles.HeaderBox}>
      <Image style={styles.HeaderLogo} source={Logo} />
      <View style={styles.searchBox}>
        <TextInput style={styles.searchInput} placeholder={searchText}/>
        <Image style={styles.searchIcon} source={SearchIcon}/>
     </View>
    </View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !user ? 
          <>
            <Stack.Screen 
              name="Root" 
              component={Root} 
              options={{ 
                headerShown : true, 
                headerStyle: { height : 90 }, 
                headerTitle: props => <Header {...props} /> 
              }} 
            />
          </>
          :
          <Stack.Screen name="First" component={First} options={{ headerShown : false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=  StyleSheet.create({
  HeaderBox:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
  },
  HeaderLogo:{
    resizeMode:"contain",
    width:100,
  },
  searchInput:{
    fontSize:14,
  },
  searchBox:{
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    borderWidth:1,
    borderColor:'#757575',
    paddingLeft:8,
    paddingRight:8,
    height:37,
    borderRadius:20,
    marginLeft:15,
    fontSize:14,
  },
  searchIcon:{
    resizeMode:"contain",
    width:20,
    height:20,
    margin:3,
  }
})