import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Thumbnail } from 'native-base';
import moment from 'moment';
moment.locale("ko");

function ChatItem(props) {
    const { id, name, image, address, text, time, listClick, obj } = props;

    return <TouchableOpacity style={chatItemStyle.container} onPress={() => listClick(obj)}>
        <View style={chatItemStyle.box}>
            <Thumbnail source={image || require("../assets/profile.png")} />
            <View style={chatItemStyle.leftView}>
                <View style={chatItemStyle.leftLayout}>
                    <Text style={chatItemStyle.nameText}>{name}</Text>
                    <Text style={chatItemStyle.addressText}>{address}</Text>
                </View>
                <View>
                    <Text numberOfLines={1}>{text}</Text>
                </View>
                <View>
                    <Text 
                        numberOfLines={1}
                        style={{ fontSize: 11, color: "gray" }}
                    >
                        {moment(time).format("YYYY년 MM월 DD일 HH시 mm분")}
                    </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}

const chatItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        padding: 15,
        borderBottomWidth: 0.2,
        borderColor: "gray",
    },

    leftView: {
        width: "80%",
        marginLeft: 15,
        marginRight: 10,
    },
    leftLayout: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },

    nameText: {
        fontSize: 15,
        fontWeight: "700",
        marginRight: 10,
    },
    addressText: {
        fontSize: 12, 
        color: "gray",
    }
})

export default ChatItem;