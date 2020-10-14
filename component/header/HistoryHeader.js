import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';

function HistoryHeader(props) {
  return (
    <View style={ HistoryHeaderStyle.Header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image 
          style={{ marginLeft: 15 }}
          source={require('../../assets/retrun.png')}
        />
      </TouchableOpacity>
      <Text style={HistoryHeaderStyle.text}>결제내역</Text>
      <Text style={{ marginRight: 15 }}>A</Text>
    </View>
  );
}
const HistoryHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
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
  text: {
    fontSize:20,
    color:"#474747",
    fontWeight:"700"
  }
})

export default HistoryHeader;