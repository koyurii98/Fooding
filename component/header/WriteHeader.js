import React, { useState } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';
import ENV_FUNC from '../../environment';
const { SERVER_URL } = ENV_FUNC();

function WriteHeader(props) {

  async function uploadHandle(){
    const {title,text,cate,price,uploadCate,userId,items,setItems,priceCheck}=props;

    console.log(userId);
    
    if(!title || !text || !cate  || !uploadCate || !userId ){
      Alert.alert("경고", "빈칸이 있습니다. 빈칸을 모두 채워주세요.", [
        { text: "확인", onPress: () => null, style: "cancel" }
      ]);
      return;
    }
    try{
      const result = await axios.post(`${SERVER_URL}/board/create`,{
        title,
        content:text,
        category:cate,
        price:priceCheck===true?"가격협의":price,
        state:props.uploadCate,
        userId,
        negotiation:priceCheck,
      });
      if(result.data && result.data.data){
        const arr = items;
        arr.unshift(result.data.data);
        setItems(arr);
        props.navigation.navigate("Tab",{screen:"Store"});
      }
    }
    catch(err){
      console.log("게시글 업로드 에러"+err);
    }
  }

  return (
    <View style={WriteHeaderStyle.Header}>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Image 
        style={{ marginLeft: 15 }}
        source={require('../../assets/retrun.png')}
      />
    </TouchableOpacity>
    <Text style={WriteHeaderStyle.edit}>글쓰기</Text>
    <TouchableOpacity onPress={uploadHandle}>
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