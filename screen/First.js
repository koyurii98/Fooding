import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function First({ route, navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>First Screen</Text>
        </View>
    );
}

export default First;