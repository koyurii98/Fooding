import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';

function Item(props) {
    const { id, name, image, content, user, distance, state, itemClick } = props;
    const obj = { id, name, content, user, distance, state };
        return <Card style={itemStyle.listCard}>
            <TouchableOpacity style={itemStyle.listBox} onPress={() => itemClick(obj)}>
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
                <View style={itemStyle.listBotText}>
                    <Text>{user}</Text>
                    <View style={itemStyle.listLine}></View>
                    <Text>{distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </Card>
}

const itemStyle = StyleSheet.create({
    listCard:{
        width:"98%",
    },
    // list
    listBox: {
        display: "flex", 
        flexDirection: "row", 
        padding: 15,
        margin: 5,
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
    listBotText: {
        display: "flex", 
        flexDirection: "row", 
        position: "absolute", 
        bottom: 0
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