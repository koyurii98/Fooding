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
    paddingTop: 50,
    paddingBottom: 20
  },
  text: {
    fontSize:20,
    color:"#474747",
    fontWeight:"700"
  }
})

export default HistoryHeader;