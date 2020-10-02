import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Item({ id, name, image, content, user, distance, state, itemClick }) {
    const obj = { id, name, content, user, distance, state };
        return <TouchableOpacity style={itemStyle.listBox} onPress={() => itemClick(obj)}>
            <Image 
                style={itemStyle.listImage}
                source={image || require("../assets/example.png")}
            ></Image>
            <View style={itemStyle.listContent}>
                <View style={itemStyle.listLayout}>
                    <Text style={{ fontSize: 20, marginBottom: 5 }}>{name}</Text>
                    <Text style={{ color: "red" }}>{state}</Text>
                </View>
                <View>
                    <Text style={{ color: "gray" }} numberOfLines={1}>{content}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", position: "absolute", bottom: 0 }}>
                    <Text>{user}</Text>
                    <View style={itemStyle.listLine}></View>
                    <Text>{distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
}

const itemStyle = StyleSheet.create({
    // list
    listBox: {
        display: "flex", 
        flexDirection: "row", 
        borderBottomWidth: 0.2,
        borderColor: "gray", 
        padding: 15,
        margin: 10
    },
    listImage: {
        height: 100,
        width: 100, 
        backgroundColor: "blue"
    },
    listContent: {
        display: "flex", 
        flexDirection: "column", 
        width: "70%",
        marginLeft: 5,
        position: "relative"
    },
    listLayout: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    listLine: {
        height: 20, 
        borderWidth: 1, 
        borderStyle: "solid",
        marginLeft: 8,
        marginRight: 8
    }
});

export default Item;