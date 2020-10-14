import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import moment from 'moment';
moment.locale("ko");
import List from '../../component/ChatItem';

function ChatList(props) {
    const { rooms, setRooms, login } = props.route.params;

    function listClick(id, data, name, target_id) {
        props.navigation.navigate("ChatListRoom", {
            id,
            data,
            name,
            setRooms,
            login,
            target_id,
            first : false
        });
    }

    return (
        <ScrollView style={chatListStyle.container}>
            {
                rooms.map(value => {
                    let name = "";
                    let image = "";
                    let address = "";
                    let text = "";
                    let time = "";
                    let state = "";
                    let target_id = null;
                    
                    value.userId.forEach(data => {
                        if(data.id !== login.id) {
                            name = data.name;
                            image = data.image;
                            address = data.address;
                            time = data.createdAt;
                            state = "판매자";
                            target_id = data.id;
                        } else {
                            state = value.board.state === "판매" ? "구매자" : "요청자"
                        }
                    });

                    text = `제목) ${value.board.title} / ${value.board.state}`

                    return <List 
                        key={value.id}
                        id={value.id}
                        name={name}
                        text={text}
                        image={image}
                        address={address}
                        time={time}
                        state={state}
                        data={value.board}
                        target_id={target_id}
                        listClick={listClick}
                    />
                })
            }
        </ScrollView>
    );
}

const chatListStyle = StyleSheet.create({
    container: {
        flex: 1, 
    }
});

export default ChatList;