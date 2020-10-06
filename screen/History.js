import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './Login';

function History({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Login/>
        </View>
    );
}

export default History;