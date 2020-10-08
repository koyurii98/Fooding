import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';

function HistoryHeader(props) {
  return (
    <View style={ HistoryHeaderStyle.Header}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
      <Image source={require('../../assets/retrun.png')}/>
    </TouchableOpacity>
    <Text style={{fontSize:20,color:"#474747",fontWeight:"700"}}>결제내역</Text>
    <Text></Text>
  </View>
  );
}
const HistoryHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
  }
})

export default HistoryHeader;