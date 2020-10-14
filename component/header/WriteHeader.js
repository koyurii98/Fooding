import React, { useState } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';

function WriteHeader(props) {
  

  return (
    <View style={WriteHeaderStyle.Header}>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Image 
        style={{ marginLeft: 15 }}
        source={require('../../assets/retrun.png')}
      />
    </TouchableOpacity>
    <Text style={WriteHeaderStyle.edit}>글쓰기</Text>
    <TouchableOpacity onPress={()=>alert("")}>
      <Text style={WriteHeaderStyle.save}>올리기</Text>
    </TouchableOpacity>
  </View>
  );
}

const WriteHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: "white",
    paddingTop:35,
    paddingBottom:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  edit: {
    fontSize:21,
    color:"#474747",
    fontWeight:"700",
    textAlign:"center",
  },
  save: {
    fontSize:18,
    color:"#656565",
    fontWeight:"700",
    marginRight: 15
  }
})
export default WriteHeader;