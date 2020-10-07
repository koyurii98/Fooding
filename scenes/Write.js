import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Store(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={() => props.navigation.goBack()}>Write Scene</Text>
        </View>
    );
}

export default Store;