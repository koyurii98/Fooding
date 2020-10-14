import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';

function Item(props) {
    const { id, title, image, content, user, state, itemClick, data, price,cate } = props;
        return <Card style={itemStyle.listCard}>
            <TouchableOpacity style={itemStyle.listBox} onPress={() => itemClick(data)}>
            <Image 
                style={itemStyle.listImage}
                source={image || require("../assets/example.png")}
            ></Image>
            <View style={itemStyle.listContent}>
                <View style={itemStyle.listLayout}>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>[{cate}]{title}</Text>
                    <Text style={{ color: "red" }}>{state}</Text>
                </View>
                <View>
                    <Text style={{ color: "gray" }} numberOfLines={1}>{content.length>=20?content.slice(0,20)+"...":content}</Text>
                </View>
                <View style={itemStyle.listBotText}>
                    <Text>{user}</Text>
                    <Text style={{fontSize:15}}>{price==="가격협의"?price:price+"원"}</Text>
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
        alignItems:"center",
        justifyContent:"space-between",
        position: "absolute", 
        bottom: 0,
        width:"100%",
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