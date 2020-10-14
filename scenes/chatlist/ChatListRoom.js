import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';

import ENV_FUNC from '../../environment';
const { SERVER_URL } = ENV_FUNC();

import Header from '../../component/header/ChatListRoomHeader';

function ChatListRoom(props) {
    const { socket, id, name, data, first, login, target_id } = props.route.params;

    const [ menu, setMenu ] = useState(false);
    const [ text, setText ] = useState("");

    const [ msg, setMsg ] = useState([]);
    const [ load, setLoad ] = useState(false);

    const scrollRef = useRef(null);
    
    useEffect(() => {
        if(first) {
            console.log("first");
        }
        msgInit();

        socket.on("msg receive", (data) => {
            setLoad(load ? false : true);
        });

        return () => {
            setLoad(false);
            socket.off("msg receive");
        }
    }, [load]);

    async function msgInit() {
        try {
            scrollRef.current.scrollToEnd({ animated: true });

            const result = await axios.get(`${SERVER_URL}/message/room/all?roomId=${id}`);

            await setMsg(result.data.data);
        } catch(err) {
            Alert.alert("오류", "메시지를 불러올 수 없습니다.", [
                { text : "확인", onPress: () => null, style: "cancel" }
            ]); 
        }
    }

    async function msgPost() {
        if(!text || /^\s*$/.test(text)) {
            return false;
        }

        if(!377) {
            return false;
        }

        try {
            const result = await axios.post(`${SERVER_URL}/message/create`, {
                content : text,
                send_id : login.id,
                roomId : id
            });

            setText("");
            setMsg(msg.concat(result.data.data));

            socket.emit("msg send", {
                msg : result.data.data,
                target_id
            });

            scrollRef.current.scrollToEnd({ animated: true });
        } catch(err) {
            Alert.alert("오류", "메시지 전송에 실패했습니다.", [
                { text : "확인", onPress: () => null, style: "cancel" }
            ]);
        }
    }

    return (
        <View style={chatListRoomStyle.container}>
            <Header navigation={props.navigation} name={name} setMenu={setMenu} />
            <ScrollView 
                style={chatListRoomStyle.content}
                ref={scrollRef}
                onContentSizeChange={() => {
                    scrollRef.current.scrollToEnd({ animated: true });
                }}
            >
                {
                    msg.map(value => {
                        const myMsg = value.send_id === login.id ? true : false;
                        return <View 
                            key={value.id}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            { myMsg && <Text></Text> }
                            <Text style={{
                                maxWidth: "60%",
                                backgroundColor: myMsg ? "white" : "rgba(255, 238, 238, 0.41)",
                                borderWidth: 1,
                                borderRadius: 7,
                                borderColor: myMsg ? "#d8d8d8" : "rgba(255, 78, 78, 0.3)",
                                marginTop: 15,
                                marginBottom: 15,
                                marginLeft: 15,
                                marginRight: 15,
                                padding: 13,
                                color: "#1d1d1d"
                            }}>{value.content}</Text>
                        </View>
                    })
                }
            </ScrollView>
            <View style={chatListRoomStyle.inputView}>
                <TextInput value={text} onChange={(e) => setText(e.nativeEvent.text)} style={chatListRoomStyle.inputBox} />
                <TouchableOpacity style={chatListRoomStyle.inputBtn} onPress={msgPost}>
                    <Text style={{ color: "white" }}>전송</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: "rgba(245, 245, 245, 1)"
    },

    content: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 70,
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
    },

    inputView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        width: "100%",
        padding: 8,
        backgroundColor: "rgba(235, 235, 235, 1)",
        position: "absolute",
        bottom: 0,
        zIndex: 5
    },
    inputBox: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        marginRight: 9,
        padding: 10,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: "gray",
    },
    inputBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "18%",
        height: 50,
        backgroundColor: "#ff6767",
        borderRadius: 7,
    }
});

export default ChatListRoom;