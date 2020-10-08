import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import moment from 'moment';
moment.locale("ko");
import List from '../../component/ChatItem';

function ChatList(props) {
    const [ list, setList ] = useState([
        { id: 0, name: "꼬부맘1", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 1번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 1, name: "꼬부맘2", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 2번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 2, name: "꼬부맘3", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 3번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 3, name: "꼬부맘4", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 4번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 4, name: "꼬부맘5", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 5번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 5, name: "꼬부맘6", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 6번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 6, name: "꼬부맘7", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 7번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 7, name: "꼬부맘8", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 8번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 8, name: "꼬부맘9", image: null, address: "서울시 영등포구 도림동", text: "안녕하세요. 9번입니다.", time: moment(new Date()).format("LLLL")},
        { id: 9, name: "꼬부맘10", image: null, address: "서울시 영등포구 도림동 000번지 0층 000호", text: "안녕하세요. 10번입니다.", time: moment(new Date()).format("LLLL")},
    ]);

    function listClick(id, name) {
        props.navigation.navigate("ChatListRoom", { id, name });
        console.log(id);
    }

    return (
        <ScrollView style={chatListStyle.container}>
            {
                list.map(value => {
                    return <List 
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        image={value.image}
                        address={value.address}
                        text={value.text}
                        time={value.time}
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