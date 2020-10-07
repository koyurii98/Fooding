import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function List(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={() => props.navigation.navigate("Detail")}>Detail Scene Move</Text>
            <Text onPress={() => props.navigation.navigate("Login")}>Login Move</Text>
            <Text onPress={() => props.navigation.navigate("Write")}>Write Scene Move</Text>
        </View>
    );
}

export default List;