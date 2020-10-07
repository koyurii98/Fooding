import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Store(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={() => props.navigation.navigate("List")}>List Scene Move</Text>
            <Text onPress={() => props.navigation.navigate("Write")}>Write Scene Move</Text>
        </View>
    );
}

export default Store;