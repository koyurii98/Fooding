import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Profile({ route, navigation }) {
    return (
        <View style={profileStyle.container}>
            <View style={profileStyle.profile}>
                <View style={{ width: "10%" }}>
                    <View style={profileStyle.profileImage}></View>
                </View>
                <View style={{ width: "60%" }}>
                    <View style={profileStyle.profileInfo}>
                        <Text style={profileStyle.profileInfoName}>꼬부맘</Text>
                        <Text style={{ fontSize: 15 }}>프로필수정</Text>
                    </View>
                    <View style={profileStyle.profileInfoSub}>
                        <View style={profileStyle.profileInfoIcon}></View>
                        <Text>서울 특별시 00구</Text>
                    </View>
                </View>
            </View>

            <View style={profileStyle.history}>
                <View style={profileStyle.historyLayout}>
                    <Text style={profileStyle.historyNum}>{0}</Text>
                    <Text>판매</Text>
                </View>
                <View style={profileStyle.historyLayout}>
                    <Text style={profileStyle.historyNum}>{15}</Text>
                    <Text>요청</Text>
                </View>
                <View style={profileStyle.historyLayout}>
                    <Text style={profileStyle.historyNum}>{4}</Text>
                    <Text>구매</Text>
                </View>
            </View>

            <View style={profileStyle.buy}>
                <Text style={profileStyle.titleText}>내가 구매한 상품</Text>
            </View>

            <View style={profileStyle.review}>
                <Text style={profileStyle.titleText}>내가 작성한 REVIEW</Text>
            </View>
        </View>
    );
}

const profileStyle = StyleSheet.create({
    // container
    container: {
        flex: 1, 
        backgroundColor: "white"
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
        backgroundColor: "gray", 
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
        backgroundColor: "red",
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
        color: "#ff6767"
    },

    // title 
    titleText: {
        fontSize: 20, 
        fontWeight: "bold", 
        margin: 15
    },

    // buy
    buy: {
        height: 121,
        borderBottomWidth: 0.2,
    },

    // review
    review: {
        height: 114,
        borderBottomWidth: 0.2
    }
});

export default Profile;