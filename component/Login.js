import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Login(props) {
    return (
        <View style={loginStyle.container}>
            <Text>Test</Text>
        </View>
    );
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Login;