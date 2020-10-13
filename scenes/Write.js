import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image, ScrollView} from 'react-native';
import { Container, Item, Picker,CheckBox } from 'native-base';

function Store(props) {
    return (
        <View style={writeStyle.form}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{flexDirection:"row"}}>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                    >
                        <Picker.Item label="판매" value="key0" />
                        <Picker.Item label="요청" value="key1" />
                    </Picker>
                    </Item>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                    >
                        <Picker.Item label="과일" value="key0" />
                        <Picker.Item label="채소" value="key1" />
                        <Picker.Item label="해산물" value="key2" />
                        <Picker.Item label="육류" value="key3" />
                        <Picker.Item label="밥/반찬" value="key4" />
                        <Picker.Item label="냉동식품" value="key5" />
                        <Picker.Item label="제과/제빵" value="key6" />
                        <Picker.Item label="디저트/간식" value="key7" />
                    </Picker>
                    </Item>
                </View>
                <TextInput style={writeStyle.TextInput} placeholder="제목을 입력해주세요" placeholderTextColor="#a5a5a5"/>
                <TextInput style={writeStyle.TextAreaInput}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="내용을 입력해주세요"
                    placeholderTextColor="#a5a5a5"/>
                <View style={writeStyle.priceInput} >
                    <TextInput placeholder="가격을 입력해주세요" placeholderTextColor="#a5a5a5" style={writeStyle.PriceInputBox}/>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    style={{margin:15}}
                >
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
            
                    </TouchableOpacity>
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
                
                    </TouchableOpacity>
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
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
        flex: 1,
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
        height:500,
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

export default Store;