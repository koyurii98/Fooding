import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Detail({ route, navigation }) {
    return (
        <View style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
            <Text>{route.params.id}</Text>
            <Text>{route.params.name}</Text>
            <Text>{route.params.content}</Text>
            <Text>{route.params.user}</Text>
            <Text>{route.params.distance}</Text>
            <Text>{route.params.state}</Text>
        </View>
    );
}

export default Detail;