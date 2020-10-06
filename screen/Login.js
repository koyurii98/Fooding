import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

function Login(props) {
  return<View style={loginStyles.loginBox}>
    <Image style={loginStyles.logo} source={require('../assets/Loading-Logo.png')}/>
    <Image style={loginStyles.illustIcon} source={require('../assets/Login/groceries.png')}/>
    <View style={loginStyles.loginButton}>
      <TouchableOpacity style={loginStyles.touch} onPress={() => console.log("구글")}>
        <Image style={loginStyles.btnImg} source={require('../assets/Login/google.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.touch}  onPress={() => console.log("페이스북")}>
        <Image style={loginStyles.btnImg} source={require('../assets/Login/FaceBook.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.touch}  onPress={() => console.log("카카오")}>
        <Image style={loginStyles.btnImg} source={require('../assets/Login/kko.png')}/>
      </TouchableOpacity>
    </View>
  </View>
}
const loginStyles=StyleSheet.create({
  loginBox:{
    flex:1,
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"white",
    width:"100%",
  },
  logo:{
    resizeMode:"contain",
    width:200,
  },
  touch:{
    width:"100%",
    height: "100%",
    margin:0,
    justifyContent: "center",
    alignItems: "center",
    
  },
  btnImg:{
    resizeMode:"contain",
    width:"80%",
  },
  illustIcon:{
    resizeMode:"contain",
    width:"30%",
  }

})

export default Login;