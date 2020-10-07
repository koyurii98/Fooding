import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import weIcon from '../../assets/we.png';
import profileNull from '../../assets/profile.png';

function Profile(props) {
    return (
        <View style={profileStyle.container}>
            <View style={profileStyle.profile}>
                <View style={{ }}>
                    <Image source={profileNull} style={profileStyle.profileImage}/>
                </View>
                <View style={{ width: "60%" }}>
                    <View style={profileStyle.profileInfo}>
                        <Text style={profileStyle.profileInfoName}>꼬부맘</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("ProfileEdit", {  })}>
                            <Text style={{ fontSize: 15 }}>프로필수정</Text>
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

            <View style={profileStyle.menu}>
                <Text style={profileStyle.titleText}>공지사항</Text>
            </View>

            <View style={profileStyle.menu}>
                <Text style={profileStyle.titleText}>이벤트</Text>
            </View>

            <View style={profileStyle.menu}>
                <Text style={profileStyle.titleText}>고객센터</Text>
            </View>

            <View>
                <Text>배너 라인</Text>
            </View>
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
        alignItems: "center",
        height: 115,
        borderBottomWidth: 0.2
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
        marginBottom: 6
    },
    profileInfoName: {
        fontSize: 20, 
        fontWeight: "bold"
    },
    profileInfoSub: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center"
    },
    profileInfoIcon: {
        width: 13, 
        height: 18, 
        marginRight: 4
    },

    // history
    history: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 71,
        borderBottomWidth: 0.2
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
        margin: 15
    },

    menu: {
        height: 114,
        borderBottomWidth: 0.2
    }
});

export default Profile;