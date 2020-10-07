import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Login(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={() => props.navigation.goBack()}>Login View</Text>
        </View>
    );
}

export default Login;