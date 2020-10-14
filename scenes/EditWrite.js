import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image, ScrollView} from 'react-native';
import {Item,Picker,CheckBox} from 'native-base';
import EditWriteHeader from '../component/header/EditWriteHeader';

function EditWrite(props) {
    const { title,items,setItems,login,content,category,price,state}=props.route.params;
    const [editText , setEditText]=useState(content);
    const [editTitle , setEditTitle]=useState(title);
    const [editCate , setEditCate]=useState(category);
    const [editUploadCate , setEditUploadCate]=useState(state);
    const [editPrice , setEditPrice]=useState(price);
    const [editImage, setEditImage] = useState(null);
    const [editPriceCheck, setEditPriceCheck] = useState('');

    console.log(props.route.params);
    useLayoutEffect(() => {
        props.navigation.setOptions({
            header: props => 
            <EditWriteHeader 
                {...props} 
                editText={editText} 
                editTitle={editTitle}
                editCate={editCate}
                editUploadCate={editUploadCate}
                editPrice={editPrice}
                userId={login.id}
                items={items}
                setItems={setItems}
                editPriceCheck={editPriceCheck}
            /> 
        });
        return () => {
            props.navigation.setOptions(null);
        }
    }, [props.navigation, editText,editTitle,editCate,editUploadCate,editPrice,login,editPriceCheck]);
    
    

    return (
        <View style={writeStyle.form}>
            <ScrollView style={{width:"100%" }}>
                <View style={{flexDirection:"row",width:"100%"}}>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                        onValueChange={(editUploadCate)=>setEditUploadCate(editUploadCate)}
                        selectedValue={editUploadCate}
                    >
                        <Picker.Item label="판매/요청선택" value="판매/요청선택" color="#7e7e7e"/>
                        <Picker.Item label="판매" value="판매" />
                        <Picker.Item label="요청" value="요청" />
                    </Picker>
                    </Item>
                    <Item picker style={{width:"49%"}}>
                    <Picker
                        mode="dropdown"
                        onValueChange={(editCate)=>setEditCate(editCate)}
                        selectedValue={editCate}
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
                 onChangeText={(editTitle)=>setEditTitle(editTitle)}
                 value={editTitle}
                 />
                <TextInput style={writeStyle.TextAreaInput}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="내용을 입력해주세요"
                    placeholderTextColor="#a5a5a5"
                    onChangeText={(editText)=>setEditText(editText)}
                    value={editText}/>
                <View style={writeStyle.priceInput} >
                    <View style={{width:200,flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:16}}>가격</Text>
                        <TextInput 
                        placeholder="예)10000" 
                        placeholderTextColor="#a5a5a5" 
                        style={writeStyle.PriceInputBox}
                        onChangeText={(editPrice)=>setEditPrice(editPrice)}
                        value={editPriceCheck===true?"가격협의":editPrice||"0"}
                        keyboardType={"number-pad"}/>
                        <Text style={{fontSize:16,margin:10,}}>{editPriceCheck===true?"":"원"}</Text>
                    </View>
                    <TouchableOpacity style={writeStyle.priceCheckbox} onPress={()=>editPriceCheck?setEditPriceCheck(false):setEditPriceCheck(true)}>
                        <CheckBox 
                        checked={editPriceCheck}
                        style={writeStyle.checkbox}
                        color="#ff6767"/>
                        <Text>가격협의</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    style={{margin:15}}
                >
                    <TouchableOpacity style={writeStyle.ImageAddBtn}>
                    {/* {image && <Image source={{ uri: image }} style={writeStyle.uploadImg}/>} */}
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
        width:"100%",
        fontSize:16,
        color:"#474747",
        borderBottomWidth:1,
        borderColor:"#dcdcdc",
        padding:10,
        textAlign:"left",
        textAlignVertical:"top",
        minHeight:280,
    },
    priceInput:{
        height:45,
        width:"100%",
        borderBottomWidth:1,
        borderColor:"#dcdcdc",
        padding:10,
        fontSize:16,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
    },
    PriceInputBox:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontSize:16,
        color:"#ff6767",
        textAlign:"right",
        width:100,
    },
    priceCheckbox:{
        width:120,
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        flexDirection:"row",
        borderRadius:40,
    },
    checkbox:{
        borderRadius:10,
        marginRight:15,
     
    },
    ImageAdd:{
        resizeMode:"contain",
        width:60,
        height:60,
    },
    uploadImg:{
        resizeMode:"cover",
        width:"100%",
        height:"100%",
    }, 
    ImageAddBtn:{
        width:100,
        height:100,
        backgroundColor:"#a5a5a5",
        margin:5,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default EditWrite;