import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';


function ProfileHeader(props) {
  return (
  <View style={profileHeaderStyle.Header}>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Image 
        style={{ marginLeft: 15 }}
        source={require('../../assets/retrun.png')}
      />
    </TouchableOpacity>
    <Text style={profileHeaderStyle.edit}>프로필수정</Text>
    <TouchableOpacity onPress={() => console.log("저장")}>
      <Text style={profileHeaderStyle.save}>저장</Text>
    </TouchableOpacity>
  </View>
  );
}
const profileHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 20
  },
  edit: {
    fontSize:20,
    color:"#474747",
    fontWeight:"700"
  },
  save: {
    fontSize:17,
    color:"#9a9a9a",
    fontWeight:"700",
    marginRight: 15
  }
})
export default ProfileHeader;