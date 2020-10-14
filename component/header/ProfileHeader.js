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
    <Text></Text>
  </View>
  );
}
const profileHeaderStyle = StyleSheet.create({
  Header:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: "white",
    paddingTop: 45,
  },
  edit: {
    fontSize:21,
    color:"#474747",
    fontWeight:"700",
    textAlign:"center",
    marginRight: 35
  }
})
export default ProfileHeader;