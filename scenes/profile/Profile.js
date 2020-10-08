import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';


import weIcon from '../../assets/we.png';
import profileNull from '../../assets/profile.png';
import profileBanner from '../../assets/profile_banner.png';
import RightArrow from '../../assets/right_arrow.png';
import settingBtn from '../../assets/setting_btn.png';
import profileBannerBtn from '../../assets/profile_banner_btn.png';

function Profile(props) {
    return (
        <View style={profileStyle.container}>
            <View style={profileStyle.profile}>
                <View style={{ }}>
                    <Image source={profileNull} style={profileStyle.profileImage}/>
                </View>
                <View style={{ width: "65%",margin:0,}}>
                    <View style={profileStyle.profileInfo}>
                        <Text style={profileStyle.profileInfoName}>꼬부맘</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("ProfileEdit", {  })}>
                            <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                                <Text style={{ fontSize: 14 }}>프로필수정</Text>
                                <Image source={settingBtn} style={{resizeMode:"contain",width:20,margin:5}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={profileStyle.profileInfoSub}>
                        <Image style={profileStyle.profileInfoIcon} source={weIcon}/>
                        <Text>서울 특별시 00구</Text>
                    </View>
                </View>
            </View>

            <View style={profileStyle.history}>
                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileHistory", {  })}>
                    <View style={profileStyle.historyLayout}>
                        <Text style={profileStyle.historyNum}>{0}</Text>
                        <Text>판매</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileHistory", {  })}>
                    <View style={profileStyle.historyLayout}>
                        <Text style={profileStyle.historyNum}>{15}</Text>
                        <Text>요청</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileHistory", {  })}>
                    <View style={profileStyle.historyLayout}>
                        <Text style={profileStyle.historyNum}>{4}</Text>
                        <Text>구매</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={()=>console.log("공지사항")}>
                    <View style={profileStyle.menu}>
                        <Text style={profileStyle.titleText}>공지사항</Text>
                        <Image source={RightArrow} style={profileStyle.arrowIcon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("이벤트")}>
                    <View style={profileStyle.menu}>
                        <Text style={profileStyle.titleText}>이벤트</Text>
                        <Image source={RightArrow} style={profileStyle.arrowIcon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("고객센터")}>
                    <View style={profileStyle.menu}>
                        <Text style={profileStyle.titleText}>고객센터</Text>
                        <Image source={RightArrow} style={profileStyle.arrowIcon}/>
                    </View>
                </TouchableOpacity>
                <View style={profileStyle.profileBanner}>
                    <Image source={profileBanner} style={{position:"absolute",resizeMode:"cover",width:"100%",}}/>
                    <TouchableOpacity onPress={()=>console.log("친구초대")}>
                        <View style={profileStyle.bannerBtn} >
                            <Text style={{color:"#ff7575",fontSize:16,fontWeight:"bold"}}>친구초대</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const profileStyle = StyleSheet.create({
    // container
    container: {
        flex: 1, 
        backgroundColor: "white",
        color:"#707070",
    },

    // profile
    profile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "20%",
        width:"100%",
        alignItems:"center",
        borderBottomWidth: 0.7,
        borderColor:"#d2d2d2",
    },
    profileImage: {
        width: 85, 
        height: 85, 
        borderRadius: 50
    },
    profileInfo: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 6,
        height:"40%",
    },
    profileInfoName: {
        fontSize: 20, 
        fontWeight: "bold"
    },
    profileInfoSub: {
        flexDirection: "row", 
        display:"flex",
        alignItems:"center",
        marginTop:-10,
    },
    profileInfoIcon: {
        width: 13, 
        marginRight: 4
    },

    // history
    history: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 65,
        borderBottomWidth: 0.7,
        borderColor:"#d2d2d2",
    },
    historyLayout: {
        display: "flex", 
        alignItems: "center"
    },
    historyNum: {
        fontSize: 20, 
        color: "#ff6767",
        fontWeight:"700",
    },

    // title 
    titleText: {
        fontSize: 20, 
        fontWeight: "bold", 
        margin: 15,
        color:"#636363",
    },

    menu: {
        height: 80,
        borderBottomWidth: 0.7,
        borderColor:"#d2d2d2",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    arrowIcon:{
        marginRight:15,
    },
    settingIcon:{
        resizeMode:"contain",
        width:20,
        height:20,
    },
    profileBanner:{
        justifyContent:"center",
        width:" 100%",
        display: "flex",
        height: 220,
    },
    bannerBtn:{
        width: 174,
        height: 43,
        backgroundColor:"#ffffff",
        borderRadius:20,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:80,
        marginLeft:10,
    }
});

export default Profile;