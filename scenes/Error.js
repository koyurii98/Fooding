import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Error(props) {
    return (
        <View style={errorStyle.container}>
            <Text>이미 로그인된 사용자입니다.</Text>
            <TouchableOpacity onPress={() => props.navigation.popToTop()}>
                <Text style={errorStyle.back}>돌아가기</Text>
            </TouchableOpacity>
        </View>
    );
}

const errorStyle = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems:"center"
    },
    back: {
        color: "gray",
        marginTop: 100
    }
});

export default Error;