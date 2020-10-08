import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';


function ProfileHeader(props) {
  return (
  <View style={profileHeaderStyle.Header}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
      <Image source={require('../../assets/retrun.png')}/>
    </TouchableOpacity>
    <Text style={{fontSize:20,color:"#474747",fontWeight:"700"}}>프로필수정</Text>
    <TouchableOpacity onPress={()=>console.log("저장")}>
      <Text style={{fontSize:17,color:"#9a9a9a",fontWeight:"700"}}>저장</Text>
    </TouchableOpacity>
  </View>
  );
}
const profileHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
  }
})
export default ProfileHeader;