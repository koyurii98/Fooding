import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import moment from 'moment';
moment.locale("ko");
import List from '../../component/ChatItem';

function ChatList(props) {
    const data = [];

    function listClick(obj) {
        props.navigation.navigate("ChatListRoom", {
            data : obj.board,
        });
    }

    useEffect(() => {

    }, []);

    return (
        <ScrollView style={chatListStyle.container}>
            {
                data.map(value => {
                    return <List 
                        key={value.id}
                        id={value.id}
                        name={value.board.user.name}
                        image={value.board.user.image}
                        address={value.board.user.address}
                        text={value.board.title}
                        time={value.createdAt}
                        obj={value}
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