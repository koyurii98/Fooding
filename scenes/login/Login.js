import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import axios from 'axios';

import ENV_FUNC from '../../environment';
const { SERVER_URL } = ENV_FUNC();

console.disableYellowBox = true;

function Login(props) {
    const [ email, setEmail ] = useState("");

    async function userLogin() {
        if(!email) {
            Alert.alert("확인", "이메일을 입력해주세요.", [{
                text: "확인", onPress: () => null, style: "cancel"
            }]);
            return false;
        }

        try {
            const result = await axios.get(`${SERVER_URL}/users/login?email=${email}`);

            if(!result.data.data) {
                Alert.alert("실패", "로그인에 실패하였습니다. 다시 시도해주세요.",
                    [{ text: "확인", onPress: () => null, style: "cancel" }, ]
                );
                return false;
            }
            
            props.navigation.goBack();
            props.route.params.setUser(email);
        } catch(err) {  
            Alert.alert("실패", "로그인에 실패하였습니다. 다시 시도해주세요.",
                [{ text: "확인", onPress: () => null, style: "cancel" }, ]
            );
        }
    }

    return (
        <View style={loginStyle.container}>
            <Image
                source={require("../../assets/Loading-Logo.png")}
                style={{marginTop:30}}
            />
            <Image 
                style={loginStyle.img}
                source={require("../../assets/Login/product.png")}
            />
            <Text style={loginStyle.title}>푸딩에서 먹고 싶은 음식을 찾아보세요!</Text>
            <TouchableOpacity onPress={() => console.log("K")}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../../assets/Login/kko.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("F")}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../../assets/Login/FaceBook.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={userLogin}>
                <Image 
                    style={loginStyle.auth}
                    source={require("../../assets/Login/naver.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={loginStyle.back}>홈으로 돌아가기</Text>
            </TouchableOpacity>
            <TextInput value={email} onChange={(e) => setEmail(e.nativeEvent.text)} style={{ width: 180, height: 40, margin: 15, borderWidth: 1 }} />
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
        color: "#5e5e5e",
        textAlign: "center"
    }
});

export default Login;