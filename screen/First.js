import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import Logo from '../assets/Loading-Logo.png';
import axios from 'axios';

import ENV_FUNC from '../environment';
const { SERVER_URL } = ENV_FUNC();

function First({ route, navigation }) {
  const [ isLoading, setIsLoading  ] = useState(true);

  async function naverLogin() {
    try {
        const result = await axios.get(`${SERVER_URL}/users/naver/login`);

        if(result.data.url) {
          navigation.navigate("Login", { 
            view : result.data.url
          })
        }
    } catch(err) {
        alert(err);
    }
  }

  return (
    isLoading &&
    <View style={styles.LodingBox}>
      <Image style={styles.LoadingLogo} source={Logo}/>
      <Text>v 0.0.1</Text>
      <TouchableHighlight>
        <Text onPress={naverLogin}>oAuth Login</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  LodingBox:{
      flex:1,
      flexDirection:"column",
      justifyContent:"space-around",
      alignItems:"center",
  },
  LoadingLogo:{
      resizeMode:"contain",
  },
})


export default First;