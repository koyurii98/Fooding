import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import axios from 'axios';

import ENV_FUNC from '../environment';
const { SERVER_URL } = ENV_FUNC();

function Detail(props) {
    const { id, userId, title, content, image, state, name, distance, user } = props.route.params;

    function tradeRequest() {
        if(!user.email) {
            Alert.alert("확인", "로그인 후 이용해주세요.", [
                { text: "로그인 하러가기", onPress: () => props.navigation.navigate("Login") },
                { text: "취소", onPress: () => null, style: "cancel" },
            ]); 
        } else {
            Alert.alert("확인", "거래를 신청 하시겠습니까?", [
                { text: "예", onPress: async () => {
                    try {
                        props.navigation.navigate("ChatListRoom", {
                            // data : {
                            //     id, title, content, image, state, distance
                            // },
                        });
                    } catch(err) {
                        Alert.alert("오류", "채팅방이 정상적으로 생성되지 않았습니다. 다시 시도해 주세요.", [
                            { text: "확인", onPress: () => null, style: "cancel" }
                        ]);
                    }
                }},
                { text: "취소", onPress: () => null, style: "cancel" },
            ]);
        }
    }

    function tradeSuccess() {
        Alert.alert("확인", "거래를 완료 시키겠습니까?", [
            { text: "예", onPress: () => null },
            { text: "취소", onPress: () => null, style: "cancel" },
        ]);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={userId === user.id ? tradeSuccess : tradeRequest}>{userId === user.id ? "거래 완료하기" : "거래 신청하기"}</Text>
        </View>
    );
}

export default Detail;