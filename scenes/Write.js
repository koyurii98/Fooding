import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image, ScrollView} from 'react-native';
import {Item,Picker} from 'native-base';


function Write(props) {
    const [text , setText]=useState('');
    const [title , setTitle]=useState('');
    const [cate , setCate]=useState('');
    const [uploadCate , setUploadCate]=useState('');
    const [price , setPrice]=useState('');
    const [photo , setPhoto]=useState(null);

    console.log(text,price,title,cate,uploadCate,price);

    return (
        <View style={writeStyle.form}>
            <ScrollView>
                <View style={{flexDirection:"row"}}>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                        onValueChange={(uploadCate)=>setUploadCate(uploadCate)}
                        selectedValue={uploadCate}
                    >
                        <Picker.Item label="판매/요청선택" value="판매/요청선택" color="#7e7e7e"/>
                        <Picker.Item label="판매" value="판매" />
                        <Picker.Item label="요청" value="요청" />
                    </Picker>
                    </Item>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                        onValueChange={(cate)=>setCate(cate)}
                        selectedValue={cate}
                    >
                        <Picker.Item label="카테고리" value="카테고리" color="#7e7e7e"/>
                        <Picker.Item label="과일" value="과일" />
                        <Picker.Item label="채소" value="채소" />
                        <Picker.Item label="해산물" value="해산물" />
                        <Picker.Item label="육류" value="육류" />
                        <Picker.Item label="밥/반찬" value="밥/반찬" />
                        <Picker.Item label="냉동식품" value="냉동식품" />
                        <Picker.Item label="제과/제빵" value="제과/제빵" />
                        <Picker.Item label="디저트/간식" value="디저트/간식" />
                    </Picker>
                    </Item>
                </View>
                <TextInput style={writeStyle.TextInput}
                 placeholder="제목을 입력해주세요" 
                 placeholderTextColor="#a5a5a5"
                 onChangeText={(title)=>setTitle(title)}
                 value={title}
                 />
                <TextInput style={writeStyle.TextAreaInput}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="내용을 입력해주세요"
                    placeholderTextColor="#a5a5a5"
                    onChangeText={(text)=>setText(text)}
                    value={text}/>
                <View style={writeStyle.priceInput} >
                    <TextInput 
                    placeholder="가격을 입력해주세요" 
                    placeholderTextColor="#a5a5a5" 
                    style={writeStyle.PriceInputBox}
                    onChangeText={(price)=>setPrice(price)}
                    value={price}
                    keyboardType={"number-pad"}/>
                </View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                style={{margin:15}}>
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
                       
                    </TouchableOpacity>
                    <TouchableOpacity style={writeStyle.ImageAddBtn} >
                        <Image source={require('../assets/camera-white.png')} style={writeStyle.ImageAdd}/>
                        <Text style={{color:"#ffffff",fontSize:11}}>이미지 업로드</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
        </View>
    );
}
const writeStyle = StyleSheet.create({
    form:{
        flexDirection:"column",
        backgroundColor:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        paddingTop:10
    },
    TextInput:{
        height:45,
        width:"100%",
        fontSize:18,
        color:"#474747",
        borderBottomWidth:1,
        borderColor:"#dcdcdc",
        padding:10,
        textAlign:"left",
        justifyContent:"flex-start",
    },
    TextAreaInput:{
        height:400,
        width:"100%",
        fontSize:16,
        color:"#474747",
        borderBottomWidth:1,
        borderColor:"#dcdcdc",
        padding:10,
        textAlign:"left",
        textAlignVertical:"top",
    },
    priceInput:{
        height:45,
        width:"100%",
        borderBottomWidth:1,
        borderColor:"#dcdcdc",
        padding:10,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    PriceInputBox:{
        fontSize:16,
        color:"#474747",
        textAlign:"left",
    },
    ImageAdd:{
        resizeMode:"contain",
        width:50,
        height:50,
    },
    ImageAddBtn:{
        width:75,
        height:75,
        backgroundColor:"#a5a5a5",
        margin:5,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default Write;