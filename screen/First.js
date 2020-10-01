import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import Logo from '../assets/Loading-Logo.png';

function First({ route, navigation }) {
  const [ isLoading,setIsLoading  ] = useState(true);
  return (
    isLoading &&
    <View style={styles.LodingBox}>
      <Image style={styles.LoadingLogo} source={Logo}/>
      <Text>v 0.0.1</Text>
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