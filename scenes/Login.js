import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function Login(props) {
    return (
        <View style={loginStyle.container}>
            <Image
                source={require("../assets/Loading-Logo.png")}
            />
            <Image 
                style={loginStyle.img}
                source={require("../assets/Login/groceries.png")}
            />
            <Text style={loginStyle.title}>푸딩에서 먹고 싶은 음식을 찾아보세요!</Text>
            <TouchableOpacity onPress={() => console.log("K")}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../assets/Login/kko.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("F")}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../assets/Login/FaceBook.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("N")}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../assets/Login/naver.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={loginStyle.back}>홈으로 돌아가기</Text>
            </TouchableOpacity>
        </View>
    );
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    img: {
        width: "40%",
        height: "20%",
        marginTop: 56,
        marginBottom: 36
    },
    
    title: {
        marginBottom: 27,
        textAlign: "center",
        color: "#777777"
    },

    auth: {
        width: 295,
        height: 59,
        marginBottom: 7
    },

    back: {
        marginTop: 20,
        fontSize: 12,
        color: "#bbbbbb",
        textAlign: "center"
    }
});

export default Login;