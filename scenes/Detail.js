import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import moment from 'moment';
import axios from 'axios';

import ENV_FUNC from '../environment';
const { SERVER_URL } = ENV_FUNC();

function Detail(props) {
    const { id, title, content, image, category, price, negotiation, state, user, createdAt, success, login, rooms, setRooms, socket } = props.route.params;

    // 거래 신청 누를 경우
    const clickDeal = ()=>{
        if(!login.id || !login.email) {
            Alert.alert("확인", "로그인 후 이용해주세요.", [
                { text: "로그인 하러 가기", onPress: () => props.navigation.navigate("Login"), style: "cancel" },
                { text: "취소", onPress: () => null, style: "cancel" }
              ]
            ); 
            return false;
        }

        Alert.alert("확인", "거래를 하시겠습니까?", [
            { text: "거래하기", onPress: chatRoomCreate, style: "cancel" },
            { text: "취소", onPress: () => null, style: "cancel" }
          ]
        );
    }

    // 거래 신청 처리 및 채팅방 생성
    async function chatRoomCreate() {
        if(user.id === login.id) return false;
        
        try {
            const result = await axios.post(`${SERVER_URL}/room/create`, {
                boardId : id,
                user1 : user.id,
                user2 : login.id
            });

            if(!result.data || !result.data.data) throw 500;

            if(!result.data.ovl) setRooms(rooms.concat(result.data.data));

            socket.emit("room create", {
                msg : result.data.data,
                target_id : user.id
            });

            props.navigation.navigate("ChatListRoom", {
                id : result.data.data.id,
                data : props.route.params,
                name : user.name,
                login,
                target_id : user.id,
                first: true
            });
        } catch(err) {
            Alert.alert("오류", "거래 신청에 실패하였습니다.", [
                    { text: "확인", onPress: () => null, style: "cancel" }
                ]
            );
        }
    }

    return (
        <View style={detailStyle.detailBox}>
            <ScrollView style={{height:"100%",paddingBottom:66}}>
                <View style={{height:340}}>
                    <Image style={detailStyle.productImg} source={require('../assets/example.png')}/>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Image style={{position:"relative",left:10,top:15}}source={require('../assets/retrunWhite.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:"100%",padding:17,borderBottomWidth:1,borderBottomColor:"#d2d2d2"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={detailStyle.productTitle}>{`[${category}] `}{title}</Text>
                        <Text style={detailStyle.productState}>{state}</Text> 
                    </View>
                    <Text style={detailStyle.uploadDate}>{moment(createdAt).format("YYYY년 MM월 DD일")}</Text>
                    <Text style={detailStyle.productInfo}>
                        {content}
                    </Text>
                </View>
                <View style={detailStyle.userProfile}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={{resizeMode:"contain",width:65,marginLeft:15}} source={require('../assets/profile.png')} />
                        <View style={{marginLeft:15}}>
                            <View style={detailStyle.userInfo}>
                                <Image source={require('../assets/puddingIcon.png')}/>
                                <Text style={detailStyle.userName}>{user.name}</Text>
                            </View>
                            <Text style={detailStyle.Recent}>최근 5건의 거래를 하였습니다.</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> alert("스토어")}>
                        <Image style={detailStyle.userStore} source={require('../assets/store.png')}/>
                        <Text style={{color:"#1d1d1d",fontSize:12,marginLeft:3}}>스토어방문</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={detailStyle.bottomBtns}>
                    <TouchableOpacity style={detailStyle.BuyMenu} onPress={()=> alert('메뉴클릭')}>
                        <Image source={require('../assets/menu-White.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={detailStyle.BuyBtn} 
                        onPress={login.id === user.id ? () => console.log("거래 완료 처리") : clickDeal}
                    >
                        {
                            login.id === user.id ?
                            <Text style={{color:"#ffffff",fontSize:20}}>{success === "1" ? "이미 완료된 거래입니다." : "거래 완료하기"}</Text>
                            :
                            <Text style={{color:"#ffffff",fontSize:20}}>{success === "1" ? "이미 완료된 거래입니다." : "거래 신청하기"}</Text>
                        }
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const detailStyle = StyleSheet.create({
    detailBox:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#ffffff",
        height:"100%",
    },
    productImg:{
        width:"100%",
        height:340,
        resizeMode:"cover",
        position:"absolute"
    },
    productTitle:{
        fontSize:22,
        color:"#4a4a4a",
        fontWeight:"700",
    },
    productState:{
        fontSize:16,
        color: "#ff6767"
    },
    uploadDate:{
        fontSize:12,
        color:"#777777",
        marginTop:8,
        marginBottom:8,
    },
    productInfo:{
        fontSize:16,
        color:"#1d1d1d",
        lineHeight:25,
        marginTop:10
    },
    userProfile:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:85,
    },
    userInfo:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:3,
    },
    userName:{
        fontSize:16,
        color:"#1d1d1d",
        margin:5,
        fontWeight:"700"
    },
    Recent:{
        fontSize:13,
        color:"#858585"
    },
    userStore:{
        resizeMode:"contain",
        width:60,
        height:60,
        marginRight:15,
    },
    bottomBtns:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        height:60,
    },
    BuyMenu:{
        width:"20%",
        backgroundColor:"gray",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    BuyBtn:{
        width:"80%",
        backgroundColor:"#ff6767",
        bottom:0,
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    }
    
})

export default Detail;