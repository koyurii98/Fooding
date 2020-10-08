import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import Header from '../../component/header/ChatListRoomHeader';

function ChatListRoom(props) {
    const { name } = props.route.params;
    const [ menu, setMenu ] = useState(false);

    return (
        <View style={chatListRoomStyle.container}>
            <Header navigation={props.navigation} name={name} setMenu={setMenu} />
            <ScrollView style={chatListRoomStyle.content}>
                <Text onPress={() => console.log("b")}>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
                <Text>a{"\n"}b{"\n"}b{"\n"}b{"\n"}aaaaaa{"\n"}ba{"\n"}aaaaa</Text>
            </ScrollView>
            {
                menu &&
                <View style={chatListRoomStyle.menu}>
                    <TouchableWithoutFeedback onPress={() => setMenu(false)}>
                        <View style={chatListRoomStyle.overlay}></View>
                    </TouchableWithoutFeedback>
                    <View style={chatListRoomStyle.view}>
                        <TouchableOpacity>
                            <View style={chatListRoomStyle.viewLine}>
                                <Image 
                                    style={chatListRoomStyle.viewImage}
                                    source={require("../../assets/Menu/block.png")} 
                                />
                                <Text style={chatListRoomStyle.viewText}>차단하기</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={chatListRoomStyle.viewLine}>
                                <Image 
                                    style={chatListRoomStyle.viewImage}
                                    source={require("../../assets/Menu/siren.png")} 
                                />
                                <Text style={chatListRoomStyle.viewText}>신고하기</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={chatListRoomStyle.viewLine}>
                                <Image 
                                    style={chatListRoomStyle.viewImage}
                                    source={require("../../assets/Menu/exit.png")} 
                                />
                                <Text style={chatListRoomStyle.viewText}>채팅방 나가기</Text>
                            </View>
                        </TouchableOpacity>
                        <Button onPress={() => setMenu(false)} color="rgba(200, 200, 200, 1)" title="취소"></Button>
                    </View>
                </View>
            }
        </View>
    );
}

const chatListRoomStyle = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "white",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 45
    },

    menu: {
        width: "100%",
        height: "100%",
        top: 0,
        position: "absolute"
    },
    overlay: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(78, 78, 78, 0.7)",
        top: 0,
        position: "absolute",
        zIndex: 48
    },
    view: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: 310,
        padding: 15,
        paddingTop: 13,
        backgroundColor: "white",
        bottom: 0,
        position: "absolute",
        zIndex: 49
    },
    viewLine: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 27
    },
    viewImage: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        marginRight: 30
    },
    viewText: {
        fontSize: 20,
        color: "#6e6e6e"
    }
});

export default ChatListRoom;