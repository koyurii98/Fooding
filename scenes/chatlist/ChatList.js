import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ChatList(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:"center" }}>
            <Text onPress={() => props.navigation.navigate("ChatListRoom")}>ChatList Room Move</Text>
            <Text onPress={() => props.navigation.navigate("Login")}>Login Move</Text>
        </View>
    );
}

export default ChatList;