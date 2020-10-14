import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function ChatListRoomHeader(props) {
    const { name, setMenu } = props;

    return (
        <View style={headerStyle.headerBox}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image 
                    style={headerStyle.backImage}
                    source={require("../../assets/retrun.png")}
                />
            </TouchableOpacity>
            <Text style={headerStyle.headerTitleText}>{name || "채팅방"}</Text>
            <TouchableOpacity onPress={() => setMenu(true)}>
                <Image 
                    style={headerStyle.menuImage}
                    source={require("../../assets/chatmenuActive.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    headerBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 50,
        paddingTop:35,
        paddingBottom:15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    headerTitleText: {
      fontSize: 21,
      fontWeight: "600"
    },
    backImage: {
        marginLeft: 20
    },
    menuImage: {
        marginRight: 20
    }
});

export default ChatListRoomHeader;