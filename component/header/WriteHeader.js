import React from 'react';
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
    <TouchableOpacity onPress={() => console.log("올리기")}>
      <Text style={WriteHeaderStyle.save}>올리기</Text>
    </TouchableOpacity>
  </View>
  );
}

const WriteHeaderStyle = StyleSheet.create({
  Header:{
    flex: 1,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: "white",
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